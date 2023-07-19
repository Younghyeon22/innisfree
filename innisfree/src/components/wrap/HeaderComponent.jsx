import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderComponent() {

    const [state, setState] = React.useState({
        isLogin : false
    })

    React.useEffect(()=>{
        const stored_id = sessionStorage.getItem('user_id');
        let isLogin = false;
        if(stored_id !==null){
            isLogin =true;
        }
        else {
            isLogin =false;
        }
        setState({
            ...state,
            isLogin : isLogin,
        })

    },[])

    const onClickLogout=(e)=>{
        e.preventDefault();
        sessionStorage.removeItem('user_id');
        setState({
            ...state,
            isLogin : false
        })
        window.location.href="/";
    }

    const onClickMyPage = (e)=>{
        e.preventDefault();
        if(sessionStorage.getItem('user_id')!==null){
            window.location.href="#/마이페이지";
        }
        else{
            alert('로그인 후 이용해 주세요');
            window.location.href="#/로그인";
        }
    }

    return (
        <header id='header'>
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="row1">
                            <div className="container">
                                {
                                    !state.isLogin && (
                                        <ul>
                                            <li><a href="!#">고객센터</a></li>
                                            <li><a href="!#">ABOUT US</a></li>
                                            <li><i>|</i></li>
                                            <li><Link to='/로그인'>로그인</Link></li>
                                            <li><Link to='/회원가입'>회원가입</Link></li>
                                            <li><a href="!#" onClick={onClickMyPage}>마이페이지</a></li>
                                            <li><a href="!#">장바구니</a></li>
                                        </ul>
                                    )
                                }
                                {
                                    state.isLogin && (
                                        <ul>
                                        <li><a href="!#">고객센터</a></li>
                                        <li><a href="!#">ABOUT US</a></li>
                                        <li><i>|</i></li>
                                        <li><Link to='/메인' onClick={onClickLogout}>로그아웃</Link></li>
                                        <li><Link to='/마이페이지' onClick={onClickMyPage} >마이페이지</Link></li>
                                        <li><a href="!#">장바구니</a></li>
                                    </ul>
                                    )
                                }
                            </div>
                        </div>
                        <div className="row2">
                            <div className="container">
                                <div className="left">
                                    <a href="!#"><img src="./img/logo_basic.png" alt="" /></a>
                                    <input type="text" name='' id='' placeholder='기다리던 3월의 멤버십 SALE ~60%' />
                                </div>
                                <div className="right">
                                    <ul>
                                        <li><a href="!#">특가</a></li>
                                        <li><a href="!#">이벤트</a></li>
                                        <li><a href="!#">베스트</a></li>
                                        <li><a href="!#">신제품</a></li>
                                        <li><a href="!#">라이브</a></li>
                                        <li><a href="!#">FOR U</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row3">
                            <div className="container">
                                <div className="left">
                                    <ul>
                                        <li><a href="!#">스킨케어</a></li>
                                        <li><a href="!#">메이크업</a></li>
                                        <li><a href="!#">남성</a></li>
                                        <li><a href="!#">헤어/바디</a></li>
                                        <li><a href="!#"> 기획 세트</a></li>
                                        <li><a href="!#">미용소품</a></li>
                                    </ul>
                                </div>
                                <div className="right">
                                    <a href="!#"><h4>피부고민</h4></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
