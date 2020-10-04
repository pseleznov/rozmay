import { connect } from 'react-redux';
import setActiveProduct from '../../../actions/setActiveProduct';
import Banner from '../../components/Banner/Banner';

const mapStateToProps = ({ application }) => {
    return {
        activeProduct: application.activeProduct
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setActiveProduct: payload => dispatch(setActiveProduct(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
