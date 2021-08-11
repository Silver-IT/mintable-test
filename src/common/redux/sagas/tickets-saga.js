import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import { getTicketSuccess, getTicketError } from '../actions/tickets-actions';

// Constants
import {
    GET_TICKETS_REQUESTED
} from '../actions/types';

// API Services
import TicketsAPI from '../../api/tickets-api';

// -------------- Get Tickets Tickets --------------
export function* watchGetTickets() {
    yield takeEvery(GET_TICKETS_REQUESTED, getTicketsFromServer);
}

const getTicketsFromServerAsync = (options) => TicketsAPI.getAllTickets(options);

function* getTicketsFromServer({ payload }) {
    const { options } = payload;
    try {
        const tickets = yield call(getTicketsFromServerAsync, options);
        yield put(getTicketSuccess(tickets));
    } catch(error) {
        yield put(getTicketError('Failed to get tickets from server. Check your internet connection!'));
    }
}
// -------------------------------------------------

export default function* rootSaga() {
    yield all([
        fork(watchGetTickets),
    ]);
}