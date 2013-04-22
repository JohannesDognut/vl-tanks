COUNTRIES.push({
	name: 'United States',
	color: 'B',	
	});
COUNTRIES.push({
	name: 'Russia',
	color: 'R',
	});
COUNTRIES.push({
	name: 'China',
	color: 'Y',
	});

//====== TANKS =================================================================

//Heavy
TYPES.push({
	name: 'Heavy',
	type: 'tank',
	description: ["Heavy armor, high defence", "Low damage", "Weak only against Stealth and Tiger"],
	life: [230, 13],				//[tank life in level 0, life increase in each level]
	damage: [15, 1],	//15 dps		//[tank damage in level 0, damage increase in each level]
	range: 80,					//tank shooting range
	scout: 100,					//tank scout range
	armor: [50, 0.3, 60],				//[tank armor in level 0, armor increase in each level, max armor]
	speed: 25,					//speed
	attack_delay: 1,				//pause between shoots in seconds
	turn_speed: 4,					//turn speed, higher - faster
	//no_repawn: 1,					//if tank dies - he will not respawn
	//no_collisions: 1,				//tank can go other walls and other tanks
	//bonus: 1,					//tank will be available only in single mode, random and mirror
	//ignore_armor: 1,				//tank will ignore armor
	abilities: [					//name; skill icon; active or passive; broadcast activation in multiplayer? 0-no, 1-yes, 2-yes, but on later
		{name: 'Rest',		passive: false,		broadcast: 1}, 
		{name: 'Rage',		passive: false,		broadcast: 1}, 
		{name: 'Shield',		passive: true,		broadcast: 0}, 
		],
	size: ['M', 50],				//[tank size: S/M/L, icon width and height(same)]
	icon_top: ['top1.png'],				//tank base images
	icon_base: ['base1.png'],			//tank top images
	preview: 'preview.png',				//tank preview image
	bullet: 'bullet.png',				//bullet_image
	fire_sound: 'shoot',				//shooting sound
	accuracy: 90,					//chance to hit target, %
	});

//Tiger
TYPES.push({
	name: 'Tiger',
	type: 'tank',
	description: ["Light armor", "Huge damage", "Strong against slow enemies"],
	life: [200, 12],
	damage: [30, 1.5],		//30 dps
	range: 80,
	scout: 100,
	armor: [30, 0.3, 40],
	speed: 28,
	attack_delay: 1,
	turn_speed: 3,
	abilities: [
		{name: 'Blitzkrieg',	passive: false,		broadcast: 1},
		{name: 'Frenzy',		passive: false,		broadcast: 1}, 
		{name: 'Damage',		passive: true,		broadcast: 0}, 
		],
	size: ['M', 50],
	preview: 'preview.png',
	icon_top: ['top1.png'],
	icon_base: ['base1.png'],
	bullet: 'bullet.png',
	fire_sound: 'shoot',
	accuracy: 90,
	});

//Cruiser
TYPES.push({
	name: 'Cruiser',
	type: 'tank',
	description: ["Fast scout", "Repair for allies", "Light armor"],
	life: [180, 11],
	damage: [18, 1.3],	//18 dps
	range: 80,
	scout: 100,
	armor: [20, 0.3, 30],
	speed: 30,
	attack_delay: 1,
	turn_speed: 5,
	abilities: [
		{name: 'Turbo',		passive: false,		broadcast: 1}, 
		{name: 'Repair',		passive: false,		broadcast: 0}, 
		{name: 'Boost',		passive: false,		broadcast: 0}, 
		],
	size: ['M', 50],
	preview: 'preview.png',
	icon_top: ['top1.png'],
	icon_base: ['base1.png'],
	bullet: 'bullet.png',
	fire_sound: 'shoot',
	accuracy: 90,
	});

