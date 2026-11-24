/* Majority Rules — daily pick logic. No network, no build step. */
(function () {
  var D = window.DILEMMAS || [];
  function hashDate(s) { var h = 0; for (var i = 0; i < s.length; i++) { h = (h * 31 + s.charCodeAt(i)) >>> 0; } return h; }
  function todayStr() { var d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
  function load(key, def) { try { var v = localStorage.getItem(key); return v === null ? def : JSON.parse(v); } catch (e) { return def; } }
  function save(key, v) { try { localStorage.setItem(key, JSON.stringify(v)); } catch (e) {} }

  var date = todayStr();
  var idx = D.length ? hashDate(date) % D.length : 0;
  var current = D[idx];
  var state = load('mr-state', { streak: 0, score: 0, lastDate: '', played: {} });
  var practiceIdx = null;

  var $ = function (id) { return document.getElementById(id); };
  function render(dilemma, label) {
    $('dateLine').textContent = date;
    $('streakLine').textContent = 'Streak: ' + state.streak;
    $('scoreLine').textContent = 'Score: ' + state.score;
    $('qLabel').textContent = label;
    $('question').textContent = dilemma.q;
    $('btnA').textContent = 'A · ' + dilemma.a;
    $('btnB').textContent = 'B · ' + dilemma.b;
    $('btnA').disabled = false; $('btnB').disabled = false;
    $('result').hidden = true;
    $('hint').textContent = 'Pick a side. No wrong answers — only the majority.';
  }
  function reveal(dilemma, pick) {
    var pctA = dilemma.pctA, pctB = 100 - pctA;
    var pickedMajority = (pick === 'A' && pctA >= 50) || (pick === 'B' && pctB > 50);
    $('labelA').textContent = 'A · ' + dilemma.a;
    $('labelB').textContent = 'B · ' + dilemma.b;
    $('barA').style.width = pctA + '%'; $('barB').style.width = pctB + '%';
    $('pctA').textContent = pctA + '%'; $('pctB').textContent = pctB + '%';
    if (pickedMajority) { state.streak += 1; state.score += 1; $('verdict').textContent = 'You sided with the majority. Streak: ' + state.streak + '.'; }
    else { state.streak = 0; $('verdict').textContent = 'You went against the majority this time. Streak reset.'; }
    save('mr-state', state);
    $('streakLine').textContent = 'Streak: ' + state.streak;
    $('scoreLine').textContent = 'Score: ' + state.score;
    $('shareText').textContent = 'Majority Rules ' + date + ': I picked ' + (pick === 'A' ? dilemma.a : dilemma.b) + ' (' + (pick === 'A' ? pctA : pctB) + '% agreed). Streak ' + state.streak + '.';
    $('result').hidden = false;
    $('hint').textContent = 'Come back tomorrow for a new dilemma.';
    $('btnA').disabled = true; $('btnB').disabled = true;
  }
  $('btnA').addEventListener('click', function () { reveal(current, 'A'); });
  $('btnB').addEventListener('click', function () { reveal(current, 'B'); });
  $('copyBtn').addEventListener('click', function () {
    var t = $('shareText').textContent;
    if (navigator.clipboard) { navigator.clipboard.writeText(t).then(function () { $('copyBtn').textContent = 'Copied!'; }); }
  });
  $('practiceBtn').addEventListener('click', function () {
    var n; do { n = Math.floor(Math.random() * D.length); } while (D.length > 1 && n === idx);
    practiceIdx = n; current = D[n]; render(current, 'Practice dilemma');
  });
  render(current, "Today's dilemma");
  window.__mr = { today: date, index: idx, dilemmas: D.length };
})();
