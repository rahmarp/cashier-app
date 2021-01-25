import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import NumberFormat from 'react-number-format'

const useStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: '1rem',
        paddingRight: '1rem'
    },
    textRight: {
        textAlign: 'right'
    },
    price: {
        fontWeight: 'bold'
    }
}))

function Total(props) {
    const classes = useStyles()
    let count = 0
    for (let i in props.cart){
        count += props.cart[i].price
    }
    let tax = count*(10/100)
    let grandTotal = count + tax
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Typography variant="subtitle2">SubTotal</Typography>
                    <Typography variant="subtitle2">Tax (10%)</Typography>
                    <Typography variant="subtitle2">Grand Total</Typography>
                </Grid>
                <Grid item xs={6} className={classes.textRight}>
                    <Typography variant="subtitle2" className={classes.price}>
                    <NumberFormat value={count} displayType={'text'} thousandSeparator={true} prefix={'Rp '} />
                    </Typography>
                    <Typography variant="subtitle2" className={classes.price}>
                    <NumberFormat value={tax} displayType={'text'} thousandSeparator={true} prefix={'Rp '} />
                    </Typography>
                    <Typography variant="subtitle2" className={classes.price}>
                    <NumberFormat value={grandTotal} displayType={'text'} thousandSeparator={true} prefix={'Rp '} />
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Total