//Launcher
TYPES.push({
	name: 'Launcher',
	type: 'tank',
	description: ["Long range attacks", "Slow", "High accuracy"],
	life: [150, 10],
	damage: [15, 1.1],	//15 dps
	range: 120,
	scout: 100,
	armor: [10, 0, 10],
	speed: 25,
	attack_delay: 1,
	turn_speed: 2,
	abilities: [
		{name: 'Missile',		passive: false,		broadcast: 2}, 
		{name: 'Mortar',		passive: false,		broadcast: 2}, 
		{name: 'Range',		passive: true,		broadcast: 0}, 
		],
	size: ['M', 50],
	preview: 'preview.png',
	icon_top: ['top1.png'],
	icon_base: ['base1.png'],
	bullet: 'bullet.png',
	fire_sound: 'shoot',
	accuracy: 100,
	});

//Stealth
TYPES.push({
	name: 'Stealth',
	type: 'tank',
	description: ["Camouflage", "Long range and huge damage", "Penetrates armor", "Slow speed and attack"],
	life: [150, 10],
	damage: [40, 2],	//20 dps
	range: 120,
	scout: 100,
	armor: [10, 0, 10],
	speed: 28,
	attack_delay: 2,
	turn_speed: 2,
	abilities: [
		{name: 'Strike',		passive: false,		broadcast: 2}, 
		{name: 'Camouflage',	passive: false,		broadcast: 1}, 
		{name: 'Range',		passive: true,		broadcast: 0}, 
		],
	size: ['M', 50],
	ignore_armor: 1,
	preview: 'preview.png',
	icon_top: ['top1.png'],
	icon_base: ['base1.png'],
	bullet: 'bullet.png',
	fire_sound: 'shoot',
	accuracy: 80,
	});

//Miner
TYPES.push({
	name: 'Miner',
	type: 'tank',
	description: ["Lands mines", "Light armor", "Low damage", "Very weak agains air units"],
	life: [180, 11],
	damage: [15, 1],	//15 dps
	range: 80,
	scout: 100,
	armor: [20, 0.3, 30],
	speed: 28,
	attack_delay: 1,
	turn_speed: 4,
	abilities: [
		{name: 'Mine',		passive: false,		broadcast: 1}, 
		{name: 'Explode',		passive: false,		broadcast: 1}, 
		{name: 'SAM',		passive: false,		broadcast: 1}, 
		],
	size: ['M', 50],
	icon_top: ['top1.png'],
	icon_base: ['base1.png'],
	preview: 'preview.png',
	bullet: 'bullet.png',
	fire_sound: 'shoot',
	accuracy: 90,
	});

//Tech
TYPES.push({
	name: 'Tech',
	type: 'tank',
	description: ["Can send virus to deactivate enemy", "Light armor", "Low damage"],
	life: [150, 10],
	damage: [15, 1.1],	//15 dps
	range: 80,
	scout: 100,
	armor: [20, 0.3, 30],	
	speed: 28,
	attack_delay: 1,
	turn_speed: 4,
	abilities: [
		{name: 'Virus',		passive: false,		broadcast: 2}, 
		{name: 'Mass virus',	passive: false,		broadcast: 1}, 
		{name: 'Advanced',	passive: true,		broadcast: 0}, 
		],
	size: ['M', 50],
	icon_top: ['top1.png'],
	icon_base: ['base1.png'],
	preview: 'preview.png',
	bullet: 'bullet.png',
	fire_sound: 'shoot',
	accuracy: 90,
	});

//Truck
TYPES.push({
	name: 'Truck',
	type: 'tank',
	description: ["Uses many soldiers for attack", "Very low damage"],
	life: [150, 10],
	damage: [15, 1],	//15 dps
	range: 80,
	scout: 100,
	armor: [10, 0, 10],
	speed: 25,
	attack_delay: 1,
	turn_speed: 4,
	abilities: [
		{name: 'Fire bomb',	passive: false,		broadcast: 2}, 
		{name: 'Soldiers',	passive: false,		broadcast: 1}, 
		{name: 'Medicine',	passive: false,		broadcast: 0}, 
		],
	size: ['M', 50],
	icon_top: [],
	icon_base: ['base1.png'],
	preview: 'preview.png',
	bullet: 'bullet.png',
	fire_sound: 'shoot',
	accuracy: 90,
	});

