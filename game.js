// GAME STATE
let gameState = {
    currentScreen: 'home',
    gameMode: null, // 'cpu' or 'pvp'
    player1: null,
    player2: null,
    currentTurn: 1,
    battleActive: false,
    rankData: {
        rank: 0, // 0-7 (Bronze to Diamond Legend)
        percentage: 0
    }
};

// CHARACTER DATABASE
const characters = {
    omega: [
        {
            id: 1,
            name: 'Inferno',
            emoji: '🔥',
            color: '#ff6b6b',
            attacks: [
                { name: 'Flame Strike', damage: 35, cooldown: 1, type: 'attack' },
                { name: 'Burn Wave', damage: 45, cooldown: 2, type: 'attack' },
                { name: 'Phoenix Heal', healing: 40, cooldown: 3, type: 'heal' }
            ],
            defense: { name: 'Ember Shield', blockChance: 1, cooldown: 2, type: 'defense' }
        },
        {
            id: 2,
            name: 'Frost',
            emoji: '❄️',
            color: '#4ecdc4',
            attacks: [
                { name: 'Ice Shard', damage: 30, cooldown: 1, type: 'attack' },
                { name: 'Blizzard', damage: 50, cooldown: 3, type: 'attack' },
                { name: 'Cryogenic Heal', healing: 35, cooldown: 2, type: 'heal' }
            ],
            defense: { name: 'Frozen Armor', blockChance: 1, cooldown: 2, type: 'defense' }
        },
        {
            id: 3,
            name: 'Volt',
            emoji: '⚡',
            color: '#ffd93d',
            attacks: [
                { name: 'Spark Strike', damage: 28, cooldown: 1, type: 'attack' },
                { name: 'Thunderbolt', damage: 55, cooldown: 2, type: 'attack' },
                { name: 'Energy Restore', healing: 45, cooldown: 3, type: 'heal' }
            ],
            defense: { name: 'Lightning Barrier', blockChance: 1, cooldown: 2, type: 'defense' }
        },
        {
            id: 4,
            name: 'Shadow',
            emoji: '🌑',
            color: '#9b59b6',
            attacks: [
                { name: 'Shadow Strike', damage: 40, cooldown: 2, type: 'attack' },
                { name: 'Dark Pulse', damage: 50, cooldown: 3, type: 'attack' },
                { name: 'Shadow Mend', healing: 50, cooldown: 3, type: 'heal' }
            ],
            defense: { name: 'Void Shield', blockChance: 1, cooldown: 2, type: 'defense' }
        },
        {
            id: 5,
            name: 'Titan',
            emoji: '💪',
            color: '#8B4513',
            attacks: [
                { name: 'Ground Slam', damage: 45, cooldown: 2, type: 'attack' },
                { name: 'Massive Blow', damage: 60, cooldown: 3, type: 'attack' },
                { name: 'Stone Heal', healing: 60, cooldown: 3, type: 'heal' }
            ],
            defense: { name: 'Stone Wall', blockChance: 1, cooldown: 2, type: 'defense' }
        },
        {
            id: 6,
            name: 'Phantom',
            emoji: '👻',
            color: '#e1e1e1',
            attacks: [
                { name: 'Spirit Slash', damage: 32, cooldown: 1, type: 'attack' },
                { name: 'Ethereal Burst', damage: 48, cooldown: 2, type: 'attack' },
                { name: 'Spectral Heal', healing: 42, cooldown: 2, type: 'heal' }
            ],
            defense: { name: 'Phantom Shield', blockChance: 1, cooldown: 2, type: 'defense' }
        },
        {
            id: 7,
            name: 'Infernal',
            emoji: '😈',
            color: '#e74c3c',
            attacks: [
                { name: 'Demonic Strike', damage: 42, cooldown: 2, type: 'attack' },
                { name: 'Hell Fire', damage: 58, cooldown: 3, type: 'attack' },
                { name: 'Dark Recovery', healing: 38, cooldown: 2, type: 'heal' }
            ],
            defense: { name: 'Demonic Armor', blockChance: 1, cooldown: 2, type: 'defense' }
        },
        {
            id: 8,
            name: 'Celestial',
            emoji: '✨',
            color: '#f1c40f',
            attacks: [
                { name: 'Starlight Strike', damage: 35, cooldown: 1, type: 'attack' },
                { name: 'Cosmic Ray', damage: 52, cooldown: 3, type: 'attack' },
                { name: 'Heavenly Heal', healing: 55, cooldown: 3, type: 'heal' }
            ],
            defense: { name: 'Celestial Shield', blockChance: 1, cooldown: 2, type: 'defense' }
        },
        {
            id: 9,
            name: 'Venom',
            emoji: '🐍',
            color: '#27ae60',
            attacks: [
                { name: 'Poison Fang', damage: 38, cooldown: 2, type: 'attack' },
                { name: 'Toxic Burst', damage: 54, cooldown: 3, type: 'attack' },
                { name: 'Regenerate', healing: 48, cooldown: 2, type: 'heal' }
            ],
            defense: { name: 'Venomous Shield', blockChance: 1, cooldown: 2, type: 'defense' }
        },
        {
            id: 10,
            name: 'Mystic',
            emoji: '🔮',
            color: '#8e44ad',
            attacks: [
                { name: 'Arcane Bolt', damage: 33, cooldown: 1, type: 'attack' },
                { name: 'Magical Explosion', damage: 56, cooldown: 3, type: 'attack' },
                { name: 'Mystic Restoration', healing: 50, cooldown: 3, type: 'heal' }
            ],
            defense: { name: 'Arcane Barrier', blockChance: 1, cooldown: 2, type: 'defense' }
        }
    ],
    apex: [
        {
            id: 11,
            name: 'Crystal',
            emoji: '💎',
            color: '#3498db',
            attacks: [
                { name: 'Crystal Shard', damage: 35, cooldown: 1, type: 'attack' },
                { name: 'Shatter', damage: 48, cooldown: 2, type: 'attack' },
                { name: 'Crystal Heal', healing: 42, cooldown: 2, type: 'heal' }
            ],
            defense: { name: 'Diamond Armor', blockChance: 1, cooldown: 2, type: 'defense' }
        },
        {
            id: 12,
            name: 'Surge',
            emoji: '🌊',
            color: '#1abc9c',
            attacks: [
                { name: 'Wave Crash', damage: 38, cooldown: 2, type: 'attack' },
                { name: 'Tidal Wave', damage: 56, cooldown: 3, type: 'attack' },
                { name: 'Water Restore', healing: 50, cooldown: 3, type: 'heal' }
            ],
            defense: { name: 'Aquatic Shield', blockChance: 1, cooldown: 2, type: 'defense' }
        },
        {
            id: 13,
            name: 'Velocity',
            emoji: '💨',
            color: '#2980b9',
            attacks: [
                { name: 'Speed Strike', damage: 32, cooldown: 1, type: 'attack' },
                { name: 'Sonic Boom', damage: 54, cooldown: 2, type: 'attack' },
                { name: 'Swift Heal', healing: 40, cooldown: 2, type: 'heal' }
            ],
            defense: { name: 'Wind Barrier', blockChance: 1, cooldown: 2, type: 'defense' }
        },
        {
            id: 14,
            name: 'Nova',
            emoji: '⭐',
            color: '#e67e22',
            attacks: [
                { name: 'Star Burst', damage: 40, cooldown: 2, type: 'attack' },
                { name: 'Supernova', damage: 60, cooldown: 3, type: 'attack' },
                { name: 'Stellar Heal', healing: 48, cooldown: 3, type: 'heal' }
            ],
            defense: { name: 'Solar Flare', blockChance: 1, cooldown: 2, type: 'defense' }
        },
        {
            id: 15,
            name: 'Beast',
            emoji: '🦁',
            color: '#d35400',
            attacks: [
                { name: 'Beast Claw', damage: 44, cooldown: 2, type: 'attack' },
                { name: 'Savage Roar', damage: 58, cooldown: 3, type: 'attack' },
                { name: 'Primal Heal', healing: 45, cooldown: 2, type: 'heal' }
            ],
            defense: { name: 'Beast Hide', blockChance: 1, cooldown: 2, type: 'defense' }
        },
        {
            id: 16,
            name: 'Nexus',
            emoji: '🎯',
            color: '#34495e',
            attacks: [
                { name: 'Precision Strike', damage: 36, cooldown: 1, type: 'attack' },
                { name: 'Focus Blast', damage: 52, cooldown: 2, type: 'attack' },
                { name: 'System Restore', healing: 50, cooldown: 3, type: 'heal' }
            ],
            defense: { name: 'Network Shield', blockChance: 1, cooldown: 2, type: 'defense' }
        },
        {
            id: 17,
            name: 'Wraith',
            emoji: '🕷️',
            color: '#c0392b',
            attacks: [
                { name: 'Wraith Claw', damage: 39, cooldown: 2, type: 'attack' },
                { name: 'Web Trap', damage: 55, cooldown: 3, type: 'attack' },
                { name: 'Arachnid Heal', healing: 44, cooldown: 2, type: 'heal' }
            ],
            defense: { name: 'Web Shield', blockChance: 1, cooldown: 2, type: 'defense' }
        },
        {
            id: 18,
            name: 'Prism',
            emoji: '🌈',
            color: '#9b59b6',
            attacks: [
                { name: 'Light Refraction', damage: 34, cooldown: 1, type: 'attack' },
                { name: 'Rainbow Blast', damage: 50, cooldown: 3, type: 'attack' },
                { name: 'Prismatic Heal', healing: 46, cooldown: 2, type: 'heal' }
            ],
            defense: { name: 'Prism Shield', blockChance: 1, cooldown: 2, type: 'defense' }
        },
        {
            id: 19,
            name: 'Echo',
            emoji: '📢',
            color: '#2c3e50',
            attacks: [
                { name: 'Sound Wave', damage: 30, cooldown: 1, type: 'attack' },
                { name: 'Sonic Scream', damage: 53, cooldown: 2, type: 'attack' },
                { name: 'Resonant Heal', healing: 48, cooldown: 3, type: 'heal' }
            ],
            defense: { name: 'Echo Chamber', blockChance: 1, cooldown: 2, type: 'defense' }
        },
        {
            id: 20,
            name: 'Apex',
            emoji: '👑',
            color: '#16a085',
            attacks: [
                { name: 'Royal Strike', damage: 46, cooldown: 2, type: 'attack' },
                { name: 'Apex Power', damage: 62, cooldown: 3, type: 'attack' },
                { name: 'Royal Recovery', healing: 52, cooldown: 3, type: 'heal' }
            ],
            defense: { name: 'Royal Guard', blockChance: 1, cooldown: 2, type: 'defense' }
        }
    ]
};

