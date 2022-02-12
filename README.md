# Project 
## Movie "JohnWick" Website

액션 스릴러 영화 “Johnwicj” 을 주제로 promotion website를 제작하였습니다.
사이트 내에서 현재까지 개봉된 영화 정보 및 캐릭터 프로필, photo, poster 이미지 등을 살펴볼 수 있습니다.

작업을 시작하기 앞서 가장 목표로 했던 부분들을 list화 하였습니다.

***1. 가독성***

***2. 디자인***

***3. 불필요한 html 및 css 사용 줄이기***

***4. 배열을 활용한 이미지 변경 및 팝업창 다루기***

***5. 반응형***


총 5가지의 목표를 잡고 직접 디자인을 한 시안을 토대로 제작단계에 돌입했습니다.



### Chapter 1 - Main page

------------------------------------------------

<img width="750" alt="johnwick1" src="https://user-images.githubusercontent.com/92290951/153715585-8250d026-575f-4809-8aca-36595ac72600.png">



메인페이지 입니다. 좌우버튼을 통해 각 챕터의 정보를 살펴볼 수 있습니다.



<img width="750" alt="johnwick2" src="https://user-images.githubusercontent.com/92290951/153715811-14fc10ac-2e27-4160-a99f-c532632a469b.png">



우측의 트레일러 버튼을 클릭하면 트레일러 팝업을 나타납니다.


다른 페이지에서 현재 페이지로 돌아올 시, 텍스트 초기화되도록 작업했습니다.



```Javascript

// isChapter가 home 버튼에 해당되는 boolean 변수
let isChapter = false;

if(isChapter === false){
    // 버튼이 눌리면 각 배열 안의 가장 첫번째 값이 할당되도록 한다.
    let chapterOne = 0;
    loadLinkEl.setAttribute('href', movielink[chapterOne]);
    loadInfoLinkEl.setAttribute('href', infolink[chapterOne]);
    bgImages.setAttribute('src', chapterInfo[chapterOne].img);
    mainIntroTitle.innerText = chapterInfo[chapterOne].title;
    mainIntroStory.innerText = chapterInfo[chapterOne].story;
    mainIntroRelease.innerHTML = chapterInfo[chapterOne].release;
    
    trailerInfo();

    function trailerInfo(){
        for(let i = 0; i < trailerLinkEls.length; i++){
            trailerLinkEls[i].setAttribute('href',trailerLink[chapterOne].link[i]);
            trailerLinkImg[i].setAttribute('src',trailerLink[chapterOne].img[i]);
            trailerLinkText[i].innerText = trailerLink[chapterOne].text[i];
        }
    }
}

```



### Chapter 2 - Character page

------------------------------------------------


<img width="750" alt="johnwick3" src="https://user-images.githubusercontent.com/92290951/153716145-f446aef9-f12e-4ed2-8773-461e802bdd81.png">



캐릭터 페이지 입니다. 각 캐릭터의 상세설명을 볼 수 있으며 스틸컷을 살펴볼 수 있습니다. 


```Javascript

// 캐릭터 리스트들을 눌렀을 때 발생할 이벤트
// 이미지의 경우
for (let i = 0; i < characterNavEls.length; i++) {
    characterNavEls[i].addEventListener('click', (e) => {
        let targetEl = e.currentTarget;
        popUpIndex = characterNavEls.indexOf(targetEl);
        console.log('popUpIndex', popUpIndex);

     // 4개의 이미지 컷 안에 배열값에 담긴 객체들을 담아주기 위한 식
    for(let i = 0; i < imgPopupElLink.length; i++ ){
        cutWrapImg[i].setAttribute('src',imgPopupElLink[popUpIndex].cutimg[i]);
    }
});

```


<img width="1680" alt="character1" src="https://user-images.githubusercontent.com/92290951/153716208-d55036fe-f81d-4b67-a1e3-0bab47c10445.png">



이미지 클릭 시 팝업창이 생기며 이미지를 좀 더 크게 살펴볼 수 있습니다.



```Javascript
// 스틸컷 이미지를 클릭했을 때 발생되는 이벤트
cutWrapImg[i].addEventListener('click',()=>{
    for(let i = 0; i < imgPopupElLink.length; i++){
        imgPopupEl[i].classList.remove('active');
    }
    // 단독으로 뜨는 팝업 이미지 안에 배열에 담긴 객체들을 담아주기 위한 식
    imgPopupElImg[i].setAttribute('src', imgPopupElLink[popUpIndex].cutimg[i]);
    imgPopupEl[i].classList.add('active');
    popUpBtn.classList.add('active');
    
})
// 버튼 누를 시 팝업창이 닫힘 
popUpBtn.addEventListener('click', ()=>{
    imgPopupEl[i].classList.remove('active');
    popUpBtn.classList.remove('active');
})

```



### Chapter 3 - Gallery page

------------------------------------------------



<img width="750" alt="johnwick4" src="https://user-images.githubusercontent.com/92290951/153716252-3da9d0c9-7f3e-45b2-9eae-3b2c25dc9c88.png">



갤러리 페이지이며 현재까지 나온 존윅의 포스터들 볼 수 있습니다. 
스크롤 시 해당 스크롤 위치에 도달하면 이미지가 액팅되는 패럴랙스 페이지 입니다. 
이미지 클릭 시 큰 화면으로 포스터 이미지를 더 상세하게 살필 수 있습니다.



