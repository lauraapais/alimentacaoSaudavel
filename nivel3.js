var w = window.innerWidth;
var h = window.innerHeight;

var items = {};
var levels;
var plate, plateSize;
var itemsScale = 0.16;
var close;
var heightQuestion = 400;

var endLevel = false, level = 1;

function preload() {
    plate = loadImage('data/jogo/plate.png');
    close = loadImage('data/icons/home.png');
}

function setup() {
    canvas = createCanvas(w, h);
    loadItems();
    loadLevels();
    imageMode(CENTER);
    platesize();
}

function draw() {
    levels.display();
}

window.onresize = function () {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.size(w, h);

    platesize();
}

function platesize() {
    if (w > h) plateSize = h * 0.5;
    else plateSize = w * 0.5;
}

function loadItems() {
    //Laticineos
    items.lemon = new Gameitem('data/jogo/level1/screen1/4.png');
    items.pea = new Gameitem('data/jogo/level1/screen1/3.png');
    items.redonion = new Gameitem('data/jogo/level1/screen1/5.png');
    items.milk = new Gameitem('data/jogo/level3/screen1/1.png');
    items.cheese1 = new Gameitem('data/jogo/level3/screen1/2.png');
    items.cheese2 = new Gameitem('data/jogo/level3/screen1/6.png');
    //Frutas
    items.eggplant= new Gameitem('data/jogo/level3/screen2/1.png');
    items.orange = new Gameitem('data/jogo/level1/screen4/5.png');
    items.tomato = new Gameitem('data/jogo/level1/screen1/6.png');
    items.watermelon = new Gameitem('data/jogo/level1/screen2/3.png');
    items.leek = new Gameitem('data/jogo/level1/screen3/2.png');
    items.pear = new Gameitem('data/jogo/level3/screen2/3.png');
    //Hortículas
    items.lettuce= new Gameitem('data/jogo/level3/screen3/1.png');
    items.beans = new Gameitem('data/jogo/level1/screen2/5.png');
    items.carot = new Gameitem('data/jogo/level1/screen3/1.png');
    items.redonion = new Gameitem('data/jogo/level1/screen1/5.png');
    //Carne Peixe Ovos
    items.fish = new Gameitem('data/jogo/level3/screen4/1.png');
    items.shrimp = new Gameitem('data/jogo/level3/screen4/2.png');
    items.chicken = new Gameitem('data/jogo/level3/screen4/5.png');
     //Gorduras e Oleos
     items.oliveOli = new Gameitem('data/jogo/level3/screen5/1.png');
     //Cereais
     items.pasta = new Gameitem('data/jogo/level3/screen6/4.png');
     items.bread = new Gameitem('data/jogo/level3/screen6/3.png');
     items.potato = new Gameitem('data/jogo/level1/screen4/2.png');
     items.banana = new Gameitem('data/jogo/level1/screen4/4.png');


}

