import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import NumberFormat from 'react-number-format';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        padding: '0',
        margin: '0',
        backgroundColor: '#f5f5f5',
        height: '3rem'
    },
    header: {
        padding: '1rem'
    },
    textRight: {
        textAlign: 'right',
        padding: '1rem'
    },
}))
function User(props) {
    const classes = useStyles();
    let count = 0
    for (let i in props.cart){
        count += props.cart[i].price
    }
    return (
        <div className={classes.root}>
            <Grid container className={classes.root}>
                <Grid item xs={6}>
                <Typography variant="subtitle2" className={classes.header}>{props.user}</Typography>
                </Grid>
                <Grid item xs={6}>
                <Typography variant="subtitle2" className={classes.textRight}>
                <NumberFormat value={count} displayType={'text'} thousandSeparator={true} /></Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default User
