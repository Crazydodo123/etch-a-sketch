// Defining objects

const container = document.querySelector('#container');

const row = document.createElement('div');
const box = document.createElement('div');

row.setAttribute('class', 'row');
box.setAttribute('class', 'box');



// Setting up functions

function draw(element) {
    element.classList.add('colored')
}

// Initializing

for (let i = 1; i <= 16; i++) {
    row.appendChild(box.cloneNode());
}

for (let i = 1; i <= 16; i++) {
    container.appendChild(row.cloneNode(true));
}

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        console.log('hi')
        draw(box);
    });
});