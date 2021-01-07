import { Button, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import NumberFormat from 'react-number-format'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    button: {
        width: '70%',
        float: 'auto',
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
    return (
        <div>
            <Grid item xs={12} className={classes.buttonContainer}>
            {
            props.count > 0 ? 
            [
              (props.added ? 
              <Button key={props.label} onClick={props.update} variant="contained" color="primary" className={classes.button}>
              update {'\u00A0'} <NumberFormat value={props.label} displayType={'text'} thousandSeparator={true} prefix={'Rp '} /> 
              </Button> 
              :
              <Button key={props.label} onClick={props.add} variant="contained" color="primary" className={classes.button}>
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
