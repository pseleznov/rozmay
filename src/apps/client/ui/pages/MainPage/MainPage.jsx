import React, { Component } from 'react';
import Banner from '../../components/Banner/Banner';
import HomeScreen from '../../components/HomeScreen/HomeScreen';
import Navbar from '../../components/Navbar/Navbar';
import MainContentContainer from '../../containers/MainContentContainer/MainContentContainer';

import './MainPage.css';

class MainPage extends Component {
    render() {
        const { homeScreen } = this.props;
        return (
            <div className='mainPageContainer'>
                <div className='mainPageContentContainer'>
                    <Navbar />
                    {
                        homeScreen
                            ? <HomeScreen />
                            : <MainContentContainer />
                    }
                </div>
                <Banner />
            </div>
        );
    }
};

export default MainPage;