// RANK SYSTEM
const ranks = [
    { name: 'BRONZE', symbol: '🥉', minPercent: 0, maxPercent: 100 },
    { name: 'SILVER', symbol: '⚪', minPercent: 0, maxPercent: 100 },
    { name: 'GOLD', symbol: '🟡', minPercent: 0, maxPercent: 100 },
    { name: 'DIAMOND', symbol: '💎', minPercent: 0, maxPercent: 100 },
    { name: 'EMERALD', symbol: '🟢', minPercent: 0, maxPercent: 100 },
    { name: 'RUBY', symbol: '🔴', minPercent: 0, maxPercent: 100 },
    { name: 'DIAMOND LEGEND', symbol: '👑', minPercent: 0, maxPercent: 100 }
];

// SCREEN NAVIGATION
function showScreen(screenName) {
    document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
    document.getElementById(screenName).classList.add('active');
    gameState.currentScreen = screenName;
}

function goHome() {
    showScreen('homeScreen');
    gameState.gameMode = null;
}

function goToModeSelect() {
    showScreen('modeSelectScreen');
}

function goToCPUMode() {
    gameState.gameMode = 'cpu';
    showScreen('cpuModeScreen');
}

function goToPVPMode() {
    gameState.gameMode = 'pvp';
    showScreen('characterSelectScreen');
    document.getElementById('modeIndicator').textContent = 'PLAYER vs PLAYER';
}

