import {
    SET_MEDIA_INFO
} from '../types/types';

const initialState = {
    media: null
};

export default function (state = initialState, action) {
    switch (action.type) {
    case SET_MEDIA_INFO:
        return { ...state, media: action.payload };
    default:
        return state;
    }
}
