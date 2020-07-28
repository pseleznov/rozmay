import React from 'react';
import './MainPage.css';
import Navbar from '../../components/Navbar/Navbar';
import MainContentContainer from '../../containers/MainContentContainer/MainContentContainer';

const MainPage = (props) => {
    return <div className='mainPageContainer'>
        <Navbar />
        <MainContentContainer />
    </div>
};

export default MainPage;