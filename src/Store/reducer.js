import * as actions from './actionTypes';

const initialState = {
    selectedItem: null
}

export default (state=initialState, action) => {
    switch (action.type) {
        case actions.DADATA_SELECT_ITEM:
            return {
                ...state,
                selectedItem: action.item
            }
        default:
            return state;
    }
}