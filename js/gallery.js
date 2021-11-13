let posterListEl = document.querySelectorAll('.poster-content > .poster-list > ul > li');
const posterListContainer = document.querySelector('.poster-content');

posterListEl = Array.prototype.slice.call(posterListEl);
let range = 500;

posterListContainer.addEventListener('scroll',()=>{
    value = posterListContainer.scrollTop;
    console.log(value);
    let screen_center= document.documentElement.scrollTop + window.innerHeight/2;
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
   
    if(value < 200){
        posterListEl[3].classList.remove('active');
        posterListEl[4].classList.remove('active');
        posterListEl[5].classList.remove('active');
        posterListEl[0].classList.add('active');
        posterListEl[1].classList.add('active');
        posterListEl[2].classList.add('active');
    
    }
    if(value >= 600 && screen_center+range ){
        posterListEl[0].classList.remove('active');
        posterListEl[1].classList.remove('active');
        posterListEl[2].classList.remove('active');
        posterListEl[3].classList.add('active');
        posterListEl[4].classList.add('active');
        posterListEl[5].classList.add('active');

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