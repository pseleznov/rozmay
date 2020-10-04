import React, { Component } from 'react';
import classNames from 'classnames';
import flower from './img/kvitochka.png';

import './FlowerDivider.css';

class flowerDivider extends Component {
    anchor = React.createRef();

    state = {
        isDividerIntoView: true
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

        if (full) {
            // Only completely visible elements return true:
            this.setState({
                isDividerIntoView: (elemTop >= 0) && (elemBottom <= windowInnerHeight)
            });
        } else {
            // Partially visible elements return true:
            this.setState({
                isDividerIntoView: elemTop < windowInnerHeight && elemBottom >= 0
            });
        }
    }

    render() {
        const { isDividerIntoView } = this.state;
        return (
            <div 
                className={classNames('homescreenContent_divider', {
                    'animation': isDividerIntoView
                })} 
                ref={this.anchor}
            >
                <div className='homescreenContent_flowersBox'>
                    <div className='homescreenContent_flowerWrap'>
                        <img src={flower} alt="flower"/>
                    </div>
                    <div className='homescreenContent_flowerWrap'>
                        <img src={flower} alt="flower"/>
                    </div>
                    <div className='homescreenContent_flowerWrap'>
                        <img src={flower} alt="flower"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default flowerDivider;