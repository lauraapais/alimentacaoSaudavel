var w = window.innerWidth;
var h = window.innerHeight;

var items = {};
var levels;
var plate, plateSize, itemSize;
var itemsScale = 0.16;
var close;
var heightQuestion = 300;
var widthQuestionMobile;

let maxWidth;

var pw, ph;

var endLevel = false, level = 1;

var h1Size, h2Size;

marginMobile = 0.06 * w;
marginDesktop = 0.02 * w;

var soundTrue, soundFalse;

function preload() {
    plate = loadImage('data/jogo/mapa.png');
    close = loadImage('data/icons/home.png');
    fontBold = loadFont('data/font/AUTHENTIC Sans ^.otf');
    fontRegular = loadFont('data/font/AUTHENTICSans-90.otf');
    soundTrue = loadSound('data/sound1.wav');
    soundFalse = loadSound('data/sound2.wav');
}

function setup() {
    canvas = createCanvas(w, h);
    pw = w;
    ph = h;

    loadItems();
    loadLevels();
    imageMode(CENTER);

    itemsize();
    platesize();
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

    marginMobile = 0.06 * w;
    marginDesktop = 0.02 * w;

    canvas.size(w, h);

    itemsize();
    platesize();
    textsize();

    levels.recalcLevel();
}

function platesize() {
    if (w > 2500) {
        plateSize = min(min(width * itemSize * 8,
            width * .85),
            height * .55);
    }
    else if (w < 600) {
        if (w > h) {
            plateSize = min(min(width * itemSize * 8,
                width * .75),
                height * .35);
        }
        else if (w * 1.5 > h) {
            plateSize = min(min(width * itemSize * 5,
                width * 1.8),
                height * .8);
        } else {
            plateSize = min(min(width * itemSize * 9,
                width * 1.8),
                height * .8);
        }
    }
    else {
        plateSize = min(min(width * itemSize * 8,
            width * .9),
            height * .6);
    }
}

function itemsize() {
    if (w < 600) {
        itemSize = w * 0.0002;
    } else if (w < 1000) {
        itemSize = w * 0.0001;
    } else if (w < 1500) {
        itemSize = w * 0.00009;
    } else if (w > 2500) {
        itemSize = w * 0.000057;
    }
    else {
        itemSize = w * 0.000060;
    }
}

function textsize() {
    if (w < 900) {
        h2Size = h * 0.035;
    } else if (w < 1500) {
        h2Size = h * 0.05;
    } else {
        h2Size = h * 0.055;
    }
}

function loadItems() {
    //Trás-os-Montes
    items.lemon = new Gameitem('data/jogo/level1/screen1/4.png');
    items.pepper = new Gameitem('data/jogo/level1/screen2/2.png');
    items.leek = new Gameitem('data/jogo/level1/screen3/2.png');
    items.chestnut = new Gameitem('data/jogo/level1/screen3/3.png');
    items.peach = new Gameitem('data/jogo/level2/screen1/6.png');
    items.alheira = new Gameitem('data/jogo/level2/screen1/1.png');
    items.oliveOli = new Gameitem('data/jogo/level3/screen5/1.png');
}

