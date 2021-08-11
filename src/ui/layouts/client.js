import React, { Fragment } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

// Pages
import Tickets from '../pages/client/tickets/TicketsList';
import TicketsAdd from '../pages/client/tickets/TicketsAdd';

function ClientLayout({ match }) {
    return (<Fragment>
        <Switch>
            <Route path={`${match.url}/tickets`} component={Tickets} />
            <Route path={`${match.url}/tickets/new`} component={TicketsAdd} />
            
            <Redirect to={`${match.url}/tickets`} />
        </Switch>
    </Fragment>);
}

export default withRouter(ClientLayout);