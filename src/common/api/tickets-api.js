import { fakeTicketList } from '../constants/tickets-constants';

const ticketsAPI = {
    getAllTickets: (options) => {
        return new Promise((resolve, reject) => {
            resolve(fakeTicketList);
        });
    }
}

export default ticketsAPI;