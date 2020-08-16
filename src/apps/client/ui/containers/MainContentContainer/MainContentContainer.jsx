import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MainContent from '../../components/MainContent/MainContent';
import productsFilter from './helpers/productsFilter';
import addArticles from './helpers/addArticles';
import showAllProducts from './helpers/showAllProducts';

const MainContentContainer = ({ match }) => {
    const products = useSelector(({ application }) => application.products);

    const filteredProducts = productsFilter(addArticles(products), match.params);

    const productsToShow = filteredProducts 
        ? filteredProducts.value 
        : showAllProducts(products);

    return <MainContent products={productsToShow} />;
}

export default withRouter(MainContentContainer);