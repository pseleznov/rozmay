import React from 'react';
import { withRouter } from 'react-router-dom';
import articles from '../../../../../seeds/articles'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import MainPage from '../../pages/MainPage/MainPage';

const MainPageContainer = ({ match: { params }, homeScreen }) => {
    const foundPage = articles.find(products => products.route === params.section);

    if(!foundPage && !!params.section) {
        return <NotFoundPage />
    }

    return <MainPage homeScreen={homeScreen} />;
}

export default withRouter(MainPageContainer);