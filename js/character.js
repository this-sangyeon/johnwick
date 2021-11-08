const clipBox = document.querySelector('.box');
const bgSection = document.querySelector('.character-container > .bg-section');
const characterBgImg = document.querySelector('.character-container > .bg-section > bg-imgs > img');
const navWrap = document.querySelector('.nav-wrap');
const characterContent = document.querySelector('.character-content');
let characterIntro = document.querySelectorAll('.character-intro');




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
            },300)
            setTimeout(()=>{
                characterContent.classList.add('active');
            },500)
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