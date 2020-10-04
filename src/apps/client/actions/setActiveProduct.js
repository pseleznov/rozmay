import { SET_ACTIVE_PRODUCT } from '../types/types';

const setActiveProduct = payload => ({
    type: SET_ACTIVE_PRODUCT,
    payload
});

export default setActiveProduct;
