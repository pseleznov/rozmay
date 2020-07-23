import React from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import './MainPage.css';
import Navbar from '../../components/Navbar/Navbar';

const mapStateToProps = ({ application }) => {
    console.log(application.products)
    return {
        products: application.products
    }
};

const MainPage = (props) => {
    // const state = useSelector(state => state);
    // console.log(props.products);

    return <div className='mainPageContainer'>
        <Navbar />
        <div className='contentContainer'>

        </div>
    </div>
};

export default connect(mapStateToProps, null)(MainPage);