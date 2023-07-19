import React from 'react';

export default function Section04Component(){
    return (
        <section id="section4">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <div className="container">
                            <h2>이 상품 관심있지 않으세요?</h2>
                            <a href="!#"><span>FOR U 바로가기</span></a>
                        </div>
                    </div>
                    <div className="content">
                        <ul>
                            <li>
                                <div className="col-gap">
                                    <div className="img-box">
                                        <img className='front-face' src="../img/34625_p_S_450.jpg" alt=""/>
                                        <span className='back-face'></span>
                                    </div>
                                    <div className='text-box'>
                                        <h4>블랙티 유스 앰플[대용랭]+블랙티 크림 50mL</h4>
                                        <p><strong>67,500</strong><span className='stock'> 90,000</span><span className='cost'>25%</span></p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="col-gap">
                                    <div className="img-box">
                                        <img className='front-face' src="../img/34496_p_S_450.jpg" alt="" />
                                        <span className='back-face'></span>   
                                    </div>
                                    <div className='text-box'>
                                        <h4>블랙티 유스 인핸싱 앰플</h4>
                                        <p><strong>30,400</strong><span className='stock'> 38,000</span><span className='cost'>20%</span></p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="col-gap">
                                    <div className="img-box">
                                        <img className='front-face' src="../img/34497_p_S_450.jpg" alt="" />
                                        <span className='back-face'></span>
                                    </div>
                                    <div className='text-box'>
                                        <h4>블랙티 유스 인핸싱 앰플 [대용량]</h4>
                                        <p><strong>44,800</strong><span className='stock'> 56,000</span><span className='cost'>20%</span></p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
