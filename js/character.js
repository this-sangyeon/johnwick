const clipBox = document.querySelector('.box');
const bgSection = document.querySelector('.character-container > .bg-section');
let characterBgImgAll = document.querySelectorAll('.character-container > .bg-section > .bg-imgs > img');
const navWrap = document.querySelector('.nav-wrap');
const characterContent = document.querySelector('.character-content');
let characterIntro = document.querySelectorAll('.character-content > .character-intro');
let characterNavEls = document.querySelectorAll('.character-nav > ul > li > p');

characterIntro = Array.prototype.slice.call(characterIntro);
characterBgImgAll = Array.prototype.slice.call(characterBgImgAll);

let isSection = false;
for(let i =0; i< jwNavLink.length; i++){
    jwNavLink[i].addEventListener('click',()=>{
        // e.defaultPrevented();
        for(let j = 0; j < jwNavLink.length; j++){
            jwNavLink[j].classList.remove('active');
        }
        jwNavLink[i].classList.add('active');
        
        if(!isSection){
            section[1].classList.add('active');
            setTimeout(()=>{
                clipBox.classList.add('active');
                bgSection.classList.add('active');
                navWrap.classList.add('active');
            },100)
            setTimeout(()=>{
                characterContent.classList.add('active');
            },400)
            isSection = true;
        }else{
            clipBox.classList.remove('active');
            bgSection.classList.remove('active');
            section[1].classList.remove('active');
            characterContent.classList.remove('active');
            navWrap.classList.remove('active');
            isSection = false;
           
        }
    })
}

for(let i = 0; i < characterNavEls.length; i++){
    characterNavEls[i].addEventListener('click',()=>{
        for(let j = 0; j < characterNavEls.length; j++){
            characterNavEls[j].classList.remove('active');
        }
        for(let i = 0; i < characterBgImgAll.length; i++){
            characterBgImgAll[i].classList.remove('active');
        }
        for(let i = 0; i < characterIntro.length; i++){
            characterIntro[i].classList.remove('active');
        }
        characterNavEls[i].classList.add('active');
        characterBgImgAll[i].classList.add('active');
        characterIntro[i].classList.add('active');
    })
}