import React from 'react';
import { useSelector } from 'react-redux';
import Assortment from '../../components/Assortment/Assortment';

const AssortmentContainer = () => {
    const { aboutPage } = useSelector(({ application }) => application.langMap);

    return (
        <Assortment assortment={aboutPage.assortment} />
    );
}

export default AssortmentContainer;