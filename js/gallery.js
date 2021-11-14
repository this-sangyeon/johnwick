const posterListContainer = document.querySelector('.poster-content');
let posterListEl = document.querySelectorAll('.poster-content > .poster-list > ul > li');
const btt = document.getElementById('back-to-top');
let range = 500;
let scrollPos;
let docHeight; 
let degree = 10;

posterListEl = Array.prototype.slice.call(posterListEl);

docHeight = Math.max(posterListContainer.scrollHeight,posterListContainer.offsetHeight);

posterListContainer.addEventListener('scroll',()=>{
    value = posterListContainer.scrollTop;
    console.log(value);
    let screen_center= document.documentElement.scrollTop + window.innerHeight/2;

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
    if(value >= 1400 && screen_center){
        posterListEl[3].classList.remove('active');
        posterListEl[4].classList.remove('active');
        posterListEl[5].classList.remove('active');
        posterListEl[6].classList.add('active');
        posterListEl[7].classList.add('active');
        posterListEl[8].classList.add('active');

    }
    if(value >= 2400  && screen_center){
        posterListEl[6].classList.remove('active');
        posterListEl[7].classList.remove('active');
        posterListEl[8].classList.remove('active');
        posterListEl[9].classList.add('active');
        posterListEl[10].classList.add('active');
        posterListEl[11].classList.add('active');
    }
    if(value <= 2400  && screen_center){
        posterListEl[9].classList.remove('active');
        posterListEl[10].classList.remove('active');
        posterListEl[11].classList.remove('active');
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

