import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Header from './ui/components/Header/Header';
import Footer from './ui/components/Footer/Footer';
import MainPageContainer from './ui/containers/MainPageContainer/MainPageContainer';
import AboutPage from './ui/pages/AboutPage/AboutPage';
import NotFoundPage from './ui/pages/NotFoundPage/NotFoundPage';
import Helmet from './ui/components/Helmet/Helmet';

import './App.css';
import '../../fonts/fonts.css'

function App() {
  return (
    <main>
      <Helmet />
      <div className="page">
        <Header />
        <div className="pageContent">
          <Switch>
            <Route exact path={`/`} render={props => <MainPageContainer {...props} />} />
            <Route exact path={`/products/:section?`} render={props => <MainPageContainer {...props} />} />
            <Route exact path={`/about`} render={props => <AboutPage />} />
            <Route path={`/`} render={props => <NotFoundPage />} />
          </Switch>
        </div>
        <Footer />
      </div>
    </main>
  );
}

export default withRouter(App);
