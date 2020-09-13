import React, { Component } from 'react';
import Banner from '../../components/Banner/Banner';
import Navbar from '../../components/Navbar/Navbar';
import MainContentContainer from '../../containers/MainContentContainer/MainContentContainer';

import './MainPage.css';

class MainPage extends Component {
    render() {
        return (
            <div className='mainPageContainer'>
                <div className='mainPageContentContainer'>
                    <Navbar />
                    <MainContentContainer />
                </div>
                <Banner />
            </div>
        );
    }
};

export default MainPage;