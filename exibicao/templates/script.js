const frentebotao = document.getElementById('frente')
const trasbotao = document.getElementById('tras')
const items = document.querySelectorAll('.item')
const dots = document.querySelectorAll('.dot')
const numero = document.querySelector('.numbers')
const lista = document.querySelector('.list') 


let active = 0
const total = items.length
let tempo;

function update(direction) {
    document.querySelector('.item.active').classList.remove('active')
    document.querySelector('.dot.active').classList.remove('active')

    if(direction> 0){
        active = active + 1
        
        if(active === total){
            active = 0
        }
    } 
    
    else if(direction< 0){
        active = active - 1
        
        if(active < 0){
            active = total-1
    }
}
    items[active].classList.add('active')
    dots[active].classList.add('active')

clearInterval(tempo)
tempo = setInterval(() => {
        update(1)
    }, 15000);

    numero.textContent = String(active + 1).padStart(2, '0')
}


trasbotao.addEventListener('click', () => {
    update(-1)
})

frentebotao.addEventListener('click', () => {
    update(1)
})

new window.VLibras.Widget('https://vlibras.gov.br/app');

