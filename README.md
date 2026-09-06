# Infinite Adventure

Beyond the horizon, the adventure continues.

Play: https://bigbirdvc.github.io/infinite-adventure/

An endless idle fantasy RPG with procedural maps, 20 quest chains, exploration, battles and saved progress. The adventurer travels independently through villages, camps, outposts and ruins. Enemies scale with his level.

## Map views

Full Map is the default and shows the entire map using the original pixel artwork, scaled to fit the available space. Follow enlarges the landscape and follows the adventurer. Your view preference is saved. Original tiles are 32 by 32 pixels; Follow displays them at least 40 CSS pixels across. Battle portraits display at 56 by 56 CSS pixels on desktop. The logo uses the classic sword and moss emblem.

On desktop the map and encounter panel fit within one viewport, with an independently scrolling journal. Mobile uses a stacked layout.

## Timing and progress

Default runs 20% slower than the preceding version. Slow is half Default and Fast is twice Default. Offline progress always uses Default. Tests across 100 generated maps completed in 272 to 334 seconds at Default.

Saves include levels, inventory, quests, map, route, battle and random seed. Older Infinite Adventure saves retain their progress and receive updated fantasy wording. Returning simulates up to seven days and reports actual progress; time beyond that limit earns no additional progress.

## Local play

Open index.html with engine.js, character.js, terrain.js, monsters.js, logo.png and meadow.wav alongside it. No build or external dependencies. Browser restrictions may affect local-file saves. Original music is included. Approximately 1 MB total. MIT licensed.

## Your character

Choose a name and a Knight, Elf or Mage. Roll Outfit randomises six equipment colour regions. The chosen shape and colours appear in the creator, on the map and in battle; narration uses the chosen name. Existing unnamed saves request this setup while keeping their progress.

The header contains map title, sound, Slow / Normal / Fast speed and Full Map / Follow view controls. Delete Character at the bottom of the journal opens a permanent-deletion warning with Keep Character and Delete Forever actions. Confirming removes the saved adventure and returns to the creator.

## Regions and encounters

Eight terrain layouts generate dry forests, winding rivers, river valleys, twin rivers, lakesides, deltas, broad crossings and woodland ponds. Two to six irregularly positioned hubs connect through branching roads and optional loops. Buildings retain clear entrances; water crossings become bridges. Active saved maps are preserved until the next region.

Sixteen enemy types include skeletons, slimes, bats, treants, goblins, wolves, orcs, ogres, trolls, giant spiders, wraiths, golems, drakes, fallen knights, warlocks and bandits. Geese are no longer enemies. Tougher foes have increased health, damage and rewards. The existing finite battle limit keeps journeys progressing.

The desktop header is one row with logo, map badge, speed, view and sound controls. The tagline is removed. Activity category labels remain in the source but are hidden; combat rounds have no headline.

Validation: 300 generated maps across all layouts, all 16 enemies, two to six hubs, reachable quests and building doors, and completion within six minutes at Normal. Tests also cover deterministic save/resume, speed scaling, offline progress and migration from earlier saves.

The activity card is pinned above the independently scrolling journal. It expands for combat while the map keeps its full available height; Full Map scales the existing grid proportionally.