function loadLevels() {
    var level_one;
    //Trás-os-Montes
    level_one = new Level(color(239, 190, 46), 'Quais são os alimentos locais de Trás-os-Montes?',
        new UIFinish('data/jogo/endLevel/5.png'));
    level_one.addItem(items.alheira, true, 'data/jogo/certoErrado/level2/screen1/certo.png', 'Alheira');
    level_one.addItem(items.oliveOli, true, 'data/jogo/certoErrado/level2/screen1/certo.png', 'Azeite');
    level_one.addItem(items.chestnut, true, 'data/jogo/certoErrado/level2/screen1/certo.png', 'Castanha');
    level_one.addItem(items.lemon, false, 'data/jogo/certoErrado/level2/screen1/errado.png', 'Limão');
    level_one.addItem(items.pepper, false, 'data/jogo/certoErrado/level2/screen1/errado.png', 'Pimento');
    level_one.addItem(items.peach, true, 'data/jogo/certoErrado/level2/screen1/certo.png', 'Pêssego');
    level_one.setDefaultPosition();

    levels = new LevelLoader();
    levels.addLevel(level_one);

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
            if (this.currentLevel + 1 < this.levels.length)
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
        for (let i = 0; i < this.levels.length; i++) {
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
        if (w < 900) {
            image(this.image, width / 2, height / 2, 300, 300);
        }
        else if (w > 2500) {
            image(this.image, width / 2, height / 2, 500, 500);
        } else {
            image(this.image, width / 2, height / 2, 400, 400);
        }

        push();
        blendMode(MULTIPLY);

        if (w < 900) {
            image(close, width / 2 - 102, height / 2 - 105, 30, 30);
        }
        else if (w > 2500) {
            image(close, width / 2 - 170, height / 2 - 175, 50, 50);

        }
        else {
            image(close, width / 2 - 136, height / 2 - 140, 40, 40);
        }

        pop();

        push();
        rectMode(CENTER);
        blendMode(MULTIPLY);
        noStroke();
        fill(109, 111, 113);

        if (w < 900) {
            rect(width / 2, height / 2 + 105 - 7.5, 150, 45, 22);
        }
        else if (w > 2500) {
            rect(width / 2, height / 2 + 175 - 12.5, 250, 75, 22);

        } else {
            rect(width / 2, height / 2 + 140 - 10, 200, 60, 22);
        }
        pop();

        push();
        if (w < 900) {
            textSize(19.2);
        }
        else if (w > 2500) {
            textSize(32);
        } else {
            textSize(25);
        }

        fill(255);
        textAlign(CENTER);
        textFont(fontBold);
        if (w < 900) {
            text('Continuar', width / 2, height / 2 + 105 - 8.1 + textAscent() / 2);
        }
        else if (w > 2500) {
            text('Continuar', width / 2, height / 2 + 175 - 13.5 + textAscent() / 2);
        }
        else {
            text('Continuar', width / 2, height / 2 + 140 - 10.8 + textAscent() / 2);
        }
        pop();
    }

    mousePressed() {

        if (w < 900) {
            if (mouseX > width / 2 - 75 && mouseX < width / 2 + 75 && // metade da largura do retângulo
                mouseY > height / 2 + 105 - 7.5 - 22.5 && mouseY < height / 2 + 105 - 7.5 + 22.5) { // metade da altura do retângulo
                this.status = true;
            }
            else if (mouseX > (width / 2 - 102) - 30 / 2 &&
                mouseX < (width / 2 - 102) + 30 / 2 &&
                mouseY > (height / 2 - 195) - (30 / 2) &&
                mouseY < (height / 2 - 105) + (30 / 2)) {
                window.location.href = 'niveisMenu.html';
            }
        }

        else if (w > 2500) {

            if (mouseX > width / 2 - 125 && mouseX < width / 2 + 125 &&
                mouseY > height / 2 + 175 - 12.5 - 37.5 && mouseY < height / 2 + 175 - 12.5 + 37.5) {
                this.status = true;
            }
            else if (mouseX > (width / 2 - 170) - 50 / 2 &&
                mouseX < (width / 2 - 170) + 50 / 2 &&
                mouseY > (height / 2 - 175) - (50 / 2) &&
                mouseY < (height / 2 - 175) + (50 / 2)) {
                window.location.href = 'niveisMenu.html';
            }
        }

        else {
            if (mouseX > width / 2 - 100 && mouseX < width / 2 + 100 &&
                mouseY > height / 2 + 140 - 10 - 30 && mouseY < height / 2 + 140 - 10 + 30) {
                this.status = true;
            }
            else if (mouseX > (width / 2 - 136) - 40 / 2 &&
                mouseX < (width / 2 - 136) + 40 / 2 &&
                mouseY > (height / 2 - 140) - (50 / 2) &&
                mouseY < (height / 2 - 140) + (50 / 2)) {
                window.location.href = 'niveisMenu.html';
            }
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
        this.question = question;
        this.uiEndLevel = uiEndLevel;
        this.points = 0;

        this.currentText = "";
        this.currentTextTimer = 0;

        this.lastPlateItem = null;

        this.timeScaleMax = 10;

        this.status = false;
    }

    addItem(item, value, description, name) {
        this.items.push({
            "item": item,
            "value": value,
            "description": loadImage(description),
            "name": name,
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
        

        if (w < 900) {
            image(plate, width / 2, height / 2.2, plateSize, plateSize);
        } else if (w < 1500) {
            image(plate, width / 2, height / 2.1, plateSize, plateSize);
        } else {
            image(plate, width / 2, height / 2.1, plateSize, plateSize);
        }
        pop();

        for (let i = 0; i < this.items.length; i++) {
            let item = this.items[i];
            item.item.show(item.pos,
                (itemSize + itemSize * item.dragScale / this.timeScaleMax / 10) //Animation Scale
            );

            push();
            if (w < 900) {
                textSize(h2Size / 2);
            }
            else {
                textSize(h2Size / 2.6);
            }
            textFont(fontBold);
            fill(109, 111, 113);
            blendMode(MULTIPLY);
            textAlign(CENTER);
            rectMode(CENTER);
            let d = dist(mouseX, mouseY, item.pos.x, item.pos.y);
            if (d < item.item.image.width * itemSize / 2 && !item.plate && this.draggingItem == null) {
                text(item.name, item.pos.x, item.pos.y - (item.item.image.height * itemSize / 1.5));
            }
            pop();
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
        push();
        rectMode(CORNERS);
        blendMode(MULTIPLY);

        let lastY;
        textSize(h2Size);
        textFont(fontBold);
        fill(109, 111, 113);
        blendMode(MULTIPLY);

        if (w < 900) {
            let maxWidth = windowWidth * 0.7;
            let lines = wrapText(this.question, maxWidth);
            let y = marginMobile + textAscent();
            for (let i = 0; i < lines.length; i++) {
                text(lines[i], marginMobile, y);
                y += textAscent() + textDescent();
            }
            lastY = y;
        } else if (w < 1500) {
            let maxWidth = windowWidth * 0.5;
            let lines = wrapText(this.question, maxWidth);
            let y = marginDesktop + textAscent();
            for (let i = 0; i < lines.length; i++) {
                text(lines[i], marginDesktop, y);
                y += textAscent() + textDescent();
            }
            lastY = y;
        } else {
            let maxWidth = windowWidth * 0.3;
            let lines = wrapText(this.question, maxWidth);
            let y = marginDesktop + textAscent();
            for (let i = 0; i < lines.length; i++) {
                text(lines[i], marginDesktop, y);
                y += textAscent() + textDescent();
            }
            lastY = y;
        }
        pop();



        let content = this.points + "/" + this.totalTrues;
        textSize(h2Size * 0.8);
        textFont(fontRegular);
        push();
        fill(109, 111, 113);
        blendMode(MULTIPLY);

        if (windowWidth < 900) {
            text(content, marginMobile, lastY + marginMobile / 2);
        } else if (windowWidth < 1500) {
            text(content, marginDesktop, lastY + textAscent());
        } else {
            text(content, marginDesktop, lastY + textAscent());
        }
        pop();


        if (this.lastPlateItem != null && this.currentTextTimer != 0) {
            if (w < 900) {
                image(this.lastPlateItem.description, width / 2 + plateSize / 3, height / 2 + plateSize / 3, 160, 160);
            } else if (w < 1500) {
                image(this.lastPlateItem.description, width / 2 + plateSize / 3, height / 2 + plateSize / 3, 200, 200);
            }
            else if (w > 2000) {
                image(this.lastPlateItem.description, width / 2 + plateSize / 3, height / 2 + plateSize / 3, 250, 250);
            }
            else {
                image(this.lastPlateItem.description, width / 2 + plateSize / 3, height / 2 + plateSize / 3, 200, 200);
            }
            this.currentTextTimer--;
        }
    }

    animationScale() {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] != this.draggingItem) {
                if (this.items[i].plate) {
                    if (this.items[i].dragScale < this.timeScaleMax * 3)
                        this.items[i].dragScale += 2;
                } else if (this.items[i].dragScale > 0)
                    this.items[i].dragScale -= 2;
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
        let rowSpacingFactor = 1.4;

        if (w < 600) {
            space = width * 0.95 / (this.items.length / 2 + 3);
            for (let i = 0; i < this.items.length; i++) {
                let xd;
                if (i % 2 == 0) xd = 0;
                else xd = 1;


                this.items[i].pos.set(
                    (width * 0.025) + space * (i + 1 - xd),
                    height * (1 - itemsScale / 1.8 * (1 + xd * rowSpacingFactor))
                );
            }
        } else {
            space = width * 0.8 / (this.items.length + 1);
            for (let i = 0; i < this.items.length; i++) {
                this.items[i].pos.set(
                    (width * 0.1) + space * (i + 1),
                    height * (1 - itemsScale / 1.5)
                );
            }
        }
    }


    insidePlate(item) {
        /*QUAD*/
        if (item.pos.x > width / 2 - plateSize / 2 &&
            item.pos.x < width / 2 + plateSize / 2 &&
            item.pos.y > height / 2 - plateSize / 2 &&
            item.pos.y < height / 2 + plateSize / 2) {
            item.plate = true;
            this.lastPlateItem = item;
            this.currentTextTimer = 50;
            if (item.value){
                this.points++;
                soundTrue.play();
            }
            else{
                soundFalse.play();
            }
        }
        else if (item.plate) {
            item.plate = false;
            if (item.value) {this.points--;
                
            }
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

function wrapText(txt, maxWidth) {
    let words = txt.split(' ');
    let lines = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
        let word = words[i];
        let width = textWidth(currentLine + ' ' + word);
        if (width < maxWidth) {
            currentLine += ' ' + word;
        } else {
            lines.push(currentLine);
            currentLine = word;
        }
    }
    lines.push(currentLine);

    return lines;
}