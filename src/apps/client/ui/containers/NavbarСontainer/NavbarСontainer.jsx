import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../../components/Navbar/Navbar';

const mapStateToProps = ({ application }) => {
    return {
        langMap: application.langMap
    }
}

class NavbarСontainer extends Component {

    state = {}

    handleClick = (groupName) => () => {
        this.setState({
            [groupName]: !this.state[groupName]
        });
    }

    render() {
        const { langMap } = this.props;
        const { navbar, navbarTitle } = langMap.mainPage;

        return (
            <Navbar 
                navbar={navbar}
                navbarTitle={navbarTitle}
                handleClick={this.handleClick}
                state={this.state}
            />
        );
    }
};

export default connect(mapStateToProps)(NavbarСontainer);