function openRankScreen() {
    showScreen('rankScreen');
    updateRankDisplay();
}

function closeRankScreen() {
    showScreen('cpuModeScreen');
}

function goToCharacterSelect(mode) {
    gameState.gameMode = mode;
    showScreen('characterSelectScreen');
    if (mode === 'cpu') {
        document.getElementById('modeIndicator').textContent = 'PLAYER vs CPU';
    }
    renderCharacterSelect();
}

// CHARACTER SELECT
let selectedCharacters = {
    player1: null,
    player2: null
};

function renderCharacterSelect() {
    const omegaGrid = document.getElementById('omegaGrid');
    const apexGrid = document.getElementById('apexGrid');
    
    omegaGrid.innerHTML = '';
    apexGrid.innerHTML = '';
    
    characters.omega.forEach(char => {
        const box = document.createElement('div');
        box.className = 'character-box';
        box.style.borderColor = char.color;
        box.textContent = char.emoji;
        box.onclick = () => selectCharacter(char, 'player1', box);
        omegaGrid.appendChild(box);
    });
    
    characters.apex.forEach(char => {
        const box = document.createElement('div');
        box.className = 'character-box';
        box.style.borderColor = char.color;
        box.textContent = char.emoji;
        box.onclick = () => selectCharacter(char, 'player2', box);
        apexGrid.appendChild(box);
    });
}

