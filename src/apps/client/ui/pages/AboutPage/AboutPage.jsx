import React, { Component } from 'react';
import FLowerDivider from '../../components/FlowerDivider/FlowerDivider';
import AssortmentContainer from '../../containers/AssortmentContainer/AssortmentContainer';
import background from './img/shveina_car.png';

import './AboutPage.css';

class AboutPage extends Component {
    render() {
        return (
            <section className='aboutPageContainer'>
                <FLowerDivider />
                <div className='aboutPage_mainContent'>
                    <div className='aboutPage_mainContent_background'>
                        <img src={background} alt="bg"/>
                    </div>
                    <div className="aboutPage_mainContent_text">
                        <div>
                            Невеличка майстерня <span className='logo_accent'>Rozmay</span> 15 років створює одяг з українською вишивкою.
                        </div>
                        <div>
                            Ми досі навчаємось і прагнемо досконалості. Наша робота надихає нас і, сподіваємось, 
                            тішить наших клієнтів.
                        </div>
                        <div>
                            Цілі родини і творчі колективи стають нашими друзями на довгі роки. 
                            Маємо надію, що наші роботи не залишать байдужими і Вас.
                        </div>
                        <div>Вмощуйтесь зручніше і підберіть щось до душі!</div>
                    </div>
                </div>
                <AssortmentContainer />
                <div className='aboutPage_anchor' ref={this.anchor}></div>
            </section>
        );
    }

};

export default AboutPage;