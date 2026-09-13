# Omega vs Apex (OVA) - The Ultimate Fighting Game 🎮

A turn-based 3D fighting game built with HTML5, CSS3, and Vanilla JavaScript featuring two iconic teams: **OMEGA** (Red) and **APEX** (Blue).

## Features ✨

### Game Modes
- **Player vs CPU** - Battle against an AI opponent that scales in difficulty with your rank
- **Player vs Player** - Local multiplayer combat where two players can battle head-to-head

### Character System
- **20 Unique Characters** - 10 characters per team, each with distinct abilities
- **Custom Abilities** - Each character has:
  - 2 Attack abilities (with different damage and cooldowns)
  - 1 Heal ability
  - 1 Defense mechanism (blocks incoming attacks entirely)
- **Visual Design** - Colorful, stylized characters inspired by Clash Royale/Clash of Clans

### Battle Mechanics
- **Turn-Based Combat** - Strategic, alternating turns between players
- **HP System** - Each character starts with 250 HP
- **Cooldown System** - Abilities have cooldowns (2-3 turns or 20+ seconds)
- **Defense Blocking** - Defense actions completely block the next incoming attack
- **Real-time Battle Log** - Watch the action unfold with detailed combat messages

### Rank Progression System
- **8 Rank Tiers**:
  1. 🥉 BRONZE
  2. ⚪ SILVER
  3. 🟡 GOLD
  4. 💎 DIAMOND
  5. 🟢 EMERALD
  6. 🔴 RUBY
  7. 👑 DIAMOND LEGEND

- **Performance-Based Ranking**:
  - **Fast Wins** (< 30 seconds) = +30% rank
  - **Medium Wins** (30-60 seconds) = +20% rank
  - **Slow Wins** (60-90 seconds) = +15% rank
  - **Very Slow Wins** (90+ seconds) = +5% rank
  - **Losses** = -10% rank
  - **Rank Protection** - Very quick losses don't deduct rank

- **100% Progression per Rank** - Each rank goes from 0-100%
- **Persistent Progress** - Your rank is saved locally and persists when you close/reopen the game

### AI Difficulty Scaling
- **Bronze/Silver** - Random action selection
- **Gold/Diamond** - Balanced strategic play
- **Emerald/Ruby/Legend** - Intelligent decision-making based on HP and battle state

## Character List

### OMEGA Team 🔴
1. 🔥 **Inferno** - Fire-based fighter
2. ❄️ **Frost** - Ice-powered warrior
3. ⚡ **Volt** - Lightning striker
4. 🌑 **Shadow** - Dark energy user
5. 💪 **Titan** - Strength-based heavyweight
6. 👻 **Phantom** - Ethereal fighter
7. 😈 **Infernal** - Demonic warrior
8. ✨ **Celestial** - Star-powered combatant
9. 🐍 **Venom** - Poison specialist
10. 🔮 **Mystic** - Arcane magic user

### APEX Team 🔵
1. 💎 **Crystal** - Gem-based fighter
2. 🌊 **Surge** - Water warrior
3. 💨 **Velocity** - Speed demon
4. ⭐ **Nova** - Star burst fighter
5. 🦁 **Beast** - Primal warrior
6. 🎯 **Nexus** - Precision striker
7. 🕷️ **Wraith** - Spider-like fighter
8. 🌈 **Prism** - Light refraction user
9. 📢 **Echo** - Sound wave specialist
10. 👑 **Apex** - Leader of the APEX team

## How to Play 🎮

### Getting Started
1. Open `index.html` in your web browser
2. Click the **START GAME** button on the home screen
3. Choose your game mode:
   - **Player vs CPU** - Single player against AI
   - **Player vs Player** - Local multiplayer

### Character Selection
1. Select a character from your team (OMEGA or APEX)
2. Preview the character and their abilities
3. (In PvP) Player 2 selects their character
4. Click the golden **START GAME** button to begin

### During Battle
1. **Read the turn indicator** to know whose turn it is
2. **Click an action button** to execute an ability:
   - Attack buttons (red) - Deal damage
   - Heal button (green) - Restore HP
   - Defense button (cyan) - Block next attack
3. **Watch the battle log** for detailed action descriptions
4. **Monitor HP bars** above each character
5. **Wait for enemy turn** (if CPU or PvP)

### Winning
- Reduce opponent's HP to 0
- Faster victories = more rank gain!

### Rank System (CPU Mode Only)
- Click the **📊 RANK** button on the CPU mode screen to view your progression
- See your current rank, percentage, and rank symbols
- Progress is automatically saved to your browser

## Game Controls 🎮

| Action | Control |
|--------|---------|
| Navigate Screens | Click Buttons |
| Select Character | Click Character Box |
| Attack/Heal/Defend | Click Action Button |
| Check Rank | Click 📊 RANK Button |
| Go Back | Click ← BACK Button |

## Technical Details 🛠️

### Built With
- **HTML5** - Game structure and layout
- **CSS3** - Styling and animations (with glassmorphism effects)
- **Vanilla JavaScript** - Complete game logic, no frameworks
- **LocalStorage API** - Rank persistence

### File Structure
```
omega-vs-apex/
├── index.html      # Game HTML structure
├── styles.css      # All styling and animations
├── game.js         # Complete game logic
└── README.md       # This file
```

### Browser Compatibility
- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)

## Features in Detail

### Character Selection Screen
- View all 20 characters
- Large preview shows selected character
- Character stats displayed (abilities and cooldowns)
- 3D character animation when selected

### Battle Screen
- Side-by-side character models
- HP bars with real-time updates
- Turn indicator showing whose turn it is
- Battle log tracking all actions
- Action panel with 4 ability buttons

### Game Over Screen
- Victory/Defeat announcement
- Battle duration displayed
- Rank points gained/lost
- Current rank displayed

## Tips for Success 💡

1. **Learn Your Character** - Each character has unique damage values and cooldowns
2. **Manage Cooldowns** - Plan ahead for when abilities will be available
3. **Strategic Defense** - Use defense to block powerful incoming attacks
4. **Heal Wisely** - Don't waste heals when you have full HP
5. **Predict Opponents** - Learn CPU patterns at different ranks
6. **Speed Matters** - Win quickly to climb ranks faster!

## Rank Progression Guide

| Rank | Difficulty | Strategy |
|------|-----------|----------|
| Bronze | Random AI | Learn the mechanics |
| Silver | Balanced | Mix offense and defense |
| Gold | Strategic | Use abilities efficiently |
| Diamond | Tactical | Predict opponent moves |
| Emerald | Smart | Heal at critical moments |
| Ruby | Intelligent | Long battles require strategy |
| Legend | Expert | Master all abilities and timing |

## Troubleshooting 🔧

### Rank not saving
- Check if LocalStorage is enabled in your browser
- Try clearing browser cache and reloading

### Game not loading
- Ensure all files (index.html, styles.css, game.js) are in the same directory
- Try a different browser
- Check browser console for errors (F12)

### Performance issues
- Close other browser tabs
- Clear browser cache
- Update your browser to the latest version

## Future Features 🚀

- [ ] Online multiplayer
- [ ] More character skins
- [ ] Special ultimate abilities
- [ ] Tournament mode
- [ ] Character leveling system
- [ ] Custom game settings
- [ ] Sound effects and music
- [ ] Mobile responsive design

## Author
Created with ❤️ for fighting game enthusiasts!

## License
This project is free to use and modify.

---

**Enjoy the game and climb the ranks to become a Legend!** 👑🎮