import { DASHBOARD_ERROR, DASHBOARD_OK } from 'actions/Dashboard'

const initialState = {
    errorMessage: '',
    home: 0,
    plan: 0,
    unprocessed_orders: 0,
    missed_calls: 0,
    members: [],
    status: {
        date: null,
        new: 0,
        open: 0,
        delivery: 0,
        pending: 0,
    },
    block1: {
        title: null,
        date: null,
        icon: null,
        members: [],
    },
    block2: {
        title: null,
        date: null,
        icon: null,
        members: [],
    },
    block3: {
        title: null,
        date: null,
        icon: null,
        members: [],
    },
    block4: {
        title: null,
        date: null,
        icon: null,
        members: [],
    },
}

export const dashboard = (state = initialState, action) => {
    switch(action.type) {
        case DASHBOARD_ERROR:
            return {
                ...state,
                errorMessage: action.errorMessage,
            }
        case DASHBOARD_OK:
            return {
                ...state,
                ...action.payload,
                errorMessage: '',
            }
        default:
            return state
    }
}