function loadLevels() {
    var level_one, level_two, level_three, level_four, level_five, level_six;
    //Laticineos
    level_one = new Level(color(114,190,195),'data/jogo/level3/screen1/textLaticineos.png',
    new UIFinish('data/jogo/endLevel/6.png'));
    level_one.addItem(items.milk, true, 'data/jogo/certoErrado/level3/screen1/certo.png');
    level_one.addItem(items.cheese1, true, 'data/jogo/certoErrado/level3/screen1/certo.png');
    level_one.addItem(items.pea, false, 'data/jogo/certoErrado/level3/screen1/errado.png');
    level_one.addItem(items.lemon, false, 'data/jogo/certoErrado/level3/screen1/errado.png');
    level_one.addItem(items.redonion, false, 'data/jogo/certoErrado/level3/screen1/errado.png');
    level_one.addItem(items.cheese2, true, 'data/jogo/certoErrado/level3/screen1/certo.png');    
    level_one.setDefaultPosition();
     //Frutas
     level_two = new Level(color(235,182,180),'data/jogo/level3/screen2/textFrutas.png',
     new UIFinish('data/jogo/endLevel/7.png'));
     level_two.addItem(items.eggplant, false, 'data/jogo/certoErrado/level3/screen2/errado.png');
     level_two.addItem(items.orange, true, 'data/jogo/certoErrado/level3/screen2/certo.png');
     level_two.addItem(items.pear, true, 'data/jogo/certoErrado/level3/screen2/certo.png');
     level_two.addItem(items.watermelon, true, 'data/jogo/certoErrado/level3/screen2/certo.png');
     level_two.addItem(items.leek, false, 'data/jogo/certoErrado/level3/screen2/errado.png');
     level_two.addItem(items.tomato, true, 'data/jogo/certoErrado/level3/screen2/certo.png');    
     level_two.setDefaultPosition();
     //Hortículas
     level_three = new Level(color(103,175,136),'data/jogo/level3/screen3/textHorticulas.png',
     new UIFinish('data/jogo/endLevel/8.png'));
     level_three.addItem(items.lettuce, true, 'data/jogo/certoErrado/level3/screen3/certo.png');
     level_three.addItem(items.beans, false, 'data/jogo/certoErrado/level3/screen3/errado.png');
     level_three.addItem(items.pea, false, 'data/jogo/certoErrado/level3/screen3/errado.png');
     level_three.addItem(items.tomato, false, 'data/jogo/certoErrado/level3/screen3/errado.png');    
     level_three.addItem(items.carot, true, 'data/jogo/certoErrado/level3/screen3/certo.png');
     level_three.addItem(items.redonion, true, 'data/jogo/certoErrado/level3/screen3/certo.png');
     level_three.setDefaultPosition();
     //Carne Peixe Ovos
     level_four = new Level(color(221,106,101),'data/jogo/level3/screen4/textCarnePescadoOvos.png',
     new UIFinish('data/jogo/endLevel/9.png'));
     level_four.addItem(items.fish, true, 'data/jogo/certoErrado/level3/screen4/certo.png');
     level_four.addItem(items.shrimp, true, 'data/jogo/certoErrado/level3/screen4/certo.png');
     level_four.addItem(items.cheese1, false, 'data/jogo/certoErrado/level3/screen4/errado.png');
     level_four.addItem(items.chicken, true, 'data/jogo/certoErrado/level3/screen4/certo.png');
     level_four.addItem(items.pear, false, 'data/jogo/certoErrado/level3/screen4/errado.png');
     level_four.addItem(items.cheese2, false, 'data/jogo/certoErrado/level3/screen4/errado.png');    
     level_four.setDefaultPosition();
     //GordurasOleos
     level_five = new Level(color(155,206,195),'data/jogo/level3/screen5/textGordurasOleos.png',
     new UIFinish('data/jogo/endLevel/10.png'));
     level_five.addItem(items.oliveOli, true, 'data/jogo/certoErrado/level3/screen5/certo.png');
     level_five.addItem(items.eggplant, false, 'data/jogo/certoErrado/level3/screen5/errado.png');
     level_five.addItem(items.beans, false, 'data/jogo/certoErrado/level3/screen5/errado.png');
     level_five.addItem(items.milk, false, 'data/jogo/certoErrado/level3/screen5/errado.png');
     level_five.addItem(items.leek, false, 'data/jogo/certoErrado/level3/screen5/errado.png');
     level_five.addItem(items.shrimp, false, 'data/jogo/certoErrado/level3/screen5/errado.png');    
     level_five.setDefaultPosition();
     //Cereais
     level_six = new Level(color(239,176,87),'data/jogo/level3/screen6/textCereais.png',
     new UIFinish('data/jogo/endLevel/11.png'));
     level_six.addItem(items.carot, false, 'data/jogo/certoErrado/level3/screen6/errado.png');
     level_six.addItem(items.potato, true, 'data/jogo/certoErrado/level3/screen6/certo.png');
     level_six.addItem(items.pasta, true, 'data/jogo/certoErrado/level3/screen6/certo.png');
     level_six.addItem(items.bread, true, 'data/jogo/certoErrado/level3/screen6/certo.png');
     level_six.addItem(items.banana, false, 'data/jogo/certoErrado/level3/screen6/errado.png');
     level_six.addItem(items.cheese2, false, 'data/jogo/certoErrado/level3/screen6/errado.png');    
     level_six.setDefaultPosition();

     levels = new LevelLoader();
    levels.addLevel(level_one);
    levels.addLevel(level_two);
    levels.addLevel(level_three);
    levels.addLevel(level_four);
    levels.addLevel(level_five);
    levels.addLevel(level_six);

    levels.play();
}