function selectCharacter(character, team, element) {
    selectedCharacters[team] = character;
    
    // Update selection visual
    document.querySelectorAll(`#${team === 'player1' ? 'omegaGrid' : 'apexGrid'} .character-box`).forEach(box => {
        box.classList.remove('selected');
    });
    element.classList.add('selected');
    
    // Show character preview
    showCharacterPreview(character);
    
    // Enable start button if both characters selected
    if (selectedCharacters.player1 && (gameState.gameMode === 'pvp' ? selectedCharacters.player2 : true)) {
        document.getElementById('startBattleBtn').disabled = false;
    }
}

function showCharacterPreview(character) {
    const preview = document.getElementById('characterPreview3D');
    preview.innerHTML = `<div style="font-size: 120px; display: flex; align-items: center; justify-content: center; height: 100%; animation: bounce 0.6s ease-in-out;">
        ${character.emoji}
    </div>`;
    
    const stats = document.getElementById('characterStats');
    let statsHTML = `<div style="font-size: 20px; font-weight: bold; margin-bottom: 15px; color: ${character.color};">${character.name}</div>`;
    
    character.attacks.forEach((attack, index) => {
        statsHTML += `<div class="stat-line">
            <span class="stat-name">${attack.name}</span>
            <span class="stat-value">${attack.damage || attack.healing} / ${attack.cooldown}s</span>
        </div>`;
    });
    
    statsHTML += `<div class="stat-line" style="margin-top: 15px; padding-top: 15px; border-top: 1px solid rgba(255,255,255,0.2);">
        <span class="stat-name">${character.defense.name}</span>
        <span class="stat-value">Block / ${character.defense.cooldown}s</span>
    </div>`;
    
    stats.innerHTML = statsHTML;
}

// BATTLE SYSTEM
function startBattle() {
    // For CPU mode, auto-select CPU character
    if (gameState.gameMode === 'cpu') {
        const randomApex = characters.apex[Math.floor(Math.random() * characters.apex.length)];
        selectedCharacters.player2 = randomApex;
    }
    
    // Initialize players
    gameState.player1 = {
        character: selectedCharacters.player1,
        hp: 250,
        maxHp: 250,
        abilities: {
            attack1: { ...selectedCharacters.player1.attacks[0], cooldownRemaining: 0 },
            attack2: { ...selectedCharacters.player1.attacks[1], cooldownRemaining: 0 },
            heal: { ...selectedCharacters.player1.attacks[2], cooldownRemaining: 0 },
            defense: { ...selectedCharacters.player1.defense, cooldownRemaining: 0 }
        },
        isDefending: false
    };
    
    gameState.player2 = {
        character: selectedCharacters.player2,
        hp: 250,
        maxHp: 250,
        abilities: {
            attack1: { ...selectedCharacters.player2.attacks[0], cooldownRemaining: 0 },
            attack2: { ...selectedCharacters.player2.attacks[1], cooldownRemaining: 0 },
            heal: { ...selectedCharacters.player2.attacks[2], cooldownRemaining: 0 },
            defense: { ...selectedCharacters.player2.defense, cooldownRemaining: 0 }
        },
        isDefending: false
    };
    
    gameState.battleActive = true;
    gameState.currentTurn = 1;
    gameState.battleStartTime = Date.now();
    
    showScreen('battleScreen');
    updateBattleUI();
    renderActionPanel();
}

