import {
    GET_TICKETS_ERROR,
    GET_TICKETS_REQUESTED,
    GET_TICKETS_SUCCESS
} from '../actions/types';

const INIT_STATE = {
    tickets: [],
    ticketsLoading: false,
    errorMessage: ''
};

const ticketsReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_TICKETS_REQUESTED:
            return { ...state, ticketsLoading: true, errorMessage: '' };
        case GET_TICKETS_SUCCESS:
            return { ...state, tickets: action.payload.tickets, ticketsLoading: false, errorMessage: '' };
        case GET_TICKETS_ERROR:
            return { ...state, ticketsLoading: false, errorMessage: action.payload.msg };
        default:
            return { ...state };
    }
}

export default ticketsReducer;
