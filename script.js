
const trigger = document.querySelectorAll('li a');
const wrapper = document.querySelector('.wrapper');
const highlight = document.createElement('span');
wrapper.appendChild(highlight);

function highlightlink(){
      setTimeout(() => highlight.classList.add('highlight'), 150);

    const linkCoords = this.getBoundingClientRect();
    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: Math.round(linkCoords.top + window.scrollY),
        left: Math.round(linkCoords.left + window.scrollX),
    }
    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
    
    switch((coords.left) + (coords.top)){
        case (trigger[0].offsetLeft) + (trigger[0].offsetTop):
            highlight.style.background = '#079992'; 
            break;
        case (trigger[1].offsetLeft) + (trigger[1].offsetTop):
            highlight.style.background = '#38ada9';
            break;
        case (trigger[2].offsetLeft) + (trigger[2].offsetTop):
            highlight.style.background = '#3c6382';
            break; 
        case (trigger[3].offsetLeft) + (trigger[3].offsetTop):
            highlight.style.background = '#60a3bc';
            break;
        case (trigger[4].offsetLeft) + (trigger[4].offsetTop):
            highlight.style.background = '#6a89cc';
            break;
        case (trigger[5].offsetLeft) + (trigger[5].offsetTop):
            highlight.style.background = '#e55039';
            break;
    }
}

function highlightleave(){
    setTimeout(() => this.children[1].classList.remove('highlight'), 250);
}

trigger.forEach(a => a.addEventListener('mouseenter', highlightlink));
wrapper.addEventListener('mouseleave', highlightleave);
