import React from 'react';
import { useSelector } from 'react-redux';
import FLowerDivider from '../../components/FlowerDivider/FlowerDivider';
import AssortmentContainer from '../../containers/AssortmentContainer/AssortmentContainer';
import BannerContainer from '../../containers/BannerContainer/BannerContainer';
import background from './img/shveina_car.png';

import './AboutPage.css';

const AboutPage = () => {
    const { aboutPage } = useSelector(({ application }) => application.langMap);

    return (
        <section className='aboutPageContainer'>
            <FLowerDivider />
            <div className='aboutPage_mainContent'>
                <div className='aboutPage_mainContent_background'>
                    <img src={background} alt="bg"/>
                </div>
                <div className="aboutPage_mainContent_text">
                    <div>{aboutPage.text1}</div>
                    <div>{aboutPage.text2}</div>
                    <div>{aboutPage.text3}</div>
                    <div>{aboutPage.text4}</div>
                </div>
            </div>
            <AssortmentContainer />
            <BannerContainer />
        </section>
    );
};

export default AboutPage;