class LevelLoader {
    constructor() {
        this.levels = [];
        this.currentLevel = 0;
        this.status = false;
    }

    play() {
        this.status = !this.status;
    }

    addLevel(newLevel) {
        this.levels.push(newLevel);
    }

    nextLevel() {
        if (this.levels.length > this.currentLevel)
            this.currentLevel++;
    }

    previousLevel() {
        if (this.currentLevel > 0)
            this.currentLevel--;
    }

    setLevel(level) {
        this.currentLevel = level;
    }

    display() {
        if (this.checkLevel)
            this.levels[this.currentLevel].display();
    }

    mousePressed() {
        if (this.status && this.checkLevel)
            this.levels[this.currentLevel].mousePressed();

        if (this.levels[this.currentLevel].uiEndLevel.status)
            if(this.currentLevel+1 < this.levels.length)
                this.currentLevel++;
            else
                window.location.href = 'niveisMenu.html';
    }

    mouseDragged() {
        if (this.status && this.checkLevel)
            this.levels[this.currentLevel].mouseDragged();
    }

    mouseReleased() {
        if (this.status && this.checkLevel)
            this.levels[this.currentLevel].mouseReleased();
    }

    checkLevel() {
        if (this.levels.length > 0 &&
            this.currentLevel > 0 &&
            this.currentLevel < this.levels.length)
            return true;
        return false
    }
}

class UIFinish {
    constructor(imageURL) {
        this.image = loadImage(imageURL);
        this.text = "Concluíste o nível primavera!";
        this.w = 400;
        this.h = 400;
        this.margin = 40;

        this.status = false;
    }

    display() {
        imageMode(CENTER);
        image(this.image, width / 2, height / 2, 500, 500);

        push();
        blendMode(MULTIPLY);
        image(close, width / 2 - 170, height / 2 - 175, 50, 50);
        pop();

        push();
        rectMode(CENTER);
        blendMode(MULTIPLY);
        noStroke();
        fill(109, 111, 113);
        rect(width/2, height / 2 + 175 -  12.5, 250, 75, 22);
        pop();

        push();
        textSize(32);
        fill(255);
        textAlign(CENTER);
        text('Continuar', width / 2, height / 2 + 175 - 13.5 + textAscent()/2);
        pop();    
    }

    mousePressed() {
        if (mouseX > width / 2 - (75 / 2) &&
            mouseX < width / 2 + (75 / 2) &&
            mouseY > (height / 2 + 175 - 12.5) - (22 / 2) &&
            mouseY < (height / 2 + 175 - 12.5) + (22 / 2)) {
            this.status = true;
        }
        else if (mouseX > (width/2 - 170) - 50/2 &&
            mouseX < (width/2 - 170) + 50 / 2 &&
            mouseY > (height/2 - 175) - (50 / 2) &&
            mouseY < (height/2 - 175) + (50 / 2)) {
                window.location.href = 'niveisMenu.html';
        }
    }
}

class Level {
    constructor(background, question, uiEndLevel) {
        this.items = [];
        this.textSize = 50;
        this.draggingItem = null;
        this.offsetX = 0;
        this.offsetY = 0;
        this.background = background;
        this.totalTrues = 0;
        this.totalFalses = 0;
        this.question = loadImage(question);
        this.uiEndLevel = uiEndLevel;
        this.points = 0;

        this.currentText = "";
        this.currentTextTimer = 0;

        this.lastPlateItem = null;

        this.timeScaleMax = 10;

        this.status = false;
    }

    addItem(item, value, description) {
        this.items.push({
            "item": item,
            "value": value,
            "description": loadImage(description),
            "pos": createVector(0, 0),
            "scale": itemsScale,
            "plate": false,
            "dragScale": 0
        });

        if (value) {
            this.totalTrues++;
        }
        else {
            this.totalFalses++;
        }
    }

