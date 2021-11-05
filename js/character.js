let jwNavLink = document.querySelectorAll('.jw-nav ul > li > a');
jwNavLink =Array.prototype.slice.call(jwNavLink);
const clipBox = document.querySelector('.box');

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
    clipBox.classList.add('active');
})
jwNavLink[0].addEventListener('click',()=>{
    clipBox.classList.remove('active');
})
jwNavLink[2].addEventListener('click',()=>{
    clipBox.classList.remove('active');
})