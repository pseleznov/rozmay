import React from 'react';
import { useSelector } from 'react-redux';
import MainContent from '../../components/MainContent/MainContent';
import { withRouter } from 'react-router-dom';

const MainContentContainer = (props) => {
    const products = useSelector(({ application }) => application.products);

    return <MainContent products={products}/>
}

export default withRouter(MainContentContainer);