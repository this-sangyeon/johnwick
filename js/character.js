const clipBox = document.querySelector('.box');
const bgSection = document.querySelector('.character-container > .bg-section');
let characterBgImgAll = document.querySelectorAll('.character-container .bg-section .bg-imgs > .bg-imgsWrap');
const navWrap = document.querySelector('.nav-wrap');
const characterContent = document.querySelector('.character-content');
const characterIntro = document.querySelector('.character-content > .character-intro');
const cutWrapsList = document.querySelector('.still-list');
let characterNavEls = document.querySelectorAll('.character-nav > ul > li ');
const popUpBtn = document.querySelector('.bigimg-container > .popup-btn');
const imgPopupEl = document.querySelectorAll('.img-popup-area > .img-popup');
let imgPopupElImg = document.querySelectorAll('.img-popup > img');

const characterName = document.querySelector('.character-text > h1');
const characterActor = document.querySelector('.character-text > p:first-of-type');
const characterInfo= document.querySelector('.character-text > p:last-of-type');

let cutWraps = document.querySelectorAll('.cutWrap');
let cutWrapImg = document.querySelectorAll('.cutWrap > figure > img');

let imgPopupElLink =  [
    {
        name:'JohnWick',
        actor:'<strong>Actor</strong> Keanu Reeves',
        info:'Robbers invade John Wick`s house, rob John`s pathetic 1969 Ford Mustang Boss 429, and in the process, John Wick was assaulted, as well as beagle Daisy, a pet dog and only friend presented by his sick wife, dies. Angry at this, John Wick buried Daisy in the ground, vowing revenge, and chasing the criminal...',
        cutimg: [
            'img/character/johnwick/johnwick1.jpg',
            'img/character/johnwick/johnwick2.jpg',
            'img/character/johnwick/johnwick3.jpg',
            'img/character/johnwick/johnwick4.jpg'
        ]
    },
    {
        name:'Sofia',
        actor:'<strong>Actor</strong> Halle Berry',
        info:'John, who moved to Casablanca with the help of the director, visited to ask for help, and quit his killer job and is working as the manager of Casablanca’s Continental Hotel. John shows whether he owes anything in the past or not, with her blood-stained mark. It seems that John helped protect and hide Sophia’s daughter.',
        cutimg: [
            'img/character/sofia/sofia1.jpg',
            'img/character/sofia/sofia2.jpg',
            'img/character/sofia/sofia3.jpg',
            'img/character/sofia/sofia4.jpg'
        ]
    },
    {
        name:'Winston',
        actor:'<strong>Actor</strong> Ian McShane',
        info:'The code number is 11111. A practical manager of the New York Continental Hotel and management of an underground, behind-the-scenes club,basically treats all hotel guests neutral, but offers favors to longtime regular John Wick.',
        cutimg: [
            'img/character/winston/winston1.jpg',
            'img/character/winston/winston2.jpg',
            'img/character/winston/winston3.jpg',
            'img/character/winston/winston4.jpg'
        ]
    },
    {
        name:'Charon',
        actor:'<strong>Actor</strong> Lance Reddick',
        info:'receptionist at the Continental Hotel. He is always on a poker face with a gentlemanly beggar. When John Wick comes to the Continental Hotel, he seems to respect John Wick in his own way, saying, "It`s an honor to serve you once again."',
        cutimg: [
            'img/character/charon/Charon1.jpg',
            'img/character/charon/Charon2.jpg',
            'img/character/charon/Charon4.jpg',
            'img/character/charon/Charon3.jpg'
        ]
    }
];


let popUpIndex = 0;
jwNavLink = Array.prototype.slice.call(jwNavLink);
imgPopupElImg = Array.prototype.slice.call(imgPopupElImg);
characterBgImgAll = Array.prototype.slice.call(characterBgImgAll);
characterNavEls = Array.prototype.slice.call(characterNavEls);
cutWraps = Array.prototype.slice.call(cutWraps);
cutWrapImg = Array.prototype.slice.call(cutWrapImg);
console.log(imgPopupEl);

