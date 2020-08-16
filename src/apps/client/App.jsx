import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Header from './ui/components/Header/Header';
import Footer from './ui/components/Footer/Footer';
import MainPage from './ui/pages/MainPage/MainPage';

import './App.css';
import '../../fonts/fonts.css'
import Helmet from './ui/components/Helmet/Helmet';

function App() {
  return (
    <main>
      <Helmet />
      <div className="page">
        <Header />
        <div className="pageContent">
          <Switch>
            <Route exact path={`/`} render={props => <MainPage {...props} />} />
            <Route exact path={`/products/:section?`} render={props => <MainPage {...props} />} />
            <Route exact path={`/about`} render={props => <div />} />
          </Switch>
        </div>
        <Footer />
      </div>
    </main>
  );
}

export default withRouter(App);
