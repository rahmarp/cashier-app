import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import data from '../../../data.json';
import Nasi from '../../../assets/nasi.jpeg';
import NumberFormat from 'react-number-format';

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
        right: '0'
    },
    caption: {
        fontSize: '8pt'
    }
}))


export default function Item(props) {
    const classes = useStyles();
    const devReact = data.menu.filter(obj => obj.category === (props.categories))
        .map(obj => ({
            "menu": obj.menu,
            "description": obj.description,
            "price": obj.price
        }))
    const itemCategory = Object.keys(devReact)
        .map( (menuKey, index) => {
            return (
                <div key={index} id={devReact[menuKey].menu} className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                        <img src={Nasi} className={classes.img}/>
                        </Grid>
                        <Grid item xs={7} className={classes.textContainer}>
                        <Typography variant="subtitle2" >{devReact[menuKey].menu}</Typography>
                        <Typography variant="caption" className={classes.caption} >{devReact[menuKey].description}</Typography>
                        <Typography variant="subtitle2" className={classes.price} >
                            <NumberFormat value={devReact[menuKey].price} displayType={'text'} thousandSeparator={true} prefix={'Rp '} /></Typography>
                        </Grid>
                    </Grid>     
                </div>
            )
        })
    return (
        <div>
            {itemCategory}
           {/* { props.categories } */}
        </div>
    )
}
