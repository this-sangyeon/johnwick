let jwNavLink = document.querySelectorAll('.jw-nav ul > li > a');
let section = document.querySelectorAll('section');
const chapterPrevBtn = document.querySelector('.chapter-arrow > .prev');
const chapterNextBtn = document.querySelector('.chapter-arrow > .next')
let bgImages = document.querySelectorAll('.main-container > .bg-section > .bg-img');
let mainIntroArea = document.querySelectorAll('.main-content > .main-intro');
let introLength = mainIntroArea.length;
let currentIndex = 0;

const loadLinkEl= document.querySelector('.isMovieLink');
const loadInfoLinkEl= document.querySelector('.isInfoLink');
let getLink = loadLinkEl.getAttribute('href');
let _getLink = loadInfoLinkEl.getAttribute('href');
let movielink = [
    'https://page.kakao.com/home?seriesId=50653596',
    'https://page.kakao.com/home?seriesId=50653662',
    'https://page.kakao.com/home?seriesId=53491878'
];
let infolink = [
    'https://movie.naver.com/movie/bi/mi/basic.naver?code=123300',
    'https://movie.naver.com/movie/bi/mi/basic.naver?code=143932',
    'https://movie.naver.com/movie/bi/mi/basic.naver?code=181698'
];

// 트레일러
const trailerLinkEls = document.querySelectorAll('.chapter-area ul li a');
const trailerLinkImg = document.querySelectorAll('.chapter-area ul li a > img');
const trailerLinkText = document.querySelectorAll('.chapter-area ul li a > h4');
let trailerLink =[
    {
        link:['https://tv.naver.com/v/275348','https://tv.naver.com/v/271753','https://tv.naver.com/v/238286'],
        img:['img/main/jw2.jpeg','img/main/jw1.jpeg','img/main/jw3.jpeg'],
        text: ['Chapter1 Main preview','Chapter1 15-second preview','Chapter1 30-second preview']
     },
     {
        link:['https://tv.naver.com/v/1404546','https://tv.naver.com/v/1427189','https://tv.naver.com/v/1425968'],
        img:['img/main/jw3.jpeg','img/main/jw2.jpeg','img/main/jw1.jpeg'],
        text: ['Chapter2 Main preview','Chapter2 15-second preview','Chapter2 30-second preview']
     },
     {
        link:['https://tv.naver.com/v/275348','https://tv.naver.com/v/275348','https://tv.naver.com/v/275348'],
        img:['img/main/jw1.jpeg','img/main/jw3.jpeg','img/main/jw2.jpeg'],
        text: ['Chapter3 Main preview','Chapter3 15-second preview','Chapter3 30-second preview']
     }
]

const trailerBtn = document.querySelector('.trailer-btn');
const trailerArea = document.querySelector('.trailer-area');
const closeBtn = document.querySelector('.close-btn');
let chapterArea = document.querySelectorAll('.trailer-chapter');
// let chapterLength
let infoBtn = document.querySelectorAll('.InfoBtn > a >button')



jwNavLink = Array.prototype.slice.call(jwNavLink);
bgImages = Array.prototype.slice.call(bgImages);
mainIntroArea = Array.prototype.slice.call(mainIntroArea);
chapterArea = Array.prototype.slice.call(chapterArea);

// 메인 네비게이션
for(let i =0; i< jwNavLink.length; i++){
    jwNavLink[i].addEventListener('click',()=>{
        // e.defaultPrevented();
        for(let j = 0; j < jwNavLink.length; j++){
            jwNavLink[j].classList.remove('active');
          
        }
        for(let i = 0; i < jwNavLink.length; i++){
            section[i].classList.remove('active');
        }
        jwNavLink[i].classList.add('active');
        section[i].classList.add('active');

        // jwNavLink[0]
    })
}
// 트레일러
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

for(let i = 0; i <infoBtn.length; i++){
    infoBtn[i].addEventListener('mouseenter',()=>{
        infoBtn[i].style.background = "#4F0BC1"
        infoBtn[i].style.transition = "0.3s ease-in"
    })
    infoBtn[i].addEventListener('mouseleave',()=>{
        infoBtn[i].style.background = "none"
        infoBtn[i].style.transition = "0.3s ease-in"
    })
}
// console.log(movielink);
// 왼키
chapterPrevBtn.addEventListener('click',()=>{
    currentIndex = currentIndex - 1;
    currentIndex < 0 && (currentIndex = introLength - 1);
    console.log(currentIndex);

    for(let i = 0; i < mainIntroArea.length; i++){
        mainIntroArea[i].classList.remove('active');
    }
    for(let i = 0; i < bgImages.length; i++){
        bgImages[i].classList.remove('active');
    }
    mainIntroArea[currentIndex].classList.add('active');
    bgImages[currentIndex].classList.add('active');
    loadLinkEl.setAttribute('href', movielink[currentIndex]);
    loadInfoLinkEl.setAttribute('href', infolink[currentIndex]);
    trailerInfo();
  
})
// 오른키
chapterNextBtn.addEventListener('click',()=>{
    currentIndex = currentIndex + 1;
    currentIndex > introLength - 1 && (currentIndex = 0);
    console.log(currentIndex);
    console.log(_getLink);
    for(let i = 0; i < mainIntroArea.length; i++){
        mainIntroArea[i].classList.remove('active');
    }
    for(let i = 0; i < bgImages.length; i++){
        bgImages[i].classList.remove('active');
    }
    mainIntroArea[currentIndex].classList.add('active');
    bgImages[currentIndex].classList.add('active');
    loadLinkEl.setAttribute('href', movielink[currentIndex]);
    loadInfoLinkEl.setAttribute('href', infolink[currentIndex]);
    trailerInfo();
})

function trailerInfo(){
    for(let i = 0; i < trailerLinkEls.length; i++){
        trailerLinkEls[i].setAttribute('href',trailerLink[currentIndex].link[i]);
        trailerLinkImg[i].setAttribute('src',trailerLink[currentIndex].img[i]);
        trailerLinkText[i].innerText = trailerLink[currentIndex].text[i];
    }
}