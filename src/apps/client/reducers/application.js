import {
    SET_PRODUCTS
} from '../types/types';

import DEFAULT_PRODUCTS from '../defaultProps/products';
import data from '../../../seeds/data';

const initialState = {
    products: data
};

export default function (state = initialState, action) {
    switch (action.type) {
    case SET_PRODUCTS:
        return { ...state, products: action.payload };
    default:
        return state;
    }
}
