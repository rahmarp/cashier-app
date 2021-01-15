import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import NumberFormat from 'react-number-format'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '1rem'
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
        right: '1rem',
        fontWeight: 'bold'
    },
    caption: {
        fontSize: '8pt'
    },
    header: {
        fontWeight: 'bold'
    }
}))

function ViewCart(props) {
    const classes = useStyles()
    // const name = () => {
    //     let item = []
    //     for (let in props.item){
    //       item =  props.item[i]
    //     }
    // }
    const carts = Object.keys(props.items)
        .map(obj => {
            return (
            <div key={props.items[obj].menu}>
                <Grid container spacing={3} >
                    <Grid item xs={12} className={classes.textContainer}>
                        <Typography variant="subtitle2" className={classes.header} >{props.items[obj].menu}</Typography>
                        {props.level === "" ? "" : <Typography variant="caption" className={classes.caption}>{props.items[obj].level}</Typography>}
                        <Typography variant="caption" className={classes.caption}>x{props.items[obj].qty}</Typography>
                        <Typography variant="subtitle2" className={classes.price}>
                        <NumberFormat value={props.items[obj].price} displayType={'text'} thousandSeparator={true} prefix={'Rp '} />
                        </Typography>
                        <Link to={`/menu/${props.items[obj].menu}`}>
                        <Typography onClick={() => props.getItem(props.items[obj].menu)}>Detail</Typography>
                        </Link>
                        
                    </Grid>                    
                </Grid>
            </div>
            )

        })
    return (
        <div className={classes.root}>
            <Typography variant="h6">Items</Typography>
            <hr/>
            {carts}
        </div>
    )
}

export default ViewCart

