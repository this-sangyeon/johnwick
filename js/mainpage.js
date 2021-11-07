let jwNavLink = document.querySelectorAll('.jw-nav ul > li > a');
let section = document.querySelectorAll('section');
const chapterPrevBtn = document.querySelector('.chapter-arrow > .prev');
const chapterNextBtn = document.querySelector('.chapter-arrow > .next')
let bgImages = document.querySelectorAll('.main-container > .bg-section > .bg-imgs > img');
let mainIntroArea = document.querySelectorAll('.main-content > .main-intro');
let introLength = mainIntroArea.length;
let currentIndex = 0;


// 트레일러
const trailerBtn = document.querySelector('.trailer-btn');
const trailerArea = document.querySelector('.trailer-area');
const closeBtn = document.querySelector('.close-btn');
let chapterArea = document.querySelectorAll('.trailer-chapter');
// let chapterLength
let infoBtn = document.querySelectorAll('.InfoBtn > button')


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
        jwNavLink[i].classList.add('active');
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

chapterPrevBtn.addEventListener('click',()=>{
    currentIndex = currentIndex - 1;
    currentIndex < 0 && (currentIndex = introLength - 1);
    console.log(currentIndex);
    for(let i = 0; i < mainIntroArea.length; i++){
        mainIntroArea[i].classList.remove('active');
    }
    for(let i = 0; i < chapterArea.length; i++){
        chapterArea[i].classList.remove('active');
    }
    mainIntroArea[currentIndex].classList.add('active');
    chapterArea[currentIndex].classList.add('active');
})
chapterNextBtn.addEventListener('click',()=>{
    currentIndex = currentIndex + 1;
    currentIndex > introLength - 1 && (currentIndex = 0);
    console.log(currentIndex);
    for(let i = 0; i < mainIntroArea.length; i++){
        mainIntroArea[i].classList.remove('active');
    }
    for(let i = 0; i < chapterArea.length; i++){
        chapterArea[i].classList.remove('active');
    }
    mainIntroArea[currentIndex].classList.add('active');
    chapterArea[currentIndex].classList.add('active');
})
