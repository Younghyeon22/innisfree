import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainComponent from './MainComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';

function IntroComponent(props) {
    return (
        <>
            <HeaderComponent/>
            <Routes>
                <Route index element={<MainComponent/>}/>
                <Route path='/메인' element={<MainComponent/>}/>
            </Routes>
            <FooterComponent/>
        </>
    );
}

export default IntroComponent;