import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import togglePopupProduct from '../../../actions/togglePopupProduct';
import MainContent from '../../components/MainContent/MainContent';
import productsFilter from './helpers/productsFilter';
import addArticles from './helpers/addArticles';

const MainContentContainer = ({ match }) => {
    const products = useSelector(({ application }) => application.products);
    const isPopupProductShown = useSelector(({ application }) => application.isPopupProductShown);
    const dispatch = useDispatch();
    const togglePopup = (payload) => {
        dispatch(togglePopupProduct(payload))
    }

    const filteredProducts = productsFilter(addArticles(products), match.params);

    return (
        <MainContent 
            products={filteredProducts.value} 
            isPopupProductShown={isPopupProductShown} 
            togglePopup={togglePopup}
        />
    );
}

export default withRouter(MainContentContainer);