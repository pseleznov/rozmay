import React from 'react';
import { useSelector } from 'react-redux';
import FlowerDivider from '../FlowerDivider/FlowerDivider';

import './HomeScreen.css';

const HomeScreen = () => {
    const langMap = useSelector(({ application }) => application.langMap);
    const { homeScreen } = langMap.mainPage;
    const { logo } = langMap.header;

    return (
        <div className='homescreenWrap'>
            <div className='homescreenContent'>
                    <div className="homescreenLogoWrap">
                        {logo}
                    </div>
                <div className='homescreenContent_title'>
                    {homeScreen.title}
                </div>
               <FlowerDivider />
                <div className='homescreenContent_textBlock'>
                    {
                        homeScreen.text.map((item, i) => {
                            return (
                                <div className='homescreenContent_text' key={i}>
                                    {item}
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;
