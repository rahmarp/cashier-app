import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import data from '../../../data.json';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2rem'
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
                    <Typography variant="h6" >{devReact[menuKey].menu}</Typography>
                    <Typography variant="body2" >{devReact[menuKey].description}</Typography>
                    <Typography variant="h6" >{devReact[menuKey].price}</Typography>
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
