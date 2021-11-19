const posterListContainer = document.querySelector('.poster-content');
let posterListEl = document.querySelectorAll('.poster-content > .poster-list > ul > li');
const bigPorsterList = document.querySelector('.big-porster-list');
const posterWrapCloseBtn = document.querySelector('.posterWrap-close-btn');
const BigImgPoster = document.querySelector('.posterWrap > div > figure > img')
const btt = document.getElementById('back-to-top');
const InductionText = document.querySelector('.Induction-text');
const posterPrevBtn = document.querySelector('.posterlist-btn > button.prev');
const posterNextBtn = document.querySelector('.posterlist-btn > button.next')
let range = 500;
let scrollPos;
let docHeight; 
let degree = 10;
const galleryPopupElLink = [
        'img/gallery/posterimg/poster1-1.jpg',
        'img/gallery/posterimg/poster1-2.jpg',
        'img/gallery/posterimg/poster1-3.jpg',
        'img/gallery/posterimg/poster1-4.jpg',
        'img/gallery/posterimg/poster2-1.jpg',
        'img/gallery/posterimg/poster2-2.jpg',
        'img/gallery/posterimg/poster2-3.jpg',
        'img/gallery/posterimg/poster2-5.jpg',
        'img/gallery/posterimg/poster3-1.jpg',
        'img/gallery/posterimg/poster3-2.jpg',
        'img/gallery/posterimg/poster3-3.jpg',
        'img/gallery/posterimg/poster3-4.jpg',
        'img/gallery/posterimg/poster3-5.jpg',
        'img/gallery/posterimg/poster3-6.jpg',
        'img/gallery/posterimg/poster3-7.jpg',
        'img/gallery/posterimg/poster3-8.jpg',
        'img/gallery/posterimg/poster3-9.jpg',
        'img/gallery/posterimg/poster3-10.jpg'
];
let gallerypopUpIndex = 0;
let gallerypopUpListIndex = 0;
let posterLength = galleryPopupElLink.length;
console.log(posterLength);
posterListEl = Array.prototype.slice.call(posterListEl);

docHeight = Math.max(posterListContainer.scrollHeight,posterListContainer.offsetHeight);

for(let i = 0; i < posterListEl.length; i++){
    posterListEl[i].addEventListener('click', (e)=>{
        let targetEl = e.currentTarget;
        gallerypopUpIndex = posterListEl.indexOf(targetEl);

        console.log('clclclcl');
        console.log('gallerypopUpIndex', gallerypopUpIndex);
        BigImgPoster.setAttribute('src', galleryPopupElLink[gallerypopUpIndex]);
        bigPorsterList.classList.add('active');
        posterWrapCloseBtn.classList.add('active');
    })
    // posterPrevBtn.addEventListener('click', (e)=>{
    //     // gallerypopUpIndex =  gallerypopUpIndex -1;
    //     console.log('ccccllclvdkflsfkslf');
    // })
    
    posterWrapCloseBtn.addEventListener('click', ()=>{
        bigPorsterList.classList.remove('active');
        posterWrapCloseBtn.classList.remove('active');
    })
}
posterPrevBtn.addEventListener('click',()=>{
    gallerypopUpIndex = gallerypopUpIndex - 1;
    gallerypopUpIndex < 0 && (gallerypopUpIndex = posterLength - 1);
    console.log(gallerypopUpIndex);
    BigImgPoster.setAttribute('src', galleryPopupElLink[gallerypopUpIndex]);
   
    
})
posterNextBtn.addEventListener('click',()=>{
    gallerypopUpIndex = gallerypopUpIndex + 1;
    gallerypopUpIndex > posterLength - 1 && (gallerypopUpIndex =0);
    console.log(gallerypopUpIndex);
    BigImgPoster.setAttribute('src', galleryPopupElLink[gallerypopUpIndex]);
    
})


posterListContainer.addEventListener('scroll',()=>{
    value = posterListContainer.scrollTop;
    console.log(value);
    let screen_center= document.documentElement.scrollTop + window.innerHeight/2;

    if(value === 0){
        InductionText.classList.add('active');
        // InductionText.classList.add('active');
    }
    if(value >= 100 && value < 200){
        InductionText.classList.remove('active');
        // InductionText.classList.add('active');
    }
    if(value < 200){
        posterListEl[3].classList.remove('active');
        posterListEl[4].classList.remove('active');
        posterListEl[5].classList.remove('active');
        posterListEl[0].classList.add('active');
        posterListEl[1].classList.add('active');
        posterListEl[2].classList.add('active');
    
    }
    if(value >= 600 && screen_center ){
        posterListEl[0].classList.remove('active');
        posterListEl[1].classList.remove('active');
        posterListEl[2].classList.remove('active');
        posterListEl[3].classList.add('active');
        posterListEl[4].classList.add('active');
        posterListEl[5].classList.add('active');
        posterListEl[6].classList.remove('active');
        posterListEl[7].classList.remove('active');
        posterListEl[8].classList.remove('active');

    }
    if(value >= 1200 && screen_center){
        posterListEl[3].classList.remove('active');
        posterListEl[4].classList.remove('active');
        posterListEl[5].classList.remove('active');
        posterListEl[6].classList.add('active');
        posterListEl[7].classList.add('active');
        posterListEl[8].classList.add('active');
        posterListEl[9].classList.remove('active');
        posterListEl[10].classList.remove('active');
        posterListEl[11].classList.remove('active');

    }
    if(value >= 2000 && screen_center){
        posterListEl[6].classList.remove('active');
        posterListEl[7].classList.remove('active');
        posterListEl[8].classList.remove('active');
        posterListEl[9].classList.add('active');
        posterListEl[10].classList.add('active');
        posterListEl[11].classList.add('active');
        posterListEl[12].classList.remove('active');
        posterListEl[13].classList.remove('active');
        posterListEl[14].classList.remove('active');

    }
    if(value >= 2700  && screen_center){
        posterListEl[9].classList.remove('active');
        posterListEl[10].classList.remove('active');
        posterListEl[11].classList.remove('active');
        posterListEl[12].classList.add('active');
        posterListEl[13].classList.add('active');
        posterListEl[14].classList.add('active');
    }
    

    if(value >= 3300  && screen_center){
        posterListEl[12].classList.remove('active');
        posterListEl[13].classList.remove('active');
        posterListEl[14].classList.remove('active');
        posterListEl[15].classList.add('active');
        posterListEl[16].classList.add('active');
        posterListEl[17].classList.add('active');
    }
    // if(value >= 3500  && screen_center){
    //     posterListEl[12].classList.remove('active');
    //     posterListEl[13].classList.remove('active');
    //     posterListEl[14].classList.remove('active');
    // }

    if(value <= 3200  && screen_center){
        posterListEl[15].classList.remove('active');
        posterListEl[16].classList.remove('active');
        posterListEl[17].classList.remove('active');
    }
    
})
function scrollToTop(){
    var scrollInterval = setInterval(()=>{
        scrollPos = posterListContainer.scrollTop;
        if(scrollPos != 0){
            posterListContainer.scrollBy(0, -55);
        }else{
            clearInterval(scrollInterval);
        }
    }, 15);
}

btt.addEventListener('click', (e)=>{
    e.preventDefault();
    scrollToTop();
});

