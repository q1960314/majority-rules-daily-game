/* Majority Rules — dilemma bank.
   Each item: question, option A, option B, pctA (share picking A, 0-100).
   pctA is the game's baked-in answer key for this demo build, not a
   claim about a real-world poll. A live version replaces it with
   tallied votes from players. */
window.DILEMMAS = [
  { q: "Your phone dies on a long trip. Do you:", a: "Talk to strangers", b: "Stare out the window in silence", pctA: 38 },
  { q: "Free flight, but middle seat for 10 hours. Take it?", a: "Yes, free is free", b: "No, pay for comfort", pctA: 61 },
  { q: "Someone cuts in line in front of you. Do you:", a: "Say something", b: "Let it go", pctA: 57 },
  { q: "Win $1,000 now or a 50/50 shot at $3,000?", a: "Take the $1,000", b: "Gamble for $3,000", pctA: 68 },
  { q: "Your favourite show ends badly. Do you:", a: "Rewatch the good seasons", b: "Pretend the ending never happened", pctA: 54 },
  { q: "Alarm rings. Do you:", a: "Get up at once", b: "Snooze twice, then panic", pctA: 31 },
  { q: "A friend cancels plans last minute. You feel:", a: "Relieved, honestly", b: "Annoyed, I cleared my day", pctA: 59 },
  { q: "Leftover pizza for breakfast?", a: "Obviously yes", b: "No, breakfast food only", pctA: 73 },
  { q: "Would you rather be 10 minutes early or 10 minutes late?", a: "Early, always", b: "Late, life happens", pctA: 64 },
  { q: "Group chat with 200 unread messages. Do you:", a: "Read them all", b: "Mute it forever", pctA: 42 },
  { q: "Free time on a rainy day. Pick one:", a: "One long film", b: "Three short episodes", pctA: 48 },
  { q: "Someone holds the lift door for you. You:", a: "Thank them warmly", b: "Nod and look at your shoes", pctA: 66 },
  { q: "Would you give up your phone for a week for $500?", a: "Yes, easy money", b: "No, I need it", pctA: 44 },
  { q: "Your neighbour plays loud music at midnight. Do you:", a: "Knock and ask them to stop", b: "Put in earplugs", pctA: 52 },
  { q: "Best way to spend a unexpected free afternoon?", a: "Go outside", b: "Stay in and rest", pctA: 58 },
  { q: "You find $20 on the street. Do you:", a: "Keep it", b: "Hand it in / give it away", pctA: 47 },
  { q: "Text or call to sort out a misunderstanding?", a: "Call, faster", b: "Text, I can think first", pctA: 39 },
  { q: "Would you rather know the date you die, or how you die?", a: "The date", b: "The how", pctA: 55 },
  { q: "Cook at home or order in on a Friday night?", a: "Cook, it's cheaper", b: "Order in, it's Friday", pctA: 62 },
  { q: "Your team loses because of one mistake. Do you blame:", a: "The player, openly", b: "Nobody, it happens", pctA: 71 },
  { q: "Queue for 40 minutes for a famous bakery. Worth it?", a: "Yes, once in a while", b: "No, never", pctA: 49 },
  { q: "Do you reply to a work message after hours?", a: "Yes, straight away", b: "No, it waits till morning", pctA: 36 },
  { q: "Would you live without the internet for a month for $5,000?", a: "Yes", b: "No way", pctA: 53 },
  { q: "Pick a superpower for daily life:", a: "Stop time for 10 minutes a day", b: "Read minds for 10 minutes a day", pctA: 67 },
  { q: "Your friend's cooking is terrible. Do you:", a: "Tell them kindly", b: "Eat it and say nothing", pctA: 41 },
  { q: "Rain or snow, which do you prefer?", a: "Rain", b: "Snow", pctA: 56 },
  { q: "Would you rather have more time or more money?", a: "More time", b: "More money", pctA: 69 },
  { q: "You see a stranger drop their wallet. Do you:", a: "Chase them to return it", b: "Leave it, not my business", pctA: 78 },
  { q: "Sleep with the window open or closed?", a: "Open, fresh air", b: "Closed, quiet", pctA: 51 },
  { q: "Last slice of cake. Your friend reaches for it. Do you:", a: "Let them have it", b: "Split it in half", pctA: 60 }
];
