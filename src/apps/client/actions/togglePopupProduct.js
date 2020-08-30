import { TOGGLE_POPUP_PRODUCT } from '../types/types';

const togglePopupProduct = payload => ({
    type: TOGGLE_POPUP_PRODUCT,
    payload
});

export default togglePopupProduct;
