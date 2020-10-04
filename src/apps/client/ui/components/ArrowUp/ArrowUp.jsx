import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SCROLL_TOP_EVENT_NAME } from '../../../constant/constant';
import arrow from './img/arrow.png';

import styles from './ArrowUp.module.css';


class ArrowUp extends Component {
    static propTypes = {
        events: PropTypes.object.isRequired,
        visibility: PropTypes.bool.isRequired
    };

    static defaultProps = {
        visibility: false
    };

    state = {
        isPressed: false
    }

    componentWillReceiveProps (next) {
        if (next.visibility) {
            this.setState({ isPressed: false });
        }
    }

    handleArrowClick = () => {
        this.props.events.emit(SCROLL_TOP_EVENT_NAME);
        this.setState({ isPressed: true });
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };

    render () {
        const { isPressed } = this.state;
        const { visibility } = this.props;

        return (
            <div className={classNames(styles.arrowContainer, {
                [styles.isPressed]: isPressed,
                [styles.visibility]: visibility
            })} onClick={this.handleArrowClick}>
                <div className={styles.press}>
                    <div className={styles.arrow}>
                        <img className={styles.img} src={arrow} alt="arrow"/>
                    </div>
                </div>
            </div>
        );
    };
}

export default (ArrowUp);
