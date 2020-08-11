const main = document.querySelector('.main');
const container = document.querySelector('.container');

const btn = document.createElement('button');
btn.textContent = "CLEAR";
btn.style.cssText = 'background: lightgreen';

main.appendChild(btn);
main.appendChild(container);

function createGrid() {

}

for ( let i = 0; i < 16; ++i ) {
    for ( let j = 0; j < 16; ++j ) {
        const div = document.createElement('div');
        container.appendChild( div );
    }
}

let nod = container.childNodes;
nod.forEach( ( item ) => {
    item.addEventListener('mouseover', () => {
        item.style.cssText = 'background: red';
    });
});

btn.addEventListener('click', () => {
    nod.forEach( ( item ) => {
        item.style.cssText = 'background: initial';
    });
    let squareSide = +prompt(`how many squares per side to make
        the new grid?`);
    let pixelSquare = 720 / squareSide;
    container.style.cssText = `grid-template-columns: repeat(${squareSide}, ${pixelSquare}px);
                                grid-auto-rows: ${pixelSquare}px`;
});
