import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import NumberFormat from 'react-number-format';

const useStyles = makeStyles((theme) => ({
    root: {
      padding: '0rem'
    },
    imgContainer: {
      width: '100%',
      backgroundImage: `url(${require('../../assets/nasi.jpeg')})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '100px',
    },
    menu: {
      padding: '1rem',
      paddingTop: '0',
      fontSize: '14pt',
      fontWeight: 'bold'
    },
    price: {
      padding: '1rem',
      paddingTop: '0',
      fontSize: '13pt'
    },
    description: {
      padding: '1rem',
      paddingBottom: '0',
      paddingTop: '0',
      fontSize: '10pt',
    },
    hr: {
      width: '90%',
      float: 'center',
      margin: '1rem'
    },
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

function DetailItem(props) {
    const classes = useStyles();
    const id = parseInt(props.id)
    const item = Object.keys(props.menu)
                  .filter(obj => props.menu[obj].id === id)
                .map(obbj => ({
                  "id": props.menu[obbj].id,
                  "menu": props.menu[obbj].menu,
                  "description": props.menu[obbj].description,
                  "price": props.menu[obbj].price
              }))
    console.log(item)
    const listItem = Object.keys( item )
    .map( (catKey) => {
        return (
            <div>
                <hr className={classes.hr}/>
                <Grid container spacing={0}>
                <Grid item xs={8}>
                <Typography className={classes.menu}>{item[catKey].menu}</Typography>
                </Grid>
                <Grid item xs={4}>
                <Typography className={classes.price}>
                <NumberFormat value={item[catKey].price} displayType={'text'} thousandSeparator={true} prefix={'Rp '} /></Typography>
                </Grid>
                <Grid item xs={12}>
                <Typography className={classes.description}>{item[catKey].description}</Typography>
                </Grid>
                </Grid>
                <hr className={classes.hr}/>
            </div>
        )
    })
    return (
        <div>
             {listItem}
        </div>
    )
}

export default DetailItem
