const GRIDSIZE=600;
let rows=16;
let cols=16;

const sketchArea=document.querySelector('#sketch-area');
sketchArea.style.width=`${GRIDSIZE}px`;
sketchArea.style.height=`${GRIDSIZE}px`;

function createDivs(){
    for (let i=0;i<(rows*cols);i++){
        const div=document.createElement('div');
        div.style.width=`${Math.floor(GRIDSIZE/cols)-2}px`;//minus 2 for divborders
        div.style.height=`${Math.floor(GRIDSIZE/rows)-2}px`;
        div.classList.add('cell');

        sketchArea.appendChild(div);
    }
}
createDivs();