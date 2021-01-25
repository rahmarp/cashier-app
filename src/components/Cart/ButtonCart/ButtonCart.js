import { Button, Grid, makeStyles } from '@material-ui/core';
import React from 'react'

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
  }
  }))

function ButtonCart(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} className={classes.buttonContainer}>
                <Button 
                    onClick={props.click} 
                    variant="contained" 
                    color="primary" 
                    className={classes.button}>
                    Order! 
                </Button> 
            </Grid>
            </Grid>
                
        </div>
    )
}

export default ButtonCart
