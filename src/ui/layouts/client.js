import React, { Fragment } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import { AppBar, Box, Button, Container, Grid, IconButton, InputBase, Toolbar, Typography } from '@material-ui/core';
import { alpha, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

// Pages
import Tickets from '../pages/client/tickets/TicketsList';
import TicketsAdd from '../pages/client/tickets/TicketsAdd';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    flexGrow1: {
        flexGrow: 1,
    },
    container: {
        paddingTop: `calc(1em + ${theme.spacing(4)}px)`,
        paddingBottom: `calc(1em + ${theme.spacing(4)}px)`,
    },
    footerContainer: {
        padding: theme.spacing(4, 5),
        backgroundColor: '#2c0346',
        color: 'white'
    }
}));

function ClientLayout({ match }) {
    const classes = useStyles();

    return (<Fragment>
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>

                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }} />
                </div>

                <div className={classes.flexGrow1}></div>

                <Button color="inherit">Browse</Button>
                <Button color="inherit">Discover</Button>
                <Button color="inherit">Mint an item</Button>
                <Button color="inherit">Vote/DAO</Button>
            </Toolbar>
        </AppBar>

        <Container className={classes.container}>
            <Switch>
                <Route path={`${match.url}/tickets`} component={Tickets} />
                <Route path={`${match.url}/tickets/new`} component={TicketsAdd} />

                <Redirect to={`${match.url}/tickets`} />
            </Switch>
        </Container>
        
        <Box component="div" className={classes.footerContainer}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Typography variant='h6'>Mintable</Typography><br/><br/>
                    <Typography>Join our community</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant='h6'>My Account</Typography><br/>
                    <Typography>Create a store</Typography>
                    <Typography>List an item for sale</Typography>
                    <Typography>My Profile</Typography>
                    <Typography>Browse</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant='h6'>Need Help?</Typography><br/>
                    <Typography>FAQ</Typography>
                    <Typography>Mintable guide</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant='h6'>Buy an Item</Typography><br/>
                    <Typography>Digital Items</Typography>
                    <Typography>Stores</Typography>
                </Grid>

                <Grid item xs={2}>
                    <Typography variant='h6'>Legal</Typography><br/>
                    <Typography>Privacy Policy</Typography>
                    <Typography>Terms of Use</Typography>
                </Grid>
            </Grid>
        </Box>
    </Fragment>);
}

export default withRouter(ClientLayout);