function updateBattleUI() {
    // Update player 1
    document.getElementById('player1Name').textContent = gameState.player1.character.name;
    document.getElementById('player1HPText').textContent = `${gameState.player1.hp}/${gameState.player1.maxHp}`;
    const hp1Percent = (gameState.player1.hp / gameState.player1.maxHp) * 100;
    document.getElementById('player1HPFill').style.width = hp1Percent + '%';
    document.getElementById('player1Model').innerHTML = `<div style="font-size: 100px; display: flex; align-items: center; justify-content: center; height: 100%;">${gameState.player1.character.emoji}</div>`;
    
    // Update player 2
    document.getElementById('player2Name').textContent = gameState.player2.character.name;
    document.getElementById('player2HPText').textContent = `${gameState.player2.hp}/${gameState.player2.maxHp}`;
    const hp2Percent = (gameState.player2.hp / gameState.player2.maxHp) * 100;
    document.getElementById('player2HPFill').style.width = hp2Percent + '%';
    document.getElementById('player2Model').innerHTML = `<div style="font-size: 100px; display: flex; align-items: center; justify-content: center; height: 100%;">${gameState.player2.character.emoji}</div>`;
}

function renderActionPanel() {
    const panel = document.getElementById('actionPanel');
    panel.innerHTML = '';
    
    const abilities = [
        { key: 'attack1', label: gameState.player1.abilities.attack1.name, type: 'attack' },
        { key: 'attack2', label: gameState.player1.abilities.attack2.name, type: 'attack' },
        { key: 'heal', label: gameState.player1.abilities.heal.name, type: 'heal' },
        { key: 'defense', label: gameState.player1.abilities.defense.name, type: 'defense' }
    ];
    
    abilities.forEach(ability => {
        const btn = document.createElement('button');
        btn.className = `action-button ${ability.type}`;
        const cooldown = gameState.player1.abilities[ability.key].cooldownRemaining;
        
        if (cooldown > 0) {
            btn.disabled = true;
            btn.innerHTML = `<div>${ability.label}</div><div class="cooldown-text">CD: ${cooldown}s</div>`;
        } else {
            btn.innerHTML = `<div>${ability.label}</div><div class="cooldown-text">Ready</div>`;
            btn.onclick = () => executeAction(ability.key);
        }
        
        panel.appendChild(btn);
    });
}

function executeAction(actionKey) {
    const action = gameState.player1.abilities[actionKey];
    const opponent = gameState.player2;
    
    let damage = 0;
    let healing = 0;
    let message = '';
    
    if (actionKey === 'defense') {
        gameState.player1.isDefending = true;
        message = `${gameState.player1.character.name} uses ${action.name}! Defense is active!`;
        action.cooldownRemaining = action.cooldown;
    } else if (action.damage) {
        if (opponent.isDefending) {
            message = `${gameState.player1.character.name} attacks, but ${opponent.character.name} blocks!`;
            opponent.isDefending = false;
        } else {
            damage = action.damage;
            opponent.hp = Math.max(0, opponent.hp - damage);
            message = `${gameState.player1.character.name} uses ${action.name}! Deals ${damage} damage!`;
        }
        action.cooldownRemaining = action.cooldown;
    } else if (action.healing) {
        healing = action.healing;
        gameState.player1.hp = Math.min(gameState.player1.maxHp, gameState.player1.hp + healing);
        message = `${gameState.player1.character.name} uses ${action.name}! Restores ${healing} HP!`;
        action.cooldownRemaining = action.cooldown;
    }
    
    addBattleLog(message);
    updateBattleUI();
    
    if (gameState.player2.hp <= 0) {
        endBattle(true);
        return;
    }
    
    // AI Turn
    setTimeout(() => {
        aiTurn();
    }, 1000);
}

