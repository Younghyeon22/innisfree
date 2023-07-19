import React from 'react';
import TopModalComponent from './wrap/TopModalComponent';
import HeaderComponent from './wrap/HeaderComponent';
import MainComponent from './wrap/MainComponent';
import FooterComponent from './wrap/FooterComponent';
import SignupComponent from './wrap/member/SignupComponent';
import { BrowserRouter, HashRouter,Routes,Route } from 'react-router-dom';
import IntroComponent from './wrap/IntroComponent';
import SigninComponent from './wrap/member/SigninComponent';
import MypageComponent from './wrap/Mypage/MypageComponent';
import IdSearchComponent from './wrap/member/IdSearchComponent';
import PwsearchComponent from './wrap/member/PwsearchComponent';


export default function WrapComponent(){
    return (
        <div id='wrap'>
            <HashRouter>
                <Routes>
                    <Route path='/*' element={<IntroComponent/>}/>
                    <Route path='/회원가입' element={<SignupComponent/>}/>
                    <Route path='/로그인' element={<SigninComponent/>}/>
                    <Route path='/마이페이지' element={<MypageComponent/>}/>
                    <Route path='/아이디찾기' element={<IdSearchComponent/>}/>
                    <Route path='/비밀번호찾기' element={<PwsearchComponent/>}/>
                </Routes>
            </HashRouter>
        </div>
    );
};
