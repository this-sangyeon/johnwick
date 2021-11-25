const clipBox = document.querySelector('.box');
const bgSection = document.querySelector('.character-container > .bg-section');
let characterBgImgAll = document.querySelectorAll('.character-container .bg-section .bg-imgs > .bg-imgsWrap');
const navWrap = document.querySelector('.nav-wrap');
const characterContent = document.querySelector('.character-content');
let characterIntro = document.querySelectorAll('.character-content > .character-intro');
let cutWrapsList = document.querySelectorAll('.still-list');
let cutWraps = document.querySelectorAll('.cutWrap');
let cutWrapImg = document.querySelectorAll('.cutWrap > figure > img');
const imgPopupEl = document.querySelectorAll('.img-popup-area > .img-popup');
let imgPopupElImg = document.querySelectorAll('.img-popup > img');
let characterNavEls = document.querySelectorAll('.character-nav > ul > li ');
const popUpBtn = document.querySelector('.bigimg-container > .popup-btn');
const imgPopupElLink =  [
    {
        img: [
            'img/character/johnwick/johnwick1.jpg',
            'img/character/johnwick/johnwick2.jpg',
            'img/character/johnwick/johnwick3.jpg',
            'img/character/johnwick/johnwick4.jpg'
        ]
    },
    {
        img: [
            'img/character/sofia/sofia1.jpg',
            'img/character/sofia/sofia2.jpg',
            'img/character/sofia/sofia3.jpg',
            'img/character/sofia/sofia4.jpg',
        ]
    },
    {
         img: [
            'img/character/winston/winston1.jpg',
            'img/character/winston/winston2.jpg',
            'img/character/winston/winston3.jpg',
            'img/character/winston/winston4.jpg',
        ]
    },
    {
        img: [
            'img/character/charon/Charon1.jpg',
            'img/character/charon/Charon2.jpg',
            'img/character/charon/Charon4.jpg',
            'img/character/charon/Charon3.jpg',
        ]
    }
];

// 해야할 것: 캐릭터 내의 네비게이션 눌렀다가 홈이나 갤러리 눌렀을 때 네비게이션 비활성화
let popUpIndex = 0;
jwNavLink = Array.prototype.slice.call(jwNavLink);
mainIntroArea = Array.prototype.slice.call(mainIntroArea);
characterIntro = Array.prototype.slice.call(characterIntro);
characterBgImgAll = Array.prototype.slice.call(characterBgImgAll);
cutWrapsList = Array.prototype.slice.call(cutWrapsList);

characterNavEls = Array.prototype.slice.call(characterNavEls);
cutWraps = Array.prototype.slice.call(cutWraps);

cutWrapImg = Array.prototype.slice.call(cutWrapImg);
// imgPopupEl = Array.prototype.slice.call(imgPopupEl);
imgPopupElImg =Array.prototype.slice.call(imgPopupElImg);
console.log(imgPopupEl);


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
           
            section[0].classList.add('active');
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
            section[0].classList.remove('active');
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
            // 캐릭터 리스트 눌렀을 때
            for (let i = 0; i < characterNavEls.length; i++) {
                characterNavEls[i].addEventListener('click', (e) => {
                    let targetEl = e.currentTarget;
                    popUpIndex = characterNavEls.indexOf(targetEl);
                    console.log('popUpIndex', popUpIndex);

                    for (let j = 0; j < characterNavEls.length; j++) {
                        characterNavEls[j].classList.remove('active');
                        characterBgImgAll[j].classList.remove('active');
                        characterIntro[j].classList.remove('active');
                        cutWrapsList[j].classList.remove('active');

                  }
                    characterNavEls[i].classList.add('active');
                    characterBgImgAll[i].classList.add('active');
                    characterIntro[i].classList.add('active');
                    cutWrapsList[i].classList.add('active');
                    
                });
                for(let i = 0; i < cutWrapImg.length; i++){
                    cutWrapImg[i].addEventListener('click',()=>{
                        console.log('cutWrapImg.length', i % 4);
                        for(let i = 0; i < imgPopupEl.length; i++){
                            console.log('click!');
                            imgPopupEl[i].classList.remove('active');
                        }
                      
                        popUpBtn.classList.add('active');
                        imgPopupEl[i % 4].classList.add('active');
                        console.log('imgPopupElLink', imgPopupElLink);
                        imgPopupElImg[i % 4].setAttribute('src', imgPopupElLink[popUpIndex].img[i%4]);
                    })
                }
                    popUpBtn.addEventListener('click', ()=>{
                        imgPopupEl[i].classList.remove('active');
                        popUpBtn.classList.remove('active');
                       
                        // bgPopupEl.classList.remove('active');
                })
            }
        }
        if(target === 2){
            section[0].classList.remove('active');
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


