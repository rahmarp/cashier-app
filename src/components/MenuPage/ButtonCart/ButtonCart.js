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
        width: '95%',
        marginTop: '25px',
        height: "50px",
    },
    buttonContainer: {
        width: '100%',
        textAlign: 'center',
        position: 'absolute',
        bottom: '2rem',
        left: '0'
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
            <Grid container>
                <Grid item xs={12} className={classes.buttonContainer}>
                    <Link to="/cart">
                    <Button variant="contained" color="primary" className={classes.button}>
                        <span className={classes.left}>{props.item} Items</span>
                        <span className={classes.right}><NumberFormat value={props.subTotal} displayType={'text'} thousandSeparator={true} /> </span>
                    </Button>
                    </Link>
                </Grid>
            </Grid>
        </div>
    )
}

export default ButtonCart
