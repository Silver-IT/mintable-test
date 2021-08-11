import {
    GET_TICKETS_ERROR,
    GET_TICKETS_REQUESTED,
    GET_TICKETS_SUCCESS
} from './types';

export const getTicketRequest = (options) => ({ type: GET_TICKETS_REQUESTED, payload: options });
export const getTicketSuccess = (tickets) => ({ type: GET_TICKETS_SUCCESS, payload: { tickets } });
export const getTicketError = (msg) => ({ type: GET_TICKETS_ERROR, payload: { msg } });
