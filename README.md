# Infinite Adventure

![Infinite Adventure pixel logo](logo.png)

**Play:** https://bigbirdvc.github.io/infinite-adventure/

An endless, completely idle fantasy RPG. A small adventurer follows roads, explores villages and camps, gathers useless relics, faces sleepy monsters, and finishes every quest. No grand destiny awaits.

## Watching speed

- **Default (1):** three times the pace of Department of Nothing 2. A tile takes 0.3 seconds.
- **Fast (2×):** twice the new Default.
- **Slow (0.5×):** half the new Default.
- **Offline:** always Default (1), regardless of the last selected watching speed.

The watching speed is remembered separately from the adventure save. Short encounter messages and a persistent travel history accompany the faster pace.

## Regions with structure

Each map has a river, connected roads, actual bridges, and four planned settlement or wilderness clearings. Buildings have blocked footprints, accessible doors, and paths to their settlement. Clustered woods leave the roads clear. Three road layouts and eight biomes vary the landscape.

Cottages, taverns, tents, watchtowers, towers, and ruins appear where they belong. Townsfolk stay near settlements; monsters and relics favour the wilder places. The adventurer prefers roads and stands beside objects to interact.

Each region has **1–3 main quests** from 20 fantasy quest chains, with optional encounters and diversions filling out the journey. A time budget targets roughly 4–5 minutes at Default. A conservative remaining-quest estimate prevents optional detours from exceeding the six-minute budget. Every main quest is completed before departure. No quests are silently skipped and there is no teleporting to beat the clock.

## Endless and saved

Experience, gold, rations, levels, and completed-region counts continue indefinitely. New foes are within one level of the hero. Battles display both pixel sprites. A defeat or overlong battle cannot block the adventure.

Browser storage keeps the exact map, path, event countdown, battle, and random seed. Returning simulates up to seven days at Default and shows actual results; longer absences are described separately as an unrecorded daydream. The other games' saves are separate.

## Local play

Open `index.html` with `engine.js`, `logo.png`, and `meadow.wav` alongside it. No installation, libraries, fonts, accounts, or external services. Browser restrictions may affect local-file saves; the hosted version uses normal per-origin storage.

The hand-built pixel logo is a transparent bitmap, with a mossy sword emblem and winding path. Game sprites use the same pixel palette and rendering style. Original 40-second music is bundled. Approximately 1 MB total. MIT licensed.

Infinite Adventure: Default runs at 80% of the previous game’s speed. Offline uses Default. The map camera follows the hero with tiles at least 40 CSS pixels across; battle portraits are 96 CSS pixels. Desktop play stays within the viewport and the journal scrolls independently.
