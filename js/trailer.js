const trailerBtn = document.querySelector('.trailer-btn');
const trailerArea = document.querySelector('.trailer-area');
const closeBtn = document.querySelector('.close-btn');

trailerBtn.addEventListener('click', ()=>{
    console.log('click');
    trailerArea.classList.add('active');
    trailerBtn.classList.add('active');
})

closeBtn.addEventListener('click', ()=>{
    console.log('click');
    trailerArea.classList.remove('active');
    setTimeout(()=>{
        trailerBtn.classList.remove('active');
    },700)
})