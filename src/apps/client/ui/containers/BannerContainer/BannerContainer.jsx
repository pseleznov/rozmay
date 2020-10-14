import React, { Component } from 'react';
import { connect } from 'react-redux';
import setActiveProduct from '../../../actions/setActiveProduct';
import Banner from '../../components/Banner/Banner';

const mapStateToProps = ({ application }) => {
    return {
        activeProduct: application.activeProduct,
        langMap: application.langMap
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setActiveProduct: payload => dispatch(setActiveProduct(payload))
    }
}

class BannerСontainer extends Component {
    render() {
        const { langMap, activeProduct, setActiveProduct } = this.props;
        const { banner } = langMap.mainPage;
        const { phone, phoneText, textBelow, selectedProduct } = banner;

        return (
            <Banner 
                activeProduct={activeProduct}
                setActiveProduct={setActiveProduct}
                phone={phone}
                phoneText={phoneText}
                textBelow={textBelow}
                selectedProduct={selectedProduct}
            />
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BannerСontainer);