    display() {
        background(this.background);
        push();
        blendMode(MULTIPLY);
        image(plate, width / 2, height / 2, plateSize, plateSize);
        pop();

        for (let i = 0; i < this.items.length; i++) {
            let item = this.items[i];
            item.item.show(item.pos,
                (item.scale + item.scale * item.dragScale / this.timeScaleMax / 2) //Animation Scale
            );
        }

        this.ui();

        this.animationScale();

        if (this.status && this.currentTextTimer == 0) {
            fill(0, 100);
            rect(0, 0, width, height);
            this.uiEndLevel.display();
        }
    }

    ui() {
        let content = this.points + "/" + this.totalTrues;
        textSize(this.textSize);
        push();
        fill(109, 111, 113);
        blendMode(MULTIPLY);

        if(levels.currentLevel == 1 || levels.currentLevel == 2 || levels.currentLevel == 3 || levels.currentLevel == 5){
        text(content, 64, heightQuestion/1.5 + textAscent());
        }
        else if(levels.currentLevel == 0 || levels.currentLevel == 4){
            text(content, 64, heightQuestion/2 + textAscent());
        }
            

        pop();
        rectMode(CORNERS);
        push();
        blendMode(MULTIPLY);
        image(this.question, 420, 200, 800, 400);
        pop();

        if (this.lastPlateItem != null && this.currentTextTimer != 0) {
            image(this.lastPlateItem.description, width / 2 + plateSize / 3, height / 2 + plateSize / 3, 250, 250);
            this.currentTextTimer--;
        }
    }

    animationScale() {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] != this.draggingItem) {
                if (this.items[i].dragScale > 0)
                    this.items[i].dragScale--;
            } else {
                if (this.items[i].dragScale < this.timeScaleMax)
                    this.items[i].dragScale++;
            }
        }
    }

    mousePressed() {
        if (!this.status) {
            for (let i = 0; i < this.items.length; i++) {
                let item = this.items[i];
                let d = dist(mouseX, mouseY, item.pos.x, item.pos.y);
                if (d < item.item.image.width * item.scale / 2) {
                    this.draggingItem = item;
                    this.offsetX = mouseX - this.draggingItem.pos.x;
                    this.offsetY = mouseY - this.draggingItem.pos.y;
                    break;
                }
            }

            if (this.draggingItem != null) {
                if (this.draggingItem.value && this.draggingItem.plate) this.points--;
                this.draggingItem.plate = false;
            }
        } else {
            this.uiEndLevel.mousePressed();
        }
    }

    mouseDragged() {
        if (!this.status) {
            if (this.draggingItem) {
                this.draggingItem.pos.x = mouseX - this.offsetX;
                this.draggingItem.pos.y = mouseY - this.offsetY;
            }
        }
    }

    mouseReleased() {
        if (!this.status) {
            if (this.draggingItem != null) {
                this.insidePlate(this.draggingItem);
                this.status = this.checkEndLevel();
            }
            this.draggingItem = null;
        }
    }

    setDefaultPosition() {
        let space = width / (this.items.length + 1);
        for (let i = 0; i < this.items.length; i++) {
            this.items[i].pos.set(
                space * (i + 1), height * (1 - 0.13)
            );
        }
    }

    insidePlate(item) {
        if (dist(item.pos.x, item.pos.y, width / 2, height / 2) < plateSize / 2) {
            item.plate = true;
            this.lastPlateItem = item;
            this.currentTextTimer = 50;
            if (item.value) this.points++;
        } else if (item.plate) {
            item.plate = false;
            if (item.value) this.points--;
        }
    }

    checkEndLevel() {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].value != this.items[i].plate)
                return false;
        }
        return true;
    }
}

class Gameitem {
    constructor(imageURL, name) {
        this.image = loadImage(imageURL);
        this.name = name;
    }

    show(pos, scale) {
        image(this.image, pos.x, pos.y,
            this.image.width * scale,
            this.image.height * scale);
    }
}

// Mouse event handlers
function mousePressed() {
    levels.mousePressed();
}

function mouseDragged() {
    levels.mouseDragged();
}

function mouseReleased() {
    levels.mouseReleased();
}