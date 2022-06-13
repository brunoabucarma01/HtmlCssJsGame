const bart = document.querySelector('.bart');
const hidrante = document.querySelector('.hidrante')

const jump = () => {
    bart.classList.add('jump');

    setTimeout(() => {
        bart.classList.remove('jump');
    }, 500);

}

const loop = setInterval(() => {

    const posicaoHidrante =  hidrante.offsetLeft;
    const posicaoBart = +window.getComputedStyle(bart).bottom.replace('px', '');
    
    if(posicaoHidrante <= 120 && posicaoHidrante > 0 && posicaoBart < 80){

        hidrante.style.animation = 'none';
        hidrante.style.left = `${posicaoHidrante}px`;

        bart.style.animation = 'none';
        bart.style.bottom = `${posicaoBart}px`;

        bart.src = './src/bartCaindo.png';
        bart.style.width = '90px';
        bart.style.marginLeft = '35px';

        clearInterval(loop);
    }

}, 10);


document.addEventListener('keydown', jump);

