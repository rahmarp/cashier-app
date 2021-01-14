import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import NumberFormat from 'react-number-format';

const useStyles = makeStyles((theme) => ({
    root: {
      paddingLeft: '0rem',
      boxShadow: 'none'
    },
    imgContainer: {
      width: '100%',
      // backgroundImage: 'url(' + require('../../../assets/nasi.jpeg')+ ')',
      backgroundImage: `url('${'https://images.unsplash.com/photo-1568241723642-e519f7829da9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'} ')`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '200px',
    },
    textContainer: {
      padding: '1rem',
      marginBottom: '5px',
      backgroundColor: 'white'
    },
    menu: {
      paddingTop: '0',
      fontSize: '14pt',
      fontWeight: 'bold'
    },
    price: {
      paddingTop: '1rem',
      paddingLeft: '1rem',
      fontSize: '16pt',
      fontWeight: 'bold'
      
    },
    description: {
      paddingBottom: '0',
      paddingTop: '0',
      fontSize: '9pt',
      width: '100%'
    },
  }))

function DetailItem(props) {
    const classes = useStyles();
    const detail = Object.keys(props.menu)
      .map(obj => {
        return (
          <Grid container spacing={0} key={props.menu[obj].menu}>
            <Grid item xs={8}>
            <Typography className={classes.menu}>{props.menu[obj].menu}</Typography>
            <Typography className={classes.description}>{props.menu[obj].description}</Typography>
            </Grid>
            <Grid item xs={4}>
            <Typography className={classes.price}>
            <NumberFormat value={props.menu[obj].price} displayType={'text'} thousandSeparator={true} prefix={'Rp '} /></Typography>
            </Grid>
            <Grid item xs={12}>
            
            </Grid>
          </Grid>
          
          )
      })
    
    return (
        <div className={classes.root}>
          <div className={classes.imgContainer}></div>
          <div className={classes.textContainer}>
          {detail}
          </div>
        </div>
    )
}

export default DetailItem
