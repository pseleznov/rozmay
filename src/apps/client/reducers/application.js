import {
    SET_PRODUCTS
} from '../types/types';

import DEFAULT_PRODUCTS from '../defaultProps/products';

const initialState = {
    products: DEFAULT_PRODUCTS
};

export default function (state = initialState, action) {
    switch (action.type) {
    case SET_PRODUCTS:
        return { ...state, products: action.payload };
    default:
        return state;
    }
}
