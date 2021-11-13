const clipBox = document.querySelector('.box');
const bgSection = document.querySelector('.character-container > .bg-section');
let characterBgImgAll = document.querySelectorAll('.character-container .bg-section .bg-imgs > .bg-imgsWrap');
const navWrap = document.querySelector('.nav-wrap');
const characterContent = document.querySelector('.character-content');
let characterIntro = document.querySelectorAll('.character-content > .character-intro');

let characterNavEls = document.querySelectorAll('.character-nav > ul > li > p');
jwNavLink = Array.prototype.slice.call(jwNavLink);

characterIntro = Array.prototype.slice.call(characterIntro);
characterBgImgAll = Array.prototype.slice.call(characterBgImgAll);

// let isMain = false;
// let isCharacter = false;
// let isGallery = false;


// function characterSection(){
//     section[1].classList.add('active');
//     setTimeout(()=>{
//         clipBox.classList.add('active');
//         bgSection.classList.add('active');
//         navWrap.classList.add('active');
//     },100)
//     setTimeout(()=>{
//         characterContent.classList.add('active');
//     },400)
// }

// function characterSectionReset(){
//     section[1].classList.remove('active');
//     clipBox.classList.remove('active');
//     bgSection.classList.remove('active');
//     navWrap.classList.remove('active');
//     characterContent.classList.remove('active');
// }
for(let i =0; i< jwNavLink.length; i++){
    jwNavLink[i].addEventListener('click',(e)=>{
        let el = e.currentTarget, target = jwNavLink.indexOf(el);
        // console.log(target);
        // e.defaultPrevented();
        for(let j = 0; j < jwNavLink.length; j++){
            jwNavLink[j].classList.remove('active');
        }
        jwNavLink[i].classList.add('active');

        if(target === 0){
            section[1].classList.remove('active');
            section[2].classList.remove('active');
            clipBox.classList.remove('active');
            bgSection.classList.remove('active');
            navWrap.classList.remove('active');
            characterContent.classList.remove('active');
            console.log(e.currentTarget);
        }
        if(target === 1){
            console.log(e.currentTarget);
            section[1].classList.add('active');
            section[2].classList.remove('active');
            setTimeout(()=>{
                clipBox.classList.add('active');
                bgSection.classList.add('active');
                navWrap.classList.add('active');
            },100)
            setTimeout(()=>{
                characterContent.classList.add('active');
            },300)

        }
        if(target === 2){
            section[1].classList.remove('active');
            clipBox.classList.remove('active');
            bgSection.classList.remove('active');
            navWrap.classList.remove('active');
            characterContent.classList.remove('active');
            section[2].classList.add('active');
            console.log(e.currentTarget);
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
        // characterBgImgAll[i].style.transition = '1s';
        // characterBgImgAll[i].style.opacity = '1';
        characterBgImgAll[i].style.visibility = 'visible';

        characterNavEls[i].classList.add('active');
        characterBgImgAll[i].classList.add('active');
        characterIntro[i].classList.add('active');
    });
}
// if(isMain){
//     console.log(isMain);
//     section[2].classList.remove('active');
//     section[1].classList.remove('active');
//     isMain = false;
// }
// else if(!isMain){
//     section[2].classList.add('active');
//     section[1].classList.add('active');
//     // isMain = false;
// }
// if(isCharacter){
//     console.log(isCharacter);
//     section[1].classList.add('active');
//     setTimeout(()=>{
//         clipBox.classList.add('active');
//         bgSection.classList.add('active');
//         navWrap.classList.add('active');
//     },100)
//     setTimeout(()=>{
//         characterContent.classList.add('active');
//     },400)
//     section[2].classList.remove('active');
//     isCharacter=true;
// }
// else if(!isCharacter){
//     section[1].classList.remove('active');
//     clipBox.classList.remove('active');
//     bgSection.classList.remove('active');
//     navWrap.classList.remove('active');
//     characterContent.classList.remove('active');
//     section[2].classList.remove('active');
   
// }
// if(isGallery){
//     section[2].classList.add('active');
//     isGallery = true;
// }
// else if(!isGallery){
//     section[2].classList.remove('active');
   
// }