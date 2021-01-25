import { makeStyles } from '@material-ui/core';
import React from 'react'
import Header from './Header/Header';
import Total from './Total/Total';
import User from './User/User';
import ViewCart from './ViewCart/ViewCart';

const useStyles = makeStyles((theme) => ({
    root: {
        overflowY: 'scroll',
        marginBottom: '120px',
        boxShadow: 'none'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function Cart(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header label="Order Summary"/>
            <User 
                user={props.user}
                cart={props.cart}
                />
            <ViewCart 
                items={props.items}
                menu={props.menu}
                getItem={props.getItem}/>       
            <Total 
                cart={props.cart}/>
        </div>
    )
}

export default Cart