function aiTurn() {
    const player = gameState.player2;
    const opponent = gameState.player1;
    
    // Update cooldowns
    Object.keys(player.abilities).forEach(key => {
        if (player.abilities[key].cooldownRemaining > 0) {
            player.abilities[key].cooldownRemaining--;
        }
    });
    
    // AI Decision Logic based on difficulty
    const difficulty = gameState.rankData.rank;
    let action = selectAIAction(player, opponent, difficulty);
    
    let damage = 0;
    let healing = 0;
    let message = '';
    
    if (action === 'defense') {
        player.isDefending = true;
        message = `${player.character.name} uses ${player.abilities.defense.name}!`;
        player.abilities.defense.cooldownRemaining = player.abilities.defense.cooldown;
    } else if (player.abilities[action].damage) {
        if (opponent.isDefending) {
            message = `${player.character.name} attacks, but ${opponent.character.name} blocks!`;
            opponent.isDefending = false;
        } else {
            damage = player.abilities[action].damage;
            opponent.hp = Math.max(0, opponent.hp - damage);
            message = `${player.character.name} uses ${player.abilities[action].name}! Deals ${damage} damage!`;
        }
        player.abilities[action].cooldownRemaining = player.abilities[action].cooldown;
    } else if (player.abilities[action].healing) {
        healing = player.abilities[action].healing;
        player.hp = Math.min(player.maxHp, player.hp + healing);
        message = `${player.character.name} uses ${player.abilities[action].name}! Restores ${healing} HP!`;
        player.abilities[action].cooldownRemaining = player.abilities[action].cooldown;
    }
    
    // Update cooldowns for player
    Object.keys(gameState.player1.abilities).forEach(key => {
        if (gameState.player1.abilities[key].cooldownRemaining > 0) {
            gameState.player1.abilities[key].cooldownRemaining--;
        }
    });
    
    addBattleLog(message);
    updateBattleUI();
    renderActionPanel();
    
    if (opponent.hp <= 0) {
        endBattle(false);
    }
}

function selectAIAction(player, opponent, difficulty) {
    const availableActions = [];
    
    // Check which abilities are available
    if (player.abilities.attack1.cooldownRemaining === 0) availableActions.push('attack1');
    if (player.abilities.attack2.cooldownRemaining === 0) availableActions.push('attack2');
    if (player.abilities.heal.cooldownRemaining === 0) availableActions.push('heal');
    if (player.abilities.defense.cooldownRemaining === 0) availableActions.push('defense');
    
    if (availableActions.length === 0) return 'attack1';
    
    // Difficulty-based AI behavior
    if (difficulty < 2) {
        // Bronze/Silver - Random
        return availableActions[Math.floor(Math.random() * availableActions.length)];
    } else if (difficulty < 4) {
        // Gold/Diamond - Balanced
        if (player.hp < player.maxHp * 0.4 && availableActions.includes('heal')) {
            return 'heal';
        }
        if (opponent.hp > 100) {
            return availableActions.includes('attack2') ? 'attack2' : availableActions[0];
        }
        return availableActions.includes('attack1') ? 'attack1' : availableActions[0];
    } else {
        // Emerald/Ruby/Legend - Smart
        if (player.hp < player.maxHp * 0.35 && availableActions.includes('heal')) {
            return 'heal';
        }
        if (opponent.hp < 80 && availableActions.includes('attack2')) {
            return 'attack2';
        }
        if (opponent.hp > 150) {
            return availableActions.includes('attack2') ? 'attack2' : availableActions.includes('attack1') ? 'attack1' : availableActions[0];
        }
        return availableActions[Math.floor(Math.random() * availableActions.length)];
    }
}

