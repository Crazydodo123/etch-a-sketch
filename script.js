// Defining objects

const container = document.querySelector('#container');
const controller = new AbortController;

const rgbButton = document.querySelector('#RGB');
const greyButton = document.querySelector('#greyscale')



let row = document.createElement('div');
let box = document.createElement('div');
let rgb = false;
let greyscale = false;
let boxes;

row.setAttribute('class', 'row');
box.setAttribute('class', 'box');



// Setting up functions

function draw(element) {
    if (rgb) {
        let randomNum = Math.floor(Math.random() * 16777216)
        let coloredNum = randomNum.toString(16).padStart(6, "0");
        element.style.backgroundColor = `#${coloredNum}`

    } else if (greyscale) {

        greyDraw(element, element.style.backgroundColor)


    } else {
        element.style.backgroundColor = 'black';
    }

}


function redefine() {

    const rows = document.querySelectorAll('.row')
    rows.forEach(row => {
        row.remove();
    })

    row = document.createElement('div');

    row.setAttribute('class', 'row');

    
}


function createBox(number) {
    const dimension = 900 / number;
    box.style.cssText = `height: ${dimension}px; width: ${dimension}px`;

    for (let i = 1; i <= number; i++) {
        row.appendChild(box.cloneNode());
    }
    
    for (let i = 1; i <= number; i++) {
        container.appendChild(row.cloneNode(true));
    }
}


function setupBox(boxNum) {
    boxes = document.querySelectorAll('.box');
    
    boxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            draw(box);
        }, {signal: controller.signal});     
    });
}


function createCanvas(boxNum) {
    redefine();
    createBox(boxNum);
    setupBox(boxNum);
}


function updateCanvas() {
    number = document.querySelector('#resolution').value;

    if (number > 100 || number < 1) return false;
    createCanvas(number);
}


// Initializing

createCanvas(16);


// Fancy functions

function reset() {
    boxes.forEach(box => {
        box.style.backgroundColor = 'transparent';
    });
}


function setRGB() {
    if (!rgb) {
        rgb = true;
    } else {
        rgb = false;
    }

    if (greyscale) {
        greyscale = false;
        greyButton.classList.remove('greyOn');
    }

    rgbButton.classList.toggle('rgbOn');
    
}


function setGrey() {
    if (!greyscale) {
        greyscale = true;
    } else {
        greyscale = false;
    }

    if (rgb) {
        rgb = false;
        rgbButton.classList.remove('rgbOn');
    }

    greyButton.classList.toggle('greyOn');
}


function greyDraw(element, currentColor) {
    if (!currentColor || currentColor == 'transparent') {
        console.log('hi');
        element.style.backgroundColor = `rgb(90%, 90%, 90%)`;
    } else if (currentColor == 'black') {
        return false;
    } else {
        let colors = currentColor.split(',');
        let redValue = colors[0].substring(4);
        let greenValue = colors[1].substring(1);
        let blueValue = colors[2].substring(1, colors[2].length - 1);

        element.style.backgroundColor = `rgb(${redValue - 25.6}, ${greenValue - 25.6}, ${blueValue - 25.6})`;
    }

}