import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import data from '../../data.json';
import Item from './Item/Item';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '1rem'
    },
    header: {
        paddingBottom: '1rem'
    }
}))

export default function Items() {
    const classes = useStyles();
    const itemCategory = Object.keys(data.categories)
        .map( (catKey, index) => {
            return (
                <div key={index} id={data.categories[catKey].title} className={classes.root}>
                    <Typography variant="h6" className={classes.header} >{data.categories[catKey].title}</Typography>
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


