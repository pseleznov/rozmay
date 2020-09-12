import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import MainContentContainer from '../../containers/MainContentContainer/MainContentContainer';

import './MainPage.css';

class MainPage extends Component {

    anchor = React.createRef();

    state = {
        isBannerInView: true,
        windowHeight: window.innerHeight
    }

    componentDidMount() {
        window.addEventListener('scroll', this.isElementIntoView(this.anchor.current));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.isElementIntoView(this.anchor.current));
    }

    isElementIntoView  = (el, { full = false } = {}) => () => {
        const rect = el.getBoundingClientRect();
        const elemTop = rect.top;
        const elemBottom = rect.bottom;
        const windowInnerHeight = window.innerHeight;

        this.setState({ windowHeight: windowInnerHeight});
    
        if (full) {
            // Only completely visible elements return true:
            this.setState({
                isBannerInView: (elemTop >= 0) && (elemBottom <= windowInnerHeight)
            });
        } else {
            // Partially visible elements return true:
            this.setState({
                isBannerInView: elemTop < windowInnerHeight && elemBottom >= 0
            });
        }
    }

    render() {
        const { isBannerInView, windowHeight } = this.state;
        return (
            <div className='mainPageContainer'>
                <div className="mainPage_anchor" ref={this.anchor}></div>
                <div className='mainPageContentContainer'>
                    <Navbar fixPosition={!isBannerInView} windowHeight={windowHeight} />
                    <MainContentContainer />
                </div>
            </div>
        );
    }
};

export default MainPage;