const GRIDSIZE=600;
let squaresPerSide=16;
let color='black';

const sketchArea=document.querySelector('#sketch-area');
const sliderContainer=document.querySelector('#slider-container');
const slider=document.querySelector('#slider');

const sliderValue=document.querySelector('#slider-value');
sliderValue.textContent=`${slider.value} x ${slider.value} (Resolution)`;
sketchArea.style.width=sketchArea.style.height=`${GRIDSIZE}px`;

function setBgColor(){
    if(color!=='random'){
        this.style.backgroundColor=color;
    }else{
        this.style.backgroundColor=`hsl(${Math.random() * 360},100%,50%)`;
    }
    
}
function changeBgColor(choice){
    color=choice;
}
function createDivs(squaresPerSide){
    const numofSquares = `${squaresPerSide * squaresPerSide}`;

    for (let i=0;i<(numofSquares);i++){
        const div=document.createElement('div');
        div.style.width=div.style.height=`${(GRIDSIZE / squaresPerSide)-2}px`
        div.classList.add('cell');

        sketchArea.appendChild(div);

        div.addEventListener("mouseover",setBgColor);

    }
}
function reset(){
    while (sketchArea.firstChild){
        sketchArea.removeChild(sketchArea.firstChild);
    }
    createDivs(16);
}
slider.oninput =function(){
    let sliderPara=`${this.value} x ${this.value} (Resoluton)`;
    sliderValue.innerHTML = sliderPara;
    removeDivs();
    createDivs(this.value);
}

createDivs(16);