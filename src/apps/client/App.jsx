import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Header from './ui/components/Header/Header';
import Footer from './ui/components/Footer/Footer';
import MainPage from './ui/pages/MainPage/MainPage';

import './App.css';

function App() {
  return (
    <main>
      <div className="page">
        <Header />
        <div className="pageContent">
          <Switch>
            <Route exact path={`/main`} render={MainPage} />
          </Switch>
        </div>
        <Footer />
      </div>
    </main>
  );
}

export default withRouter(App);
