import {
    SET_PRODUCTS
} from '../types/types';

// import data from '../../../seeds/data'
// [].concat(...data)
const initialState = {
    products: null
};

export default function (state = initialState, action) {
    switch (action.type) {
    case SET_PRODUCTS:
        return { ...state, products: action.payload };
    default:
        return state;
    }
}
