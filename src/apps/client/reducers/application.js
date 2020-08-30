import {
    TOGGLE_POPUP_PRODUCT
} from '../types/types';

import data from '../../../seeds/data';
import langMap from '../../../seeds/langMap';
import DEFAULT_LANG from '../constant/constant'

const initialState = {
    products: data,
    isPopupProductShown: false,
    langMap: langMap[DEFAULT_LANG]
};

export default function (state = initialState, action) {
    switch (action.type) {
    case TOGGLE_POPUP_PRODUCT:
        return { ...state, isPopupProductShown: action.payload };
    default:
        return state;
    }
}