let isChapter = false;
let isCharacter= false;
// let isStillCut = false;


for(let i =0; i< jwNavLink.length; i++){
    jwNavLink[i].addEventListener('click',(e)=>{
        let el = e.currentTarget, target = jwNavLink.indexOf(el);
        for(let j = 0; j < jwNavLink.length; j++){
            jwNavLink[j].classList.remove('active');
        }
        jwNavLink[i].classList.add('active');

        if(target === 0){
            clipBox.classList.remove('active');
            bgSection.classList.remove('active');
            navWrap.classList.remove('active');
            characterContent.classList.remove('active');
            console.log(e.currentTarget);
            if(isChapter === false){
                let chapterOne = 0;
                loadLinkEl.setAttribute('href', movielink[chapterOne]);
                loadInfoLinkEl.setAttribute('href', infolink[chapterOne]);
                bgImages.setAttribute('src', chapterInfo[chapterOne].img);
                mainIntroTitle.innerText = chapterInfo[chapterOne].title;
                mainIntroStory.innerText = chapterInfo[chapterOne].story;
                mainIntroRelease.innerHTML = chapterInfo[chapterOne].release;
                
                trailerInfo();

                function trailerInfo(){
                    for(let i = 0; i < trailerLinkEls.length; i++){
                        trailerLinkEls[i].setAttribute('href',trailerLink[chapterOne].link[i]);
                        trailerLinkImg[i].setAttribute('src',trailerLink[chapterOne].img[i]);
                        trailerLinkText[i].innerText = trailerLink[chapterOne].text[i];
                    }
                }
            }
        } 
        if(target === 1){
            console.log(e.currentTarget);
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
                  }
                    characterNavEls[i].classList.add('active');
                    characterBgImgAll[i].classList.add('active');
                    characterName.innerText = imgPopupElLink[popUpIndex].name;
                    characterActor.innerHTML = imgPopupElLink[popUpIndex].actor;
                    characterInfo.innerHTML = imgPopupElLink[popUpIndex].info;
                   
                    for(let i = 0; i < imgPopupElLink.length; i++ ){
                        cutWrapImg[i].setAttribute('src',imgPopupElLink[popUpIndex].cutimg[i]);
                    }
                });
                
                cutWrapImg[i].addEventListener('click',()=>{
                    for(let i = 0; i < imgPopupElLink.length; i++){
                        imgPopupEl[i].classList.remove('active');
                    }
                    imgPopupElImg[i].setAttribute('src', imgPopupElLink[popUpIndex].cutimg[i]);
                    imgPopupEl[i].classList.add('active');
                    popUpBtn.classList.add('active');
                   
                })
                    popUpBtn.addEventListener('click', ()=>{
                        imgPopupEl[i].classList.remove('active');
                        popUpBtn.classList.remove('active');
                })


                
                if(isCharacter === false){
                    popUpIndex = 0;
                    characterName.innerText = imgPopupElLink[popUpIndex].name;
                    characterActor.innerHTML = imgPopupElLink[popUpIndex].actor;
                    characterInfo.innerHTML = imgPopupElLink[popUpIndex].info;
                 
                    for(let i = 0; i < imgPopupElLink.length; i++ ){
                        cutWrapImg[i].setAttribute('src',imgPopupElLink[popUpIndex].cutimg[i]);
                        characterBgImgAll[i].classList.remove('active');
                        characterNavEls[i].classList.remove('active');
                    }
                    characterBgImgAll[popUpIndex].classList.add('active');
                    characterNavEls[popUpIndex].classList.add('active');
                }
                
            }
        }
        if(target === 2){
            clipBox.classList.remove('active');
            bgSection.classList.remove('active');
            navWrap.classList.remove('active');
            characterContent.classList.remove('active');
            console.log(e.currentTarget);
        }
    })
}








