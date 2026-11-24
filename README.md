# Majority Rules — Daily Dilemma

One dilemma a day. Guess what most people would pick. Built for Reddit's
Game of the Day Hackathon (Devpost, $35,000, submissions close
2026-12-08 18:00 PT).

## How to play
1. Read today's dilemma — everyone gets the same one, seeded by date.
2. Pick side A or side B.
3. See the split. Pick the majority side and your streak grows; miss and
   it resets. Copy the result card and bring it to the comments.

## Why this game
- Daily by design: one seeded dilemma a day, 30 in the bank, plus a
  practice mode for extra rounds.
- Community-first: the game is about what most people would do, not
  about being right. The result card is made to be shared and argued
  about in comments.
- Bite-sized: one screen, two buttons, no setup, no account.

## Honest notes
- The splits shown are the game's baked-in answer key for this demo
  build, not a claim about a real-world poll. A live version tallies
  real player votes.
- This build is a plain web app (HTML/CSS/JS, no build step, no network).
  The Devvit Web version wraps this same game in the Devvit template;
  the game itself does not change.

## Run it
Open `index.html` in a browser. No server needed.

## Files
- `index.html`, `app.css`, `app.js` — the game
- `dilemmas.js` — 30 dilemmas with baked-in splits
- `OPENING-CARD.md` — the task's opening card (problem, success bar, scope)
