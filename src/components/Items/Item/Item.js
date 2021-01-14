import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Nasi from '../../../assets/menu.jfif';
import NumberFormat from 'react-number-format';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ConfirmDialog from '../ConfirmDialog/ConfirmDialog';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '0rem'
    },
    imgContainer: {
        width:'30%'
    },
    img: {
        width: '100%', 
        height: 'auto'
    },
    textContainer: {
        position:'relative',
        float: 'left'
    },
    price: {
        position:'absolute',
        bottom:'1rem',
        right: '0',
        fontWeight: 'bold',
        color: 'black'
    },
    caption: {
        fontSize: '7pt',
        color: '#636e72'
    },
    header: {
        fontWeight: 'bold',
        color: 'black'
    }
}))


export const Item = (props) => {
    const classes = useStyles();
    const menu = useSelector(state => state.item.menu)
    const cart = useSelector(state => state.cart.cart)    
    const countCart = (menus) => {
       let countCarts =  cart.filter(obj => obj.menu === menus)
       let countCart = 0
       for (let i in countCarts){
           countCart += countCarts[i].qty
       }
       return countCart
    }
    const devReact = Object.keys(menu).filter(obj => menu[obj].categoryId === (props.categories))
        .map(obj => ({
            "id": menu[obj].id,
            "menu":menu[obj].menu,
            "description": menu[obj].description,
            "price": menu[obj].price
        }))
    const itemCategory = Object.keys(devReact)
        .map( (menuKey, index) => {
            return (
                <div key={index} id={devReact[menuKey].menu} className={classes.root}>
                    <Link to={`/menu/${devReact[menuKey].menu}`}>
                    <Grid container spacing={3} onClick={() => props.getItem(devReact[menuKey].menu)}>
                        <Grid item xs={4}>
                        <img src={Nasi} alt={devReact[menuKey].menu} className={classes.img}/>
                        </Grid>
                        {/* <Typography variant="subtitle2" className={classes.header} ></Typography> */}
                        <Grid item xs={7} className={classes.textContainer}>
                        <Typography variant="subtitle2" className={classes.header} >{devReact[menuKey].menu}</Typography>
                        <Typography variant="caption" className={classes.caption} >{devReact[menuKey].description}</Typography>
                        <Typography variant="subtitle2" className={classes.header} >{countCart(devReact[menuKey].menu) === 0 ? "" : countCart(devReact[menuKey].menu) + "x " }</Typography>
                        <Typography variant="subtitle2" className={classes.price} >
                            <NumberFormat value={devReact[menuKey].price} displayType={'text'} thousandSeparator={true}/>
                        </Typography>
                        </Grid>
                    </Grid>   
                    </Link>  
                </div>
            )
        })
    return (
        <div>
            {itemCategory}
            {/* <ConfirmDialog /> */}
        </div>
    )
}
export default (Item)
