import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { Badge, Box, Button, Card, CardContent, CardHeader, FormControl, Grid, ImageList, ImageListItem, InputLabel, MenuItem, Select, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';

// Constants
import { GET_TICKETS_REQUESTED } from '../../../../common/redux/actions/types';

const useStyles = makeStyles((theme) => ({
  imageTicketContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  imageBadge: {
    width: '70%',
    margin: theme.spacing(2, 0)
  },
  imageTicket: {
    width: '100%',
  },
  textAlignCenter: {
    textAlign: 'center'
  },
  ticketContent: {
    margin: theme.spacing(2, 0),
    padding: theme.spacing(2, 2)
  }
}));

function Tickets({ }) {
  // Redux Dispatch and States
  const dispatch = useDispatch();
  const dispatchGetTickets = useCallback((options) => dispatch({ type: GET_TICKETS_REQUESTED, payload: { options } }), [dispatch]);
  const tickets = useSelector(state => state.ticketsReducer.tickets);
  const ticketsLoading = useSelector(state => state.ticketsReducer.ticketsLoading);

  // Member Variables
  const classes = useStyles();
  const [selectionForDrawTicket, setSelectionForDrawTicket] = useState(0);
  const [selectedTicket, setSelectedTicket] = useState(null);

  // Life Cycles
  useEffect(() => {
    const options = { skip: 0, take: 10 };
    dispatchGetTickets(options);
  }, []);

  useEffect(() => {
    if (tickets.length > 0) {
      setSelectionForDrawTicket(tickets[0].id);
      setSelectedTicket(tickets[0]);
    } else {
      setSelectionForDrawTicket(0);
      setSelectedTicket(null);
    }
  }, [tickets]);

  // Member functions
  const onBuyButtonClicked = () => {
    console.log(tickets);
  };

  const hangleSelectionChange = (event) => {
    setSelectionForDrawTicket(event.target.value);
  }

  const handleSelectTicket = (event, ticket) => {
    setSelectedTicket(ticket);
  }

  return (<Fragment>
    <Grid container spacing={3}>
      <Grid item xs={12} xs={4}>
        <Card>
          <CardHeader
            action={<Button size="small" variant="contained" color="primary" onClick={onBuyButtonClicked}>Buy</Button>}
            title="Get More Tickets" />
          <CardContent>
            {ticketsLoading ? <Typography>Loading...</Typography> : <ImageList cols={1}>
              {tickets.map(ticket => <ImageListItem key={ticket.id} className={classes.imageTicketContainer} onClick={event => handleSelectTicket(event, ticket)}>
                <Badge className={classes.imageBadge} badgeContent={ticket.unreadCount} color="primary">
                  <img className={classes.imageTicket} src={ticket.imageUrl} alt={ticket.name} />
                </Badge>
              </ImageListItem>)}
            </ImageList >}
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} xs={8}>
        <Card>
          <CardContent>
            <Box component="div" className={classes.textAlignCenter}>
              <Typography variant='h4'>
                Collectors Event
              </Typography>
              <Typography>
                Participate and win high quality currated NFTs
              </Typography>
            </Box>

            <Box component="div" className={`${classes.ticketContent} ${classes.textAlignCenter}`}>
              {!selectedTicket ? null : <img className={classes.imageTicket} src={selectedTicket.imageUrl} alt={selectedTicket.name} />}
              {!selectedTicket ? <Typography>Select Ticket in the left panel</Typography> : null}
            </Box>

            <Grid container spacing={3}>
              <Grid item xs={3}>
                <img className={classes.imageTicket} src='/assets/images/Ticket.png' alt='Ticket' />
              </Grid>
              <Grid item xs={6}>
                <Box component='div'>
                  <Typography>Draw Tickets</Typography>
                  <Typography>{tickets.length} Tickets found</Typography>
                  <Typography>Open your tickets and get a change to win $1000 worth of high quality NFTs! Learn More</Typography>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Select value={selectionForDrawTicket} onChange={hangleSelectionChange}>
                  {tickets.map(ticket => <MenuItem key={ticket.id} value={ticket.id}>{ticket.name}</MenuItem>)}
                </Select>
                <br /><br />
                <Button variant="contained" color="primary">Draw Ticket</Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Fragment>);
}

export default Tickets;