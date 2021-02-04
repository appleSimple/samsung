// 화면 누르면 재생/일시정지 양쪽 슬라이더 버튼

const rtBtn = document.querySelector('.rtBtnBox'),
	  ltBtn = document.querySelector('.ltBtnBox'),
	  video = document.querySelector('.video'),
	  videos = document.querySelectorAll('.video'),
	  videoTag = document.querySelectorAll('video');

let current = 0 ;

const rtSlide = () => {
	for(let i=0; i<videos.length; i++) {
		videos[i].classList.add('dis_none');
		videoTag[i].currentTime = 0;
	}
	current += 1;
	if(current == 3) current = 0 ;

	videos[current].classList.remove('dis_none');
}

const ltSlide = () => {
	for(let i=0; i<videos.length; i++) {
		videos[i].classList.add('dis_none');
		videoTag[i].currentTime = 0;
	}
	current -= 1;
	if (current==-1) current = 2;

	videos[current].classList.remove('dis_none');
}

rtBtn.addEventListener('click', rtSlide);
ltBtn.addEventListener('click', ltSlide);

// 영상 자동 넘기기
let j = 0;
while (j<videoTag.length) {
	videoTag[j].addEventListener('ended', rtSlide);
	j++;
}

// lnb -> gnb
// const header = document.querySelector('header');
// const lnb = document.querySelector('.lnb');
// const lnbList = document.querySelector('.ltLnb li');

// const scrollDown = () => {
// 	let myScroll = window.scrollY;
// 	if (myScroll > 800) {
// 		header.classList.add('fixed');
// 		lnb.classList.add('fixed');
// 		lnbList.classList.add('fixed');
// 	} else if (myScroll <= 800) {
// 		header.classList.remove('fixed');
// 		lnb.classList.remove('fixed');
// 		lnbList.classList.remove('fixed');
// 	}
// }

// window.addEventListener('scroll', scrollDown);

// 재생과 일시정지 코드
// const videoToggle = () => {
// 	if(video.paused) {
// 		video.play();
// 	}else if(video.play) {
// 		video.pause();
// 	}
// }
// video.addEventListener('click', videoToggle);

// let i = 0;
// while (i<videoTag.length) {
// 	const videoPlay = () => {
// 		for(let i=0; i<videoTag.length; i++) {
// 			if (videoTag[i].paused) {
// 				videoTag[i].play();
// 			}else if(videoTag[i].play){
// 				videoTag[i].pause();
// 			}
// 		}
// 	} 
// 	videoTag[i].addEventListener('click', videoPlay);

// 	i++;
// }

// 소개페이지 자세히보기 토글
const introDetailBtn = document.querySelector('#intro .introDetailBtn'),
	  introDetail = document.querySelector('#intro .introDetail');

const viewIntroDetail = () => {
	introDetail.classList.toggle('dis_none');
}

introDetailBtn.addEventListener('click', viewIntroDetail);


// 신제품 캐로셀
const newRtBtn = document.querySelector('.newRtBox'),
	  newLtBtn = document.querySelector('.newLtBox'),
	  newProducts = document.querySelectorAll('.newBox li'),
	  newProductImges = document.querySelectorAll('.newBox li img'),
	  productName = document.querySelector('.newBox .newDetail h3'),
	  productDetail = document.querySelector('.newBox .newDetail p'),
	  newBackgrounds = document.querySelectorAll('#new .newBackgrounds');

let newCurrent = 0 ;

const newRtSlide = () => {
	for(let i=0; i<newProducts.length; i++) {
	  newProducts[i].classList.add('opacity_none');
	  newBackgrounds[i].classList.add('opacity_none');
	}
	newCurrent += 1;
	if(newCurrent == 5) newCurrent = 0 ;
	
	newProducts[newCurrent].classList.remove('opacity_none');
	newBackgrounds[newCurrent].classList.remove('opacity_none');
	productName.textContent = newProductImges[newCurrent].getAttribute('alt');
	productDetail.textContent = newProductImges[newCurrent].getAttribute('detail');
}
	  
const newLtSlide = () => {
	for(let i=0; i<newProducts.length; i++) {
	  newProducts[i].classList.add('opacity_none');
	  newBackgrounds[i].classList.add('opacity_none');
	}
	newCurrent -= 1;
	if (newCurrent==-1) newCurrent = 4;
  
	newProducts[newCurrent].classList.remove('opacity_none');
	newBackgrounds[newCurrent].classList.remove('opacity_none');
	productName.textContent = newProductImges[newCurrent].getAttribute('alt');
	productDetail.textContent = newProductImges[newCurrent].getAttribute('detail');
}
	  
newRtBtn.addEventListener('click', newRtSlide);
newLtBtn.addEventListener('click', newLtSlide);

// placeSlide
const placeSlide = document.querySelector('.placeSlide');
const x = document.querySelector('.placeBox h1');
const placeBox = document.querySelector('.placeBox');

let currentValue = 0;
placeSlide.style.transform = `translate(${currentValue}px)`;
placeSlide.style.transition = '0.5s';



function testFunction() {
	placeSlide.onmousedown = function() {
		let mouseDown = event.clientX;
		
		placeSlide.onmouseup = function() {
			let mouseUp = event.clientX;
			let differ = mouseUp - mouseDown;	

			currentValue += differ;
			
			if (currentValue > 0 ) {
				currentValue += differ;
				currentValue = 0;
				placeSlide.style.transform = `translate(${currentValue}px)`;
			} else if (currentValue < -3400) {
				currentValue += differ;
				currentValue = -3400;
				placeSlide.style.transform = `translate(${currentValue}px)`;
			} else {
				placeSlide.style.transform = `translate(${currentValue}px)`;
			}
		}
	}
}
testFunction();

// samllGnb 숨기기 보이기
const header = document.querySelector('header'),
	  smallToggleBtn = header.querySelector('.smallGnb .toggleGnbBtn'),
	  toggleBurger = document.querySelector('.wrapper .toggleBurger'),
	  smallGnbList = document.querySelector('smallGnb ul a');

smallToggleBtn.onclick = function() {
	header.style.left = '-110%';
}
toggleBurger.onclick = function() {
	header.style.left = '0';
}
smallGnbList.onclick = function() {
	header.style.left = '-110%';
}


// 스크롤 이벤트


// window.addEventListener('scroll', function(){
// 	let myScrollY = window.scrollY;
// 	let sectionHeight = window.innerHeight;

// 	myScrollY += sectionHeight;
// 	// window.scrollTo(0, myScrollY);
	
// })

// window.scrollPosition = document.documentElement.scrollTop || 0;

// document.addEventListener('scroll', scrollFunction);

// function scrollFunction() {
// 	let documentY = document.documentElement.scrollTop;
// 	let direction = documentY - window.scrollPosition >= 0 ? 1 : -1;
// 	let sectionHeight = window.innerHeight;
	
// 	window.scrollPosition = documentY; // Update scrollY
  
// 	if (direction == 0) { 
// 	  return null;
// 	} else if (direction == -1) { // 올라감
// 	  documentY -= 500;
// 	  window.scrollTo(0, documentY);
// 	//   document.style.transition = '0.5s'
// 	} else if (direction == 1) { // 내려감
// 	  documentY += 500;
// 	  window.scrollTo(0, documentY);
// 	//   document.style.transition = '0.5s'
// 	}
// }

