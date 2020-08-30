import {
    TOGGLE_POPUP_PRODUCT
} from '../types/types';

import data from '../../../seeds/data';

const initialState = {
    products: data,
    isPopupProductShown: false
};

export default function (state = initialState, action) {
    switch (action.type) {
    case TOGGLE_POPUP_PRODUCT:
        return { ...state, isPopupProductShown: action.payload };
    default:
        return state;
    }
}
