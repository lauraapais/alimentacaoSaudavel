var w = window.innerWidth;
var h = window.innerHeight;

var items = {};
var levels;
var plate, plateSize, itemSize;
var itemsScale = 0.16;
var close;
var heightQuestion = 300;

var pw, ph;

var endLevel = false, level = 1;

var h1Size, h2Size;

function preload() {
    plate = loadImage('data/jogo/plate.png');
    close = loadImage('data/icons/home.png');
}

function setup() {
    canvas = createCanvas(w, h);
    pw = w;
    ph = h;

    loadItems();
    loadLevels();
    imageMode(CENTER);

    platesize();
    itemsize();
    textsize();
}

function draw() {
    levels.display();
}

window.onresize = function () {
    pw = w;
    ph = h;

    w = window.innerWidth;
    h = window.innerHeight;
    canvas.size(w, h);

    platesize();
    itemsize();
    textsize();

    levels.recalcLevel();
}

function platesize() {
    if (w > h) plateSize = h * 0.5;
    else plateSize = w * 0.8;
}

function itemsize() {
    if (w > h) itemSize = h * 0.00013;
    else itemSize = w * 0.0002;
}

function textsize() {
    if (w > h) {
        h2Size = h * 0.04;
        heightQuestion = height / 3;
    } else {
        h2Size = h * 0.04;
        heightQuestion = height / 4;
    }
}

function loadItems() {
    //Pequeno-Almoço
    items.sausage = new Gameitem('data/jogo/level4/screen1/1.png');
    items.grape = new Gameitem('data/jogo/level1/screen1/1.png');
    items.milk = new Gameitem('data/jogo/level3/screen1/1.png');
    items.bread = new Gameitem('data/jogo/level3/screen6/3.png');
    items.eggs = new Gameitem('data/jogo/level4/screen1/6.png');
    items.cheese1 = new Gameitem('data/jogo/level3/screen1/2.png');
    //Almoço
    items.cheese2 = new Gameitem('data/jogo/level3/screen1/6.png');
    items.rice = new Gameitem('data/jogo/level4/screen2/6.png');
    items.chicken = new Gameitem('data/jogo/level3/screen4/5.png');
    items.carot = new Gameitem('data/jogo/level1/screen3/1.png');
    items.orange = new Gameitem('data/jogo/level1/screen4/5.png');
    //Lanche
    items.bread2 = new Gameitem('data/jogo/level4/screen3/1.png');
    items.watermelon = new Gameitem('data/jogo/level1/screen2/3.png');
    //Jantar
    items.pasta = new Gameitem('data/jogo/level3/screen6/4.png');
    items.shrimp = new Gameitem('data/jogo/level3/screen4/2.png');
    items.lettuce = new Gameitem('data/jogo/level3/screen3/1.png');
}