function addBattleLog(message) {
    const log = document.getElementById('battleLog');
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    if (message.includes('damage')) entry.classList.add('log-damage');
    if (message.includes('Restore') || message.includes('Heal')) entry.classList.add('log-heal');
    if (message.includes('block') || message.includes('Defense')) entry.classList.add('log-defense');
    entry.textContent = message;
    log.appendChild(entry);
    log.scrollTop = log.scrollHeight;
}

function endBattle(playerWon) {
    gameState.battleActive = false;
    const battleDuration = (Date.now() - gameState.battleStartTime) / 1000;
    
    showScreen('gameOverScreen');
    
    const resultDisplay = document.getElementById('resultDisplay');
    const gameOverInfo = document.getElementById('gameOverInfo');
    
    if (playerWon) {
        resultDisplay.className = 'result-display victory';
        resultDisplay.textContent = '🏆 VICTORY! 🏆';
        
        let rankGain = 0;
        if (battleDuration < 30) {
            rankGain = 30;
        } else if (battleDuration < 60) {
            rankGain = 20;
        } else if (battleDuration < 90) {
            rankGain = 15;
        } else {
            rankGain = 5;
        }
        
        gameOverInfo.innerHTML = `
            <div class="info-line"><span class="info-label">Battle Time:</span> <span class="info-value">${battleDuration.toFixed(1)}s</span></div>
            <div class="info-line"><span class="info-label">Rank Gain:</span> <span class="info-value">+${rankGain}%</span></div>
            <div class="info-line"><span class="info-label">Current Rank:</span> <span class="info-value">${ranks[gameState.rankData.rank].symbol} ${ranks[gameState.rankData.rank].name}</span></div>
        `;
        
        updateRankProgress(rankGain);
    } else {
        resultDisplay.className = 'result-display defeat';
        resultDisplay.textContent = '💀 DEFEAT 💀';
        
        let rankLoss = 10;
        if (battleDuration < 15) {
            rankLoss = 0; // Rank protection for very quick losses
        }
        
        gameOverInfo.innerHTML = `
            <div class="info-line"><span class="info-label">Battle Time:</span> <span class="info-value">${battleDuration.toFixed(1)}s</span></div>
            <div class="info-line"><span class="info-label">Rank Loss:</span> <span class="info-value">${rankLoss > 0 ? `-${rankLoss}%` : 'Protected'}</span></div>
            <div class="info-line"><span class="info-label">Current Rank:</span> <span class="info-value">${ranks[gameState.rankData.rank].symbol} ${ranks[gameState.rankData.rank].name}</span></div>
        `;
        
        updateRankProgress(-rankLoss);
    }
    
    saveProgress();
}

function updateRankProgress(change) {
    gameState.rankData.percentage += change;
    
    if (gameState.rankData.percentage >= 100) {
        if (gameState.rankData.rank < ranks.length - 1) {
            gameState.rankData.rank++;
            gameState.rankData.percentage = 0;
        } else {
            gameState.rankData.percentage = 100;
        }
    } else if (gameState.rankData.percentage < 0) {
        if (gameState.rankData.rank > 0) {
            gameState.rankData.rank--;
            gameState.rankData.percentage = 100;
        } else {
            gameState.rankData.percentage = 0;
        }
    }
}

function updateRankDisplay() {
    const rankSymbol = document.getElementById('rankSymbol');
    const rankName = document.getElementById('rankName');
    const rankPercentage = document.getElementById('rankPercentage');
    
    rankSymbol.textContent = ranks[gameState.rankData.rank].symbol;
    rankName.textContent = ranks[gameState.rankData.rank].name;
    rankPercentage.textContent = `${gameState.rankData.percentage}%`;
}

function backToModeAfterGame() {
    if (gameState.gameMode === 'cpu') {
        goToCPUMode();
    } else {
        goToModeSelect();
    }
}

// LOCAL STORAGE
function saveProgress() {
    localStorage.setItem('ovaGameProgress', JSON.stringify(gameState.rankData));
}

function loadProgress() {
    const saved = localStorage.getItem('ovaGameProgress');
    if (saved) {
        gameState.rankData = JSON.parse(saved);
    }
}

// INITIALIZATION
window.addEventListener('load', () => {
    loadProgress();
    updateRankDisplay();
});