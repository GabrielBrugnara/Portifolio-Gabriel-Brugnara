/* =========================
   SCROLL REVEAL
========================= */

const reveals = document.querySelectorAll('.reveal');

function revealOnScroll(){

    const windowHeight = window.innerHeight;
    const revealPoint = 120;

    reveals.forEach(el => {

        const revealTop = el.getBoundingClientRect().top;

        if(revealTop < windowHeight - revealPoint){
            el.classList.add('active');
        }else{
            el.classList.remove('active');
        }

    });

}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);



/* =========================
   LIGHTBOX GALERIA (TODOS PROJETOS)
========================= */

const imagens = document.querySelectorAll('.galeria img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');

imagens.forEach(img => {

    img.addEventListener('click', () => {

        modal.classList.add('active');
        modalImg.src = img.src;

    });

});

modal.addEventListener('click', () => {
    modal.classList.remove('active');
});



/* =========================
   OTIMIZAÇÃO VIDEO BACKGROUND
========================= */

const videoBg = document.querySelector('.video-bg');

if(videoBg){

    // força loop suave em alguns navegadores
    videoBg.playbackRate = 0.9;

    // pausa quando aba não está visível (performance)
    document.addEventListener("visibilitychange", () => {
        if(document.hidden){
            videoBg.pause();
        }else{
            videoBg.play();
        }
    });

}