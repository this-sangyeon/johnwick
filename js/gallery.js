let posterListEl = document.querySelectorAll('.poster-content > .poster-list > ul > li');
const posterListContainer = document.querySelector('.poster-content');

posterListEl = Array.prototype.slice.call(posterListEl);
let range =200;

posterListContainer.addEventListener('scroll',()=>{
    value = posterListContainer.scrollTop;
    console.log(value);
    // let screen_center = document.documentElement.scrollTop + window.innerHeight/2;
    // console.log(screen_center);

    // for(let i = 0; i < posterListEl.length; i++){
    //     let one_poster = posterListEl[i];
    //     if(one_poster.offsetTop <= screen_center + range && one_poster.offsetTop >= screen_center - range){
    //         one_poster.classList.add('active');
    //         console.log(one_poster);
    //     }else{
    //         one_poster.classList.remove('active');
    //     }
    // }
   
    if(value < 600){
        posterListEl[0].style.top ="5%";
        posterListEl[0].style.left ="5%";
        posterListEl[3].classList.remove('active');
    
    }
    if(value >= 600 && value < 1200 ){
        posterListEl[3].classList.add('active');
    }
    
})