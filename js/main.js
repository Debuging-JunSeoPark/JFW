
//페이지 스크롤에 따른 요소 제어

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
window.addEventListener('scroll', function(){
    console.log(window.scrollY);
    //Badge 요소 숨기기!
    if (window.scrollY > 500){
        gsap.to(badgeEl, .6, {
            opacity: 0,
            dispaly: 'none'
        });
        //상단으로 이동 버튼 보이기!
        gsap.to(toTopEl, .6, {
            opacity:1,
            x:0
        });
    }else{
        //Badge 요소 보이기!!
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
        //상단으로 아동 버튼 숨기기!
        gsap.to(toTopEl, .6,{
            opacity:0, 
            x:100
        });
    }
});

toTopEl.addEventListener('click', function(){
    gsap.to(window, .6,{
        scrollTo:0
    });
});
//나탄날 요소(.fade-in)들을 찾기
const fadeEls = document.querySelectorAll('.visual .fade-in');
//요소를 하나씩 반복해서 처리
fadeEls.forEach(function(fadeEl, index){
    gsap.to(fadeEl, 1, {
        delay: (index+1)* .7,
        opacity: 1
    });
});

new Swiper('.notice .swiper', {
    direction : 'vertical' , //수직슬라이드
    autoplay : true, //자동 재생 여부
    loop : true, //반복재생 여부
});

new Swiper('.promotion .swiper', {
    //direction : 'vertical' , //수직슬라이드
    autoplay : true, //자동 재생 여부
    loop : true, //반복재생 여부
    slidesPerView : 3, // 한 번에 보여줄 슬라이드 개수
    spaceBetween: 10, //슬라이드 사이의 여백
    centeredSlides: true, //1번 슬라이드가 가운데 보이기
    pagination: { //페이지 번호 사용
        el : '.promotion .swiper-pagination', //페이지 번호 요소
        clickable :true // 사용자의 페이지 번호 제어 여부
    },
    navigation: { //슬라이드 이전/다음 버튼 사용
        prevEl: '.promotion .swiper-button-prev', //이전 버튼 요소
        nextEl: '.promotion .swiper-button-next' //다음 버튼 요소
    }
});

const promotionEl= document.querySelector('section.promotion');
const promotionToggleBtn= document.querySelector('.toggle-promotion');

//토글 버튼을 클릭했을 때 
promotionToggleBtn.addEventListener('click', function(){
    if(promotionEl.classList.contains('hide')){
        promotionEl.classList.remove('hide');
    }else {
        promotionEl.classList.add('hide');
    }
});



const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
    new ScrollMagic
    .Scene({//검사할 장면을 추가
        triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
        triggerHook: .8 //화면의 80% 지점에서 보여짐 여부 감시
    
    }) 
    .setClassToggle(spyEl,'show') //요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()); //컨트롤러에 장면을 할당(필수!!)

});



