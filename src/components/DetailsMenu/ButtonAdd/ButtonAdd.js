import { Button, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import NumberFormat from 'react-number-format'
import { Link } from 'react-router-dom';

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

function ButtonAdd(props) {
    const classes = useStyles();
    let length = 0
    if(props.menuRadio === undefined){
        length = 0
    }
    else{
      length = props.menuRadio.length
    }
    const disable = props.disable === "" && length > 0
    return (
        <div className={classes.root}>
            <Grid item xs={12} className={classes.buttonContainer}>
            {
            props.count > 0 ? 
            [
              (props.added ? 
              <Button key={props.label} onClick={props.update} disabled={disable} variant="contained" color="primary" className={classes.button}>
              update {'\u00A0'} <NumberFormat value={props.label} displayType={'text'} thousandSeparator={true} prefix={'Rp '} /> 
              </Button> 
              :
              <Button key={props.label} onClick={props.add} disabled={disable} variant="contained" color="primary" className={classes.button}>
              add {'\u00A0'} <NumberFormat value={props.label} displayType={'text'} thousandSeparator={true} prefix={'Rp '} /> 
              </Button>  )
            ]
            : [
              (props.added ? 
                <Button key={props.label} onClick={props.delete} variant="contained" color="secondary" className={classes.button}>
                remove {'\u00A0'}  
                </Button>
                : 
                <Link to="/menu">
                <Button key={props.label} variant="contained" color="secondary" className={classes.button}>
                  Back To Menu 
                </Button></Link>
              
                )
            ]
              
            }
          
          </Grid>
        </div>
    )
}

export default ButtonAdd
