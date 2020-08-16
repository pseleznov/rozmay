import React from 'react';
import { withRouter } from 'react-router-dom';
import articles from '../../../../../seeds/articles'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import MainPage from '../../pages/MainPage/MainPage';

const MainPageContainer = ({ match: { params } }) => {
    const foundPage = articles.find(products => products.route === params.section);

    if(!foundPage && !!params.section) {
        return <NotFoundPage />
    }

    return <MainPage />;
}

export default withRouter(MainPageContainer);