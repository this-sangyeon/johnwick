const clipBox = document.querySelector('.box');
const bgSection = document.querySelector('.character-container > .bg-section');
let characterBgImgAll = document.querySelectorAll('.character-container .bg-section .bg-imgs > .bg-imgsWrap');
const navWrap = document.querySelector('.nav-wrap');
const characterContent = document.querySelector('.character-content');
// const bigimgContainer = document.querySelector('.bigimg-container > .img-popup-area');
let characterIntro = document.querySelectorAll('.character-content > .character-intro');
let cutWrapsList = document.querySelectorAll('.still-list');
let cutWraps = document.querySelectorAll('.cutWrap');
let cutWrapImg = document.querySelectorAll('.cutWrap > figure > img');
let imgPopupEl = document.querySelectorAll('.img-popup-area > .img-popup');
let imgPopupElImg = document.querySelectorAll('.img-popup > img');
const characterNavEls = document.querySelectorAll('.character-nav > ul > li ');
const imgPopupElLink =  [
    {
        img:['img/character/johnwick/johnwick1.jpg', 'img/character/johnwick/johnwick1.jpg', 'img/character/johnwick/johnwick1.jpg', 'img/character/johnwick/johnwick1.jpg']
    },
    {
        img:['img/character/sofia/sofia1.jpg', 'img/character/sofia/sofia2.jpg', 'img/character/sofia/sofia3.jpg', 'img/character/sofia/sofia3.jpg']
    },
    {
        img:['img/character/winston/winston1.jpg', 'img/character/winston/winston2.jpg', 'img/character/winston/winston3.jpg', 'img/character/winston/winston2.jpg']
    },
    {
        img:['img/character/johnwick/johnwick1.jpg', 'img/character/johnwick/johnwick1.jpg', 'img/character/johnwick/johnwick1.jpg', 'img/character/johnwick/johnwick1.jpg']
    }
];

// const PopupLinks = imgPopupElLink.filter(PopupLink => PopupLink.img);

// const imgPopup = document.getElementById('popupImg');
// console.log(imgPopup);

// imgPopup.dataset.columns// "4"
// imgPopup.dataset.index// "1 ~ 4"
// imgPopup.dataset.type // img


 

// 해야할 것: 캐릭터 내의 네비게이션 눌렀다가 홈이나 갤러리 눌렀을 때 네비게이션 비활성화
let popUpIndex = 0;
jwNavLink = Array.prototype.slice.call(jwNavLink);
characterIntro = Array.prototype.slice.call(characterIntro);
characterBgImgAll = Array.prototype.slice.call(characterBgImgAll);
cutWrapsList = Array.prototype.slice.call(cutWrapsList);
// characterNavEls = Array.prototype.slice.call(characterNavEls);
cutWraps = Array.prototype.slice.call(cutWraps);
cutWrapImg = Array.prototype.slice.call(cutWrapImg);
imgPopupEl = Array.prototype.slice.call(imgPopupEl);
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
                    for(let i = 0; i < cutWrapsList.length; i++){
                        cutWrapsList[i].classList.remove('active');
                    }
                    characterNavEls[i].classList.add('active');
                    characterBgImgAll[i].classList.add('active');
                    characterIntro[i].classList.add('active');
                    cutWrapsList[i].classList.add('active');
                   
                })
                cutWrapImg[i].addEventListener('click', ()=>{
                    console.log('click');
                    for(let i = 0; i < imgPopupEl.length; i++){
                        console.log('click');
                        imgPopupEl[i].classList.remove('active');
                    }
                    imgPopupEl[i].classList.add('active');
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


// characterNavEls.forEach(characterList =>{
//     characterList.addEventListener('click',()=>{
//         characterNavEls.forEach(characterList =>{
//             characterList.classList.remove('active');
//         })
//         // cutWraps.forEach(cutWrap =>{
//         //     cutWrap.classList.remove('active');
//         // })
//         // characterBgImgAll.forEach(characterBgImg =>{
//         //     characterBgImg.classList.remove('active');
//         // })
//         for(let i = 0; i<characterBgImgAll.length; i++){
//             characterBgImgAll[i].classList.remove('active');
//         }
//         characterBgImgAll[i].classList.add('active');

//         characterList.classList.add('active');
        // const value = characterList.textContent;
        // cutWrapImg.forEach(img =>{
        //     img.style.display ="none";
        //     if(img.getAttribute('data-filter') == value.toLowerCase() || value == "johnwick" ){
        //         img.style.display ='block';
        //     }
        // })
//     })
// })

// for(let i = 0; i < characterNavEls.length; i++){
//     characterNavEls[i].addEventListener('click',(e)=>{
//         // let target = e.currentTarget;
//         // popUpIndex =  characterNavEls.indexOf(target);
//         // console.log(popUpIndex);

        
//         for(let j = 0; j < characterNavEls.length; j++){
//             characterNavEls[j].classList.remove('active');
//         }
//         for(let i = 0; i < characterBgImgAll.length; i++){
//             characterBgImgAll[i].classList.remove('active');
//         }
//         for(let i = 0; i < characterIntro.length; i++){
//             characterIntro[i].classList.remove('active');
//         }

//         for(let i = 0; i < cutWrap.length; i++){
//             cutWrap[i].addEventListener('click', (e)=>{
//                 const filter = e.target.dataset.filter;
//                 imgPopupEl.forEach(popup =>{
//                     if(filter === `*` ||  filter === popup.dataset.index){
//                         imgPopupElImg[i].setAttribute('src',imgPopupElLink[popUpIndex].img[i]);
//                     }
//                     // if(filter === 2 ||  filter === popup.dataset.index){
//                     //     imgPopupElImg[i].setAttribute('src',imgPopupElLink[popUpIndex].img[i]);
//                     // }
//                 })
                
//                 for(let i = 0; i < imgPopupEl.length; i++){
//                     imgPopupEl[i].classList.add('active');
//                     bigimgContainer.classList.add('active'); 
//                 }
//             // });
//                 // for(let i = 0; i < imgPopupEl.length; i++){
//                 //     imgPopupEl[i].classList.add('active');
//                 //     bigimgContainer.classList.add('active'); 
//                 // }
                
//                 // for(let i = 0; i < imgPopupElImg.length; i++){
//                 //     imgPopupElImg[i].setAttribute('src',imgPopupElLink[popUpIndex].img[i]);
//                 //     console.log(imgPopupEl[i]);
//                 //     console.log(imgPopupElImg[i]);
//                 // }
//                 bigimgContainer.addEventListener('click', ()=>{
//                     for(let i = 0; i < imgPopupEl.length; i++){
//                         imgPopupEl[i].classList.remove('active');
//                         bigimgContainer.classList.remove('active');
//                     }   
//                 })
//             })
//         }
//         characterBgImgAll[i].style.visibility = 'visible';
//         characterNavEls[i].classList.add('active');
//         characterBgImgAll[i].classList.add('active');
//         characterIntro[i].classList.add('active');
//     });
// }


// for(let i = 0; i < cutWrap.length; i++){
//     cutWrap[i].addEventListener('click', ()=>{
//         for(let i = 0; i < imgPopupEl.length; i++){
//             imgPopupEl[i].classList.add('active');
//             bigimgContainer.classList.add('active');
//         }
//     })
    
//     bigimgContainer.addEventListener('click', ()=>{
//         bigimgContainer.classList.remove('active');
//     })
// }

// let isMain = false;
// let isCharacter = false;
// let isGallery = false;

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
