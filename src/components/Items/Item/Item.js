import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Nasi from '../../../assets/nasi.jpeg';
import NumberFormat from 'react-number-format';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
        fontWeight: 'bold'
    },
    caption: {
        fontSize: '8pt'
    },
    header: {
        fontWeight: 'bold'
    }
}))


export const Item = (props) => {
    const classes = useStyles();
    const menu = useSelector(state => state.item.menu)    
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
                        <Grid item xs={7} className={classes.textContainer}>
                        <Typography variant="subtitle2" className={classes.header} >{devReact[menuKey].menu}</Typography>
                        <Typography variant="caption" className={classes.caption} >{devReact[menuKey].description}</Typography>
                        <Typography variant="subtitle2" className={classes.price} >
                            <NumberFormat value={devReact[menuKey].price} displayType={'text'} thousandSeparator={true} prefix={'Rp '} /></Typography>
                        </Grid>
                    </Grid>   
                    </Link>  
                </div>
            )
        })
    return (
        <div>
            {itemCategory}
        </div>
    )
}
export default (Item)
