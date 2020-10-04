import React, { Component } from 'react';
import HomeScreen from '../../components/HomeScreen/HomeScreen';
import BannerContainer from '../../containers/BannerContainer/BannerContainer';
import MainContentContainer from '../../containers/MainContentContainer/MainContentContainer';
import NavbarСontainer from '../../containers/NavbarСontainer/NavbarСontainer';

import './MainPage.css';

class MainPage extends Component {
    render() {
        const { homeScreen } = this.props;
        return (
            <div className='mainPageContainer'>
                <div className='mainPageContentContainer'>
                    <NavbarСontainer />
                    {
                        homeScreen
                            ? <HomeScreen />
                            : <MainContentContainer />
                    }
                </div>
                <BannerContainer />
            </div>
        );
    }
};

export default MainPage;