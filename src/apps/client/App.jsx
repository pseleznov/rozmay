import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Header from './ui/components/Header/Header';
import Footer from './ui/components/Footer/Footer';
import MainPageContainer from './ui/containers/MainPageContainer/MainPageContainer';
import AboutPage from './ui/pages/AboutPage/AboutPage';
import NotFoundPage from './ui/pages/NotFoundPage/NotFoundPage';
import Helmet from './ui/components/Helmet/Helmet';
import ArrowUp from './ui/components/ArrowUp/ArrowUp';
import EventEmitter from 'eventemitter3';

import './App.css';
import '../../fonts/fonts.css'

const events = new EventEmitter();

class App extends Component {

  state = {
    arrowVisible: false
  };

  componentDidMount () {
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount () {
    document.removeEventListener('scroll', this.handleScroll);
  }

  componentWillReceiveProps (nextProps) {
      if (this.props.location !== nextProps.location) {
          window.scrollTo(0, 0);
      }
  };

  handleScroll = () => {
      const { arrowVisible } = this.state;
      if ((document.documentElement.scrollTop > 0) !== arrowVisible) {
          if (document.documentElement.scrollTop) {
              this.setState({ arrowVisible: true });
          } else {
              this.setState({ arrowVisible: false });
          }
      }
  };

  render() {
    const { arrowVisible } = this.state;

    return (
      <main>
        <Helmet />
        <ArrowUp events={events} visibility={arrowVisible} />
        <div className="page">
          <Header />
          <div className="pageContent">
            <Switch>
              <Route exact path={`/`} render={props => <MainPageContainer {...props} homeScreen={true} />} />
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
}

export default withRouter(App);
