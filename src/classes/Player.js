class Player {
    static maxHealth = 5;

    constructor() {
        this.balance = .0;
        this.experience = 0;
        this.health = 4;
        this.level = 1;
        this.name = "John";

        this.inventory = [];
        this.equipment = ["skipper"];
        this.completedQuests = [];

        this.answer = '';
        this.buttons = {
            "quit": new Button([columnCount-5, rowCount-3], "Quit", colors.red, 3)
        }
        this.buttons["quit"].action = () => { gameState = "default"; }
    }

    dump() { } // TODO
    load() { } // TODO
    
    drawProfile() {
    	drawOverlay();

        // Draw the player's name
    	textAlign(LEFT, BASELINE);
        textSize(tileSize);
        fill(colors.black);
        text(this.name, 2*tileSize, 3*tileSize);

        // Draw the player on a background
        for (var i = 4; i < 8; i++) {
	        for (var j = 2; j < 6; j++) {
	            drawSprite([j, i], spriteAtlas, [4, 0]);
	        }
	    }
        // TODO: Draw the actual skin
	    drawSprite([3, 6], skinsAtlas, [0, 1], 4);
	    drawSprite([3, 5], skinsAtlas, [0, 0], 4);

        // Draw inventory slots
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 4; j++) {
                fill(colors.lightGrey);
                stroke(colors.black);
                strokeWeight(1);
                rect((i + 8) * tileSize, (j + 4) * tileSize, tileSize, tileSize);
				if (i*8 + j < this.inventory.length) {
			        // TODO: draw items in inventory							
				}
            }
        }

        // Draw equipment slots
        for (var j = 0; j < 4; j++) {
            rect(6 * tileSize, (j + 4) * tileSize, tileSize, tileSize);
			if (j < this.equipment.length) {
				let itemPos = itemData[this.equipment[j]].position;
				drawSprite([6, (j + 4)], UIAtlas, itemPos, 8)
			}
        }

        noStroke();
        this.buttons["quit"].draw();
    }
}

const player = new Player();