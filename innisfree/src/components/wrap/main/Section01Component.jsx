import React from 'react';
import $ from 'jquery';

export default function Section01Component(){

    React.useEffect(()=>{
        let cnt = 0;
        let setId = 0; // 
        function mainSlide(){

            $('.slide-wrap').stop().animate({left: `${-100*cnt}%` }, 1000, function(){
                if(cnt > 2) cnt=0;  
                if(cnt < 0) cnt=2; 
                
                $('.slide-wrap').stop().animate({left: `${-100*cnt}%` }, 0); 
            });   
            pageNation()
            
        }
        
        

        // 2-1. 다음카운트함수
        function nextCount(){
            cnt++;
            mainSlide();
        }

        function prevCount(){
            cnt--;
            mainSlide();
        }

        // 3. 자동타이머함수
        function autoTimer(){
            setId = setInterval(nextCount, 4000); 
        }
        autoTimer();

        

        


        let touchStart = 0;
        let touchEnd = 0;
        let mouseDown = false; // 마우스 다운 하면 true 아니면 false
        let dragStart = 0;
        let dragEnd = 0;
        let winWidth = $(window).innerWidth();

        // 데스크탑
        $('#section1').on({
            mousedown(e){
                winWidth = $(window).innerWidth();
                 // 마우스 다운 알림
                clearInterval(setId);
                // console.log('마우스다운'); // 터치 끝
                // console.log(event);
                // console.log(event.clientX);
                mouseDown=true; 
                touchStart = e.clientX;
                dragStart = e.clientX - $('.slide-wrap').offset().left-winWidth;
                
            },
            mouseup(e){
                // console.log('마우스업'); // 터치 끝
                // console.log(event);
                // console.log(event.clientX);

                touchEnd = e.clientX;
                // console.log(touchStart-touchEnd); //터치시작좌표-터치끝좌표
                if(touchStart-touchEnd > 0){
                    if(!$('.slide-wrap').is(':animated')){
                        nextCount();
                    }
                    
                }
                if(touchStart-touchEnd < 0){
                    if(!$('.slide-wrap').is(':animated')){
                        prevCount();
                    }
                }
                mouseDown=false; // 마우스 다운 알림
                
            },
            
            
            mousemove(e){ //마우스 방향에 따라다닌다.
                if(mouseDown!==true)return;

                console.log(e.clientX);
                
                // 마우스가 다운되면 그 때 부터 따라다녀라
                // 마우스다운할 때 변수에 다운상태를 저장한다.
                // 만약 마우스 다운이 다운상태가 아니면 마우스 무브는 취소해라
                dragEnd = e.clientX;
                $('.slide-wrap').css({left: dragEnd-dragStart});
                
            }
        });

        // 모바일
        $('#section1').on({
            touchstart(e){
                winWidth = $(window).innerWidth();
                
                // console.log('마우스다운'); // 터치 끝
                // console.log(event);
                // console.log(event.clientX);
                mouseDown=true; // 마우스 다운 알림
                touchStart = e.originalEvent.changedTouches[0].clientX;
                dragStart = e.originalEvent.changedTouches[0].clientX - $('.slide-wrap').offset().left-winWidth;
                console.log('손가락 터치시작',e.originalEvent.changedTouches[0].clientX);
            },
            touchend(e){
                // console.log('마우스업'); // 터치 끝
                // console.log(event);
                // console.log(event.clientX);
                touchEnd = e.originalEvent.changedTouches[0].clientX;
                // console.log(touchStart-touchEnd); //터치시작좌표-터치끝좌표
                if(touchStart-touchEnd > 0){
                    if(!$('.slide-wrap').is(':animated')){
                        nextCount();
                    }
                    
                }
                if(touchStart-touchEnd < 0){
                    if(!$('.slide-wrap').is(':animated')){
                        prevCount();
                        
                    }
                }
                mouseDown=false; // 마우스 다운 알림
                
                console.log('손가락 터치끝');
            },
            touchmove(e){ //마우스 방향에 따라다닌다.
                if(mouseDown!==true)return;

                console.log(e.originalEvent.changedTouches[0].clientX);
                
                // 마우스가 다운되면 그 때 부터 따라다녀라
                // 마우스다운할 때 변수에 다운상태를 저장한다.
                // 만약 마우스 다운이 다운상태가 아니면 마우스 무브는 취소해라
                dragEnd = e.originalEvent.changedTouches[0].clientX;
                $('.slide-wrap').css({left: dragEnd-dragStart});
            }
        });

        $('.arrow-next-btn').on({
            mouseenter(){
                clearInterval(setId);
            },
            mouseleave(){
                autoTimer();
            },
            click(){
                //슬라이드 랩퍼 박스가 애니메이션이 진행 중 아니면 다음 슬라이드
                if(!$('.slide-wrap').is(':animated')){
                nextCount();
                }
            }
        });

        $('.arrow-prev-btn').on({
            mouseenter(){
                clearInterval(setId);
            },
            mouseleave(){
                autoTimer();
            },
            click(){
                if(!$('.slide-wrap').is(':animated')){
                prevCount();
                }
            }
        });

        function pageNation(){
            $('.page-btn').removeClass('on');
            $('.page-btn').eq(cnt>2?0:cnt).addClass('on');
        }

        $('.page-btn').each(function(idx){
            $(this).on({
                mouseenter() {
                    clearInterval(setId);
                },
                mouseleave() {
                    autoTimer();
                },
                click(e) {
                    e.preventDefault();
                    clearInterval(setId);
                    cnt = idx;
                    mainSlide();
                }
            });
        });





    }, []);

    return (
        <section id='section1'>
            <div className="container">
                <div className="slide-container">
                    <div className="slide-view">
                        <ul className="slide-wrap">
                            <li className="slide slide3">
                                <div className="text-box">
                                    <span class='main'>최대35%</span>
                                    <h2>재구매율1위! 쫀쫀탄탄</h2>
                                    <h3>블랙티 유스 인핸싱 앰플</h3>
                                    <div className="text-box2">
                                        <p>51,000</p>
                                        <span className='stock'>37,500</span>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide1">
                                <div className="text-box">
                                    <span class='main'>사은품</span>
                                    <h2>잡티+필링을 한번에 케어</h2>
                                    <h3>비타C 세럼 0원 체험단</h3>
                                    <div className="text-box2">
                                        <p>67,000</p>
                                        <span className='stock'>49,000</span>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide2">
                                <div className="text-box">
                                    <span class='main'>최대20%</span>
                                    <h2>5일 특가+사은품 증정까지!</h2>
                                    <h3>20대 판매1위 레티놀앰플</h3>
                                    <div className="text-box2">
                                        <p>84,000</p>
                                        <span className='stock'>58,000</span>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide3">
                                <div className="text-box">
                                    <span class='main'>최대35%</span>
                                    <h2>재구매율1위! 쫀쫀탄탄</h2>
                                    <h3>블랙티 유스 인핸싱 앰플</h3>
                                    <div className="text-box2">
                                        <p>51,000</p>
                                        <span className='stock'>37,500</span>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide1">
                                <div className="text-box">
                                    <span class='main'>사은품</span>
                                    <h2>잡티+필링을 한번에 케어</h2>
                                    <h3>비타C 세럼 0원 체험단</h3>
                                    <div className="text-box2">
                                        <p>67,000</p>
                                        <span className='stock'>49,000</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <a href="!#" class="arrow-next-btn"><i></i></a>
                <a href="!#" class="arrow-prev-btn"><i></i></a>
            </div>
        </section>
    );
};
