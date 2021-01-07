import { Button, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import NumberFormat from 'react-number-format'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        position: "fixed",
        bottom: "0",
        right: "0",
        backgroundColor: "white",
        width: "100%",
        height: "100px",
        textAlign: "center",
        zIndex: "1000",
        borderTop: '1px #CACACA solid'
    },
    button: {
        width: '80%',
        alignItems: "center",
        marginTop: '25px',
        height: "50px"
    },
    left: {
        position: 'absolute',
        left: '20px'
    },
    right: {
        position: 'absolute',
        right: '20px'
    }
}))

function ButtonCart(props) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid>

            </Grid>
            <Link to="/cart">
            <Button variant="contained" color="primary" className={classes.button}>
                <span className={classes.left}>{props.item} Items</span>
                <span className={classes.right}><NumberFormat value={props.subTotal} displayType={'text'} thousandSeparator={true} prefix={'Rp '} /> </span>
            </Button>
            </Link>
        </div>
    )
}

export default ButtonCart
