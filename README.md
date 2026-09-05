# Infinite Adventure

Beyond the horizon, the adventure continues.

Play: https://bigbirdvc.github.io/infinite-adventure/

An endless idle fantasy RPG with procedural maps, 20 quest chains, exploration, battles and saved progress. The adventurer travels independently through villages, camps, outposts and ruins. Enemies scale with his level.

## Map views

Full is the default and shows the entire map using the original pixel artwork, scaled to fit the available space. Close enlarges the landscape and follows the adventurer. Your view preference is saved. Original tiles are 32 by 32 pixels; Close displays them at least 40 CSS pixels across. Battle portraits display at 96 by 96 pixels. The logo uses the classic sword and moss emblem.

On desktop the map and encounter panel fit within one viewport, with an independently scrolling journal. Mobile uses a stacked layout.

## Timing and progress

Default runs 20% slower than the preceding version. Slow is half Default and Fast is twice Default. Offline progress always uses Default. Tests across 100 generated maps completed in 272 to 334 seconds at Default.

Saves include levels, inventory, quests, map, route, battle and random seed. Older Infinite Adventure saves retain their progress and receive updated fantasy wording. Returning simulates up to seven days and reports actual progress; time beyond that limit earns no additional progress.

## Local play

Open index.html with engine.js, logo.png and meadow.wav alongside it. No build or external dependencies. Browser restrictions may affect local-file saves. Original music is included. Approximately 1 MB total. MIT licensed.
