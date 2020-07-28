import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './MainPage.css';
import Navbar from '../../components/Navbar/Navbar';

const MainPage = (props) => {
    const products = useSelector(({ application }) => application.products);
    console.log(products);

    return <div className='mainPageContainer'>
        <Navbar />
        <div className='contentContainer'>
            <div className='content'>
                {products.map((item, i) => {
                    return (
                        <div className='product' key={i}>
                            <div className='product_img_container'>
                                <img className='product_img' src="https://i.imgur.com/XPGk2Re.jpg" alt="product" />
                            </div>
                            <div className='product_name'>{item.name}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
};

export default MainPage;