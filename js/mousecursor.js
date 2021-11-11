document.addEventListener('DOMContentLoaded', function(){

	// 각 커서 스타일에 따른 변수를 설정하고 createElement를 통해 ('div')를 추가하였습니다.
	var cursor = document.createElement('div');
	var cursorRound = document.createElement('div');
	var cursorPoint = document.createElement('div');
	var cursorTail = document.createElement('div');
	var cursorTail2 = document.createElement('div');

	// classList.add를 활용하여 class를 추가하였습니다.
	cursor.classList.add('cursor');
	cursorRound.classList.add('cursor-round');
	cursorPoint.classList.add('cursor-point');
	cursorTail.classList.add('cursor-tail');
	cursorTail2.classList.add('cursor-tail2');

	cursor.appendChild(cursorRound);
	cursor.appendChild(cursorPoint);
	cursor.appendChild(cursorTail);
	cursor.appendChild(cursorTail2);
	document.body.appendChild(cursor);

	// 새롭게 생성된 변수에 classList.add를 통해 생성한 class 값을 할당합니다.
	var cursorRound = document.querySelector('.cursor-round');
	var cursorPoint = document.querySelector('.cursor-point');
	var cursorTail = document.querySelector('.cursor-tail');
	var cursorTail2 = document.querySelector('.cursor-tail2');

// .setAttribute()는 선택한 요소(element)의 속성(attribute) 값을 정합니다.
// client는 브라우저 페이지에서의 좌표 위치를 반환하나 스크롤은 무시하고 해당 페이지의 상단을 0으로 측정합니다.

	document.addEventListener('mousemove', function(e){
		cursorRound.setAttribute("style", "top: " + e.clientY + "px; left: " + e.clientX + "px");
		cursorPoint.setAttribute("style", "top: " + e.clientY + "px; left: " + e.clientX + "px");
		cursorTail.setAttribute("style", "top: " + e.clientY + "px; left: " + e.clientX + "px");
		cursorTail2.setAttribute("style", "top: " + e.clientY + "px; left: " + e.clientX + "px");
	});

	document.addEventListener('click', function(e){
		cursorPoint.classList.add("cursor-click");
		
		// setTimeout을 이용해 일정 시간이 지난 후에 마우스 커서가 사라지게 설정하였습니다.
		setTimeout(function(){
				cursorPoint.classList.remove("cursor-click");
		}, 450);
	});
	
});