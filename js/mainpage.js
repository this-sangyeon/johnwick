let jwNavLink = document.querySelectorAll('.jw-nav ul > li > a');
let section = document.querySelectorAll('section');
const chapterPrevBtn = document.querySelector('.chapter-arrow > .prev');
const chapterNextBtn = document.querySelector('.chapter-arrow > .next')
const bgImages = document.querySelector('.main-container > .bg-section > .bg-img > img');

// let mainIntroArea = document.querySelectorAll('.main-content > .main-intro');
const mainIntroArea = document.querySelector('.main-content > .main-intro');
const mainIntroTitle = document.querySelector('.main-content > .main-intro > .main-text > h2');
const mainIntroStory = document.querySelector('.main-content > .main-intro > .main-text > p');
const mainIntroRelease = document.querySelector('.main-content > .main-intro > .main-text > .movie-Info > ul > li:first-of-type');

const loadLinkEl= document.querySelector('.isMovieLink');
const loadInfoLinkEl= document.querySelector('.isInfoLink');
let getLink = loadLinkEl.getAttribute('href');
let _getLink = loadInfoLinkEl.getAttribute('href');

// 트레일러
const trailerLinkEls = document.querySelectorAll('.chapter-area ul li a');
const trailerLinkImg = document.querySelectorAll('.chapter-area ul li a > img');
const trailerLinkText = document.querySelectorAll('.chapter-area ul li a > h4');

const trailerBtn = document.querySelector('.trailer-btn');
const trailerArea = document.querySelector('.trailer-area');
const closeBtn = document.querySelector('.close-btn');
let chapterArea = document.querySelectorAll('.trailer-chapter');
let infoBtn = document.querySelectorAll('.InfoBtn > a > button')

let chapterInfo = [
    {
        title:'CHAPTER1 - JOHN WICK',
        story:'I shouldn`t have touched him. Revenge against enemies who chose the wrong person!John Wick, a killer called a legend, retires from the world of crime by meeting his beloved woman and getting married. Happiness is also briefly delivered as a gift to his wife before she dies. Then one day, unidentified men rush into his house...',
        release: '<strong>Release</strong>2015, January 21',
        img: 'img/main/jw1.jpeg'
        
    },
    {
        title:'CHAPTER2 - REROAD',
        story:'John Wick, the industry`s top legend killer, declares his retirement leaving the past behind, but heads to Rome under the rules of blood assassins with his former colleague who saved his life in the past. With his former colleague`s plan to steal the International Association of Assassins, John Wick fell into a trap, and the guns of assassins around the world were directed at him...',
        release: '<strong>Release</strong>2017, February 22',
        img: 'img/main/jw2-1.jpeg'
    },
    {
        title:'CHAPTER3 - PARABELLUM',
        story:'he legendary killer, “John Wick”.After being excommunicated by the International Association of Assaults for violating the rules, he faces danger without any protection and eventually visits Sophia for the final war…There’s no exit! If you want peace, prepare for war!',
        release: '<strong>Release</strong>2019, may 17',
        img: 'img/main/jw3-1.jpeg'
    }
]

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

let introLength = chapterInfo.length;
let currentIndex = 0;
jwNavLink = Array.prototype.slice.call(jwNavLink);
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
    loadLinkEl.setAttribute('href', movielink[currentIndex]);
    loadInfoLinkEl.setAttribute('href', infolink[currentIndex]);
    bgImages.setAttribute('src', chapterInfo[currentIndex].img);
    mainIntroTitle.innerText = chapterInfo[currentIndex].title;
    mainIntroStory.innerText = chapterInfo[currentIndex].story;
    mainIntroRelease.innerHTML = chapterInfo[currentIndex].release;

    trailerInfo();
  
})
// 오른키
chapterNextBtn.addEventListener('click',()=>{
    currentIndex = currentIndex + 1;
    currentIndex > introLength - 1 && (currentIndex = 0);
    console.log(currentIndex);
    console.log(_getLink);

    loadLinkEl.setAttribute('href', movielink[currentIndex]);
    loadInfoLinkEl.setAttribute('href', infolink[currentIndex]);
    bgImages.setAttribute('src', chapterInfo[currentIndex].img);
    mainIntroTitle.innerText = chapterInfo[currentIndex].title;
    mainIntroStory.innerText = chapterInfo[currentIndex].story;
    mainIntroRelease.innerHTML = chapterInfo[currentIndex].release;
    trailerInfo();
})

function trailerInfo(){
    for(let i = 0; i < trailerLinkEls.length; i++){
        trailerLinkEls[i].setAttribute('href',trailerLink[currentIndex].link[i]);
        trailerLinkImg[i].setAttribute('src',trailerLink[currentIndex].img[i]);
        trailerLinkText[i].innerText = trailerLink[currentIndex].text[i];
    }
}