//Apache
TYPES.push({
	name: 'Apache',
	type: 'tank',
	description: ["Missiles", "Light armor", "Strong against all"],
	life: [180, 11],
	damage: [20, 1.3],	//20 dps
	range: 100,
	scout: 120,
	armor: [20, 0.3, 30],	
	speed: 32,
	attack_delay: 1,
	turn_speed: 6,
	//bonus: 1,
	no_collisions: 1,
	abilities: [
		{name: 'Airstrike',	passive: false,		broadcast: 2}, 
		{name: 'Scout',		passive: false,		broadcast: 0}, 
		{name: 'Range',		passive: true,		broadcast: 0}, 
		],
	size: ['M', 50],
	icon_top: [],
	icon_base: ['base1.png'],
	preview: 'preview.png',
	bullet: 'bullet.png',
	fire_sound: 'shoot',
	accuracy: 90,
	});

//Bomber
TYPES.push({
	name: 'Bomber',
	type: 'tank',
	description: ["Bombs", "Fast speed", "Low defence"],
	life: [150, 10],
	damage: [15, 1.1],	//15 dps
	range: 90,
	scout: 120,
	armor: [10, 0, 10],
	speed: 35,
	attack_delay: 1,
	turn_speed: 4,
	//bonus: 1,
	no_collisions: 1,
	abilities: [
		{name: 'Bomb',		passive: false,		broadcast: 2}, 
		{name: 'AA bomb',		passive: false,		broadcast: 2}, 
		{name: 'Rest',		passive: false,		broadcast: 1}, 
		],
	size: ['M', 50],
	icon_top: [],
	icon_base: ['base1.png'],
	preview: 'preview.png',
	bullet: 'bullet.png',
	fire_sound: 'shoot',
	accuracy: 90,
	});

//Soldier
TYPES.push({
	name: 'Soldier',
	type: 'human',
	description: ["Infantry", "No armor", "Low damage", "Supports tanks in battle"],
	life: [130, 0],
	damage: [12, 0.7],	//12 dps
	range: 70,
	scout: 80,
	armor: [0, 0, 0],
	speed: 25,
	attack_delay: 1,
	turn_speed: 4,
	no_repawn: 1,
	abilities: [],
	size: ['S', 30],
	preview: 'preview.png',
	icon_top: [],
	icon_base: ['base1.png'],
	bullet: 'bullet.png',
	fire_sound: 'shoot',
	accuracy: 90,
	});

//TOWER
TYPES.push({
	name: 'Tower',
	type: 'tower',
	description: ["Tower for defence"],
	life: [1200,0],
	damage: [30, 0],	//30 dps
	range: 120,
	scout: 130,
	armor: [20,0,20],
	speed: 0,
	attack_delay: 1.1,
	turn_speed: 4,
	no_repawn: 1,
	abilities: [],
	size: ['L', 50],
	preview: '',
	icon_top: ['top1.png'],
	icon_base: ['base1.png'],
	bullet: 'bullet.png',
	fire_sound: 'shoot',
	accuracy: 90,
	});

//BASE
TYPES.push({
	name: 'Base',
	type: 'tower',
	description: ["Main base"],
	life: [2500, 0],
	damage: [45, 0],	//45 dps
	range: 120,
	scout: 130,
	armor: [50,0,50],
	speed: 0,
	attack_delay: 1.1,
	turn_speed: 4,
	no_repawn: 1,
	abilities: [],
	size: ['L', 90],
	preview: '',
	icon_top: [],
	icon_base: ['base1.png', 'no-rotate'],
	bullet: 'bullet.png',
	fire_sound: 'shoot',
	accuracy: 90,
	});
