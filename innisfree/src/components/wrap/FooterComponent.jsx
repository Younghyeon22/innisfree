import React from 'react';

export default function FooterComponent(){
    return (
        <div id='footer'>
            <div className="container">
                <div className="gap">
                    <div className="row1">
                        <div className="container">
                            <ul>
                                <div className="content-box">
                                    <li>서비스 이용약관</li>
                                    <li><strong>개인정보처리방침</strong></li>
                                    <li>영상정보처리기기</li>
                                    <li>운영/관리 방침</li>
                                    <li>공지사항</li>
                                    <li>임직원서비스</li>
                                </div>
                                <div className="icon-box">
                                    <a href="!#"><img src="../img/icon_youtube.png" alt="" /></a>
                                    <a href="!#"><img src="../img/icon_instagram.png" alt="" /></a>
                                    <a href="!#"><img src="../img/icon_facebook.png" alt="" /></a>
                                    <a href="!#"><img src="../img/icon_twitter.png" alt="" /></a>
                                    <a href="!#"><img src="../img/icon_app.png" alt="" /></a>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className="row2">
                        <div className="left-box">
                            <ul>
                                <li> 
                                    <img src="../img/logo_footer.png" alt="" />
                                </li>
                                <li>
                                    <span>(주)이니스프리 서울특별시 용산구 한강대로 100(한강로2가) 7층 이니스프리</span><span className='esa'>대표이사 최민정</span><br />
                                    <span>사업자 등록번호 106-86-68127</span><i>|</i><span>통신판매신고번호 2018-서울용산-0014</span><i>|</i><span>제품 문의 : 080-380-0114 </span><i>|</i><span>FAX 02-6040-7108</span><br />
                                    <span>이메일 주소 innisfree@innisfree.com</span><i>|</i><span>비즈니스제휴/입점문의 partner.biz@innisfree.com</span><br />
                                    <span>이메일 주소 무단 수집 거부</span><i>|</i><span>개인정보 보호책임자 정구화</span><i>|</i><span>호스팅 서비스 제공자 ㈜이니스프리</span><br />
                                    <span className='strong'>㈜토스페이먼츠의 에스크로 서비스 가입</span><span>저희 쇼핑몰은 고객님의 안전한 거래를 위해 무통장입금 거래에 대해 구매안전서비스를 적용하고 있습니다.</span><br />
                                    <span className='toss'>토스페이먼츠 구매안전 서비스가입확인</span><br />
                                    <span>Copyright © 2019 Innisfree. All Rights Reserved.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="right-box">
                            <div className="container">
                                <ul>
                                    <li>
                                        <span className='gogek'>고객 서비스 센터 이용안내</span><br />
                                        <span className='strong'>080-380-0114</span><span className='susin'>(수신자 요금 부담)</span><br />
                                        <span>운영시간 AM 09:00 ~ PM 18:00 (주말 및 공휴일 휴무)</span><br />
                                        <span>점심시간 PM 12:00 ~ PM 13:00</span>
                                    </li>
                                    <button>1:1상담작성</button>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
