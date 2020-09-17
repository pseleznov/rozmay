import {
    TOGGLE_POPUP_PRODUCT,
    SET_LANG,
    SET_ACTIVE_PRODUCT
} from '../types/types';

import data from '../../../seeds/data';
import langMap from '../../../seeds/langMap';
import DEFAULT_LANG from '../constant/constant'

const initialState = {
    products: data,
    isPopupProductShown: false,
    langMap: langMap[DEFAULT_LANG],
    lang: DEFAULT_LANG,
    activeProduct: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case TOGGLE_POPUP_PRODUCT:
            return { ...state, isPopupProductShown: action.payload };
        case SET_ACTIVE_PRODUCT:
            return { ...state, activeProduct: action.payload };
        case SET_LANG:
            return { 
                ...state, 
                langMap: langMap[action.payload],
                lang: action.payload
            };
        default:
            return state;
    }
}
