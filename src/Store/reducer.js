import * as actions from './actionTypes';

const initialState = {
    selectedItem: null,
    organizationList: []
}

export default (state=initialState, action) => {
    switch (action.type) {
        case actions.DADATA_SELECT_ITEM:
            return {
                ...state,
                selectedItem: action.item
            }
        case actions.SAVE_ORGANIZATION:
            let newArray = state.organizationList.slice()
            newArray.splice(action.index, 0, action.item)
            return {
                ...state,
                organizationList: newArray
            }
        case actions.REMOVE_ORGANIZATION:
            let array = state.organizationList;
            return {
                ...state,
                organizationList: [...array.slice(0, action.index), ...array.slice(action.index + 1)]
            }
        default:
            return state;
    }
}