function loadLevels() {
    var level_one, level_two, level_three, level_four;
    //Pequeno-Almoço
    level_one = new Level(color(103, 175, 136), 'data/jogo/level4/screen1/textPequenoAlmoco.png',
        new UIFinish('data/jogo/endLevel/12.png'));
    level_one.addItem(items.sausage, false, 'data/jogo/certoErrado/level4/screen1/errado.png');
    level_one.addItem(items.grape, true, 'data/jogo/certoErrado/level4/screen1/certo.png');
    level_one.addItem(items.milk, true, 'data/jogo/certoErrado/level4/screen1/certo.png');
    level_one.addItem(items.bread, true, 'data/jogo/certoErrado/level4/screen1/certo.png');
    level_one.addItem(items.eggs, true, 'data/jogo/certoErrado/level4/screen1/certo.png');
    level_one.addItem(items.cheese1, false, 'data/jogo/certoErrado/level4/screen1/errado.png');
    level_one.setDefaultPosition();
    //Almoço
    level_two = new Level(color(221, 106, 101), 'data/jogo/level4/screen2/textAlmoco.png',
        new UIFinish('data/jogo/endLevel/13.png'));
    level_two.addItem(items.chicken, true, 'data/jogo/certoErrado/level4/screen2/certo.png');
    level_two.addItem(items.carot, true, 'data/jogo/certoErrado/level4/screen2/certo.png');
    level_two.addItem(items.orange, true, 'data/jogo/certoErrado/level4/screen2/certo.png');
    level_two.addItem(items.sausage, false, 'data/jogo/certoErrado/level4/screen2/errado.png');
    level_two.addItem(items.cheese2, false, 'data/jogo/certoErrado/level4/screen2/errado.png');
    level_two.addItem(items.rice, true, 'data/jogo/certoErrado/level4/screen2/certo.png');
    level_two.setDefaultPosition();
    //Lanche
    level_three = new Level(color(239, 190, 46), 'data/jogo/level4/screen3/textLanche.png',
        new UIFinish('data/jogo/endLevel/14.png'));
    level_three.addItem(items.bread2, true, 'data/jogo/certoErrado/level4/screen3/certo.png');
    level_three.addItem(items.watermelon, true, 'data/jogo/certoErrado/level4/screen3/certo.png');
    level_three.addItem(items.milk, true, 'data/jogo/certoErrado/level4/screen3/certo.png');
    level_three.addItem(items.cheese1, false, 'data/jogo/certoErrado/level4/screen3/errado.png');
    level_three.addItem(items.cheese2, false, 'data/jogo/certoErrado/level4/screen3/errado.png');
    level_three.addItem(items.sausage, false, 'data/jogo/certoErrado/level4/screen3/certo.png');
    level_three.setDefaultPosition();
    //Jantar
    level_four = new Level(color(235, 182, 180), 'data/jogo/level4/screen4/textJantar.png',
        new UIFinish('data/jogo/endLevel/15.png'));
    level_four.addItem(items.cheese1, false, 'data/jogo/certoErrado/level4/screen4/errado.png');
    level_four.addItem(items.lettuce, true, 'data/jogo/certoErrado/level4/screen4/certo.png');
    level_four.addItem(items.milk, false, 'data/jogo/certoErrado/level4/screen4/errado.png');
    level_four.addItem(items.sausage, false, 'data/jogo/certoErrado/level4/screen4/errado.png');
    level_four.addItem(items.shrimp, true, 'data/jogo/certoErrado/level4/screen4/certo.png');
    level_four.addItem(items.pasta, true, 'data/jogo/certoErrado/level4/screen4/certo.png');
    level_four.setDefaultPosition();

    levels = new LevelLoader();
    levels.addLevel(level_one);
    levels.addLevel(level_two);
    levels.addLevel(level_three);
    levels.addLevel(level_four);

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

    recalcLevel() {
        for(let i = 0; i < this.levels.length; i++) {
            this.levels[i].recalcItem();
        }
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
                (itemSize + itemSize * item.dragScale / this.timeScaleMax / 10) //Animation Scale
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
        textSize(h2Size);
        push();
        fill(109, 111, 113);
        blendMode(MULTIPLY);
        
        if (levels.currentLevel == 1 || levels.currentLevel == 2 || levels.currentLevel == 3) {
            text(content, 30, heightQuestion/5*3.1 + textAscent());
        }
        else if (levels.currentLevel == 0) {
            text(content, 30, heightQuestion/5*3.9 + textAscent());
        }
        pop();
        rectMode(CORNERS);
        push();
        blendMode(MULTIPLY);
        image(this.question,
            heightQuestion + 30, heightQuestion/3 + 30,
            heightQuestion/1.5 * 3, heightQuestion/1.5);
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
                if (d < item.item.image.width * itemSize / 2) {
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
        let space;

        if (w > h) {
            space = width / (this.items.length + 1);
            for (let i = 0; i < this.items.length; i++) {
                this.items[i].pos.set(
                    space * (i + 1), height * (1 - itemsScale/1.3)
                );
            }
        }
        else {
            space = width / (this.items.length/2 + 3);
            for (let i = 0; i < this.items.length; i++) {
                let xd;
                if(i%2 == 0) xd = 0;
                else xd = 1;

                this.items[i].pos.set(
                    space * (i + 1 - xd),
                    height * (1 - itemsScale/1.5 * (1+xd))
                );
            }
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

    recalcItem() {
        for (let i = 0; i < this.items.length; i++) {
            this.items[i].pos = replaceItem(this.items[i].pos.x, this.items[i].pos.y,
                pw, ph, width, height);
        }
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

function replaceItem(px, py, pw, ph, w, h) {
    let x = px * w / pw;
    let y = py * h / ph;

    return createVector(x, y);
}