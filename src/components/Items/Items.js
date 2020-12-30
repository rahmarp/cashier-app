import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import Item from './Item/Item';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '1rem'
    },
    header: {
        paddingBottom: '1rem'
    }
}))

export default function Items(props) {
    const classes = useStyles();
    const itemCategory = Object.keys(props.items)
        .map( (catKey, index) => {
            return (
                <div key={index} id={props.items[catKey].title} className={classes.root}>
                    <Typography variant="h6" className={classes.header} >{props.items[catKey].title}</Typography>
                    <Item categories={props.items[catKey].id}></Item>
                </div>
            )
        })
    return (
        <div>
            {itemCategory}
        </div>
    )
}


