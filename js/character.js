const clipBox = document.querySelector('.box');
const bgSection = document.querySelector('.character-container > .bg-section');
const navWrap = document.querySelector('.nav-wrap');


for(let i =0; i< jwNavLink.length; i++){
    jwNavLink[i].addEventListener('click',()=>{
        // e.defaultPrevented();
        for(let j = 0; j < jwNavLink.length; j++){
            jwNavLink[j].classList.remove('active');
        }
        jwNavLink[i].classList.add('active');
    })
}

jwNavLink[1].addEventListener('click',()=>{
    section[1].classList.add('active');
    setTimeout(()=>{
        clipBox.classList.add('active');
        bgSection.classList.add('active');
        navWrap.classList.add('active');
    },700)
    
   
    
})
jwNavLink[0].addEventListener('click',()=>{

    setTimeout(()=>{
        clipBox.classList.remove('active');
        bgSection.classList.remove('active');
        navWrap.classList.remove('active');
    },700)
    setTimeout(()=>{
        section[1].classList.remove('active');
    },800)
 
    

})
jwNavLink[2].addEventListener('click',()=>{
    clipBox.classList.remove('active');
    bgSection.classList.remove('active');
    section[1].classList.remove('active');
})