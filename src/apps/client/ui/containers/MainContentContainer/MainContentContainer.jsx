import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import togglePopupProduct from '../../../actions/togglePopupProduct';
import MainContent from '../../components/MainContent/MainContent';
import NotAvailableProduct from '../../components/NotAvailableProduct/NotAvailableProduct';
import productsFilter from './helpers/productsFilter';
import addArticles from './helpers/addArticles';

const MainContentContainer = ({ match }) => {
    const { products, isPopupProductShown, langMap } = useSelector(({ application }) => application);

    const dispatch = useDispatch();
    const togglePopup = (payload) => {
        dispatch(togglePopupProduct(payload))
    }
    const filteredProducts = productsFilter(addArticles(products), match.params);

    const isBigDesktop = useMediaQuery({
        query: '(min-device-width: 1400px)'
    });

    const isTabletDesktop = useMediaQuery({
        query: '(min-device-width: 700px)'
    });

    return (
        filteredProducts.value.length 
            ?
                <MainContent
                    products={filteredProducts.value}
                    fabric={filteredProducts.fabric}
                    productText={langMap.mainPage.product}
                    isPopupProductShown={isPopupProductShown}
                    togglePopup={togglePopup}
                    isBigDesktop={isBigDesktop}
                    isTabletDesktop={isTabletDesktop}
                />
            :   <NotAvailableProduct /> 
    );
}

export default withRouter(MainContentContainer);