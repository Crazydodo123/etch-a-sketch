// Defining objects

const container = document.querySelector('#container');

let row = document.createElement('div');
let box = document.createElement('div');

row.setAttribute('class', 'row');
box.setAttribute('class', 'box');



// Setting up functions

function draw(element) {
    element.classList.add('colored')
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
    for (let i = 1; i <= number; i++) {
        row.appendChild(box.cloneNode());
    }
    
    for (let i = 1; i <= number; i++) {
        container.appendChild(row.cloneNode(true));
    }
}


function setupBox(boxNum) {
    const boxes = document.querySelectorAll('.box');
    const dimension = 900 / boxNum;
    
    boxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            draw(box);
        });
        box.style.cssText = `height: ${dimension}px; width: ${dimension}px`;
    });
}


function createCanvas(boxNum) {
    redefine();
    createBox(boxNum);
    setupBox(boxNum);
}


function updateCanvas() {
    number = document.querySelector('#resolution').value;

    createCanvas(number);
}

// Initializing

createCanvas(16)
