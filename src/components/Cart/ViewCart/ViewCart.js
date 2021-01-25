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
        textAlign: 'right',
        fontSize: '10pt'
    },
    header: {
        fontWeight: 'bold'
    },
    line: {
        border: '1px solid #f5f5f5'
    },
    link: {
        textDecoration: 'none',
        color: '#2980b9'
    }
}))

function ViewCart(props) {
    const classes = useStyles()
    const getMenu = (menuId) => {
        let newObject = props.menu.filter(obj => obj.id === menuId)
        let menu = ""
        for (let i in newObject){
            menu = newObject[i].menu
        }
        return menu
    }
    const getItem = (itemIds,menuId) =>{
        let newObject = props.menu.filter(obj => obj.id === menuId)
        let item = []
        for (let i in newObject){
            for(let j in newObject[i].add){
                if(itemIds.includes(newObject[i].add[j].id)){
                    item.push(newObject[i].add[j].item)
                }
            }
        }
        return (
            item.map(obj => {
                return(
                    <Grid item xs={12} key={obj}>
                    <Typography variant="caption" className={classes.caption} gutterBottom>{obj}</Typography>
                    </Grid>
                )
            })
            
            
        )
    }
    const getLevel = (levelId,menuId) => {
        let newObject = props.menu.filter(obj => obj.id === menuId)
        let level = ""
        for (let i in newObject){
            for(let j in newObject[i].level){
                if(levelId === newObject[i].level[j].id){
                    level = newObject[i].level[j].level
                }
            }
        }
        return(
            <Grid item xs={12} key={level} >
                <Typography variant="caption" className={classes.caption} gutterBottom>{level}</Typography>
            </Grid>
        )
    }
    const carts = props.items
        .map(obj => {
            return (
            <div key={obj.id}>
                <Grid container>
                    <Grid item xs={1} className={classes.textContainer}>
                    <Typography variant="subtitle2" className={classes.caption}>{obj.qty}x</Typography>
                    </Grid>
                    <Grid item xs={8} className={classes.textContainer}>
                        <Typography variant="subtitle2" className={classes.header} >{getMenu(obj.menuId)}</Typography>
                        {obj.itemIds.length > 0 ? getItem(obj.itemIds,obj.menuId) : null} 
                        {obj.levelId !== '' ? getLevel(obj.levelId,obj.menuId) : null}
                        <Link to={`/menu/${obj.menuId}`} className={classes.link}>
                        <Typography variant="caption"
                        onClick={() => props.getItem(obj.menuId,true,obj.itemIds,obj.levelId,obj.qty,obj.note)}>Detail</Typography>
                        </Link>
                    </Grid>       
                    <Grid item xs={3} className={classes.textContainer}>  
                        <Typography variant="subtitle2" className={classes.price}>
                        <NumberFormat value={obj.price} displayType={'text'} thousandSeparator={true} />
                        </Typography>
                    </Grid>          
                </Grid>
                
                <hr className={classes.line} />
            </div>
            )

        })
    return (
        <div className={classes.root}>
            {carts}
        </div>
    )
}

export default ViewCart

