import * as actions from './actionTypes';

export const dadataSelectItem = (item) => {
    return {
        type: actions.DADATA_SELECT_ITEM,
        item: item
    }
}

export const saveOrganization = (item) => {
    return {
        type: actions.SAVE_ORGANIZATION,
        item: item
    }
}

export const removeOrganization = (index) => {
    return {
        type: actions.REMOVE_ORGANIZATION,
        index: index
    }
}

