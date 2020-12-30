import React from 'react'
import { useSelector } from 'react-redux';
import TabMenu from '../../components/TabMenu/TabMenu';
import Nasi from '../../assets/nasi.jpeg';
import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
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

const ItemDetails = (props) => {
  const classes = useStyles();
    const id = parseInt(props.match.params.id)
    const menu = useSelector(state => state.item.menu)
    
    const item = Object.keys(menu).filter(obj => menu[obj].id === id)
                .map(obj => ({
                  "id": menu[obj].id,
                  "menu":menu[obj].menu,
                  "description": menu[obj].description,
                  "price": menu[obj].price
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
                
    // console.log(detail)
    return (
        <div>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <TabMenu items={item}/>
            </Grid>
            <Grid item xs={12} className={classes.imgContainer}>
            </Grid>
            <Grid item xs={12}>
            {listItem}
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.buttonContainer}>
          <Button variant="contained" color="primary" className={classes.button}>
            Add
          </Button>
          </Grid>
        </div>
    )
}
export default ItemDetails