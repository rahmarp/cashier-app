import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import data from '../../data.json';
import Item from './Item/Item';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2rem'
    }
}))

export default function Items() {
    const classes = useStyles();
    const itemCategory = Object.keys(data.categories)
        .map( (catKey, index) => {
            return (
                <div key={index} id={data.categories[catKey].title} className={classes.root}>
                    <Typography variant="h6" >{data.categories[catKey].title}</Typography>
                    <Item categories={data.categories[catKey].id}></Item>
                </div>
            )
        })
    return (
        <div>
            {itemCategory}
        </div>
    )
}


