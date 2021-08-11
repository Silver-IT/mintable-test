import { fakeTicketList } from '../constants/tickets-constants';
import { delay } from '../utils/common-utils';

const ticketsAPI = {
    getAllTickets: (options) => {
        return new Promise((resolve, reject) => {
            delay(() => resolve(fakeTicketList));
        });
    }
}

export default ticketsAPI;