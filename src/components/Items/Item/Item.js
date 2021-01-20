import { Dialog, DialogActions, DialogContent, DialogTitle, Grid, makeStyles, Slide, Typography, Button} from '@material-ui/core';
import React from 'react';
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
    },
    dialogHeader: {
        fontSize: '10pt',
        fontWeight: 'bold',
        paddingRight: '2rem'
    },
    dialogPrice: {
        fontSize: '10pt',
        fontWeight: 'bold',
    },
    menuOptional: {
        fontSize: '10pt',
        paddingRight: '10px'
    },
    priceOptional: {
        fontSize: '10pt',
        paddingLeft: '10px'
    },
    items: {
        paddingTop: '10px'
    },
    buttonConfirm: {
        width: '100%'
    }
}))

//Transition 'Up' for Confirm Dialog
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  

export const Item = (props) => {
    const classes = useStyles();
    const menu = useSelector(state => state.item.menu)
    const cart = useSelector(state => state.cart.cart)
    
    //set open/close confirm dialog
    const [open, setOpen] = React.useState(false)
    const [menuId, setMenuId] = React.useState("")
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleMenuId = (menuId) => {
        setMenuId(menuId);
    };
    const handleClose = () => {
        setOpen(false);
    };


    //count menu in cart
    const countCart = (menus) => {   
       let countCarts =  cart.filter(obj => obj.menuId === menus)     
       let countCart = 0
       for (let i in countCarts){
           countCart += countCarts[i].qty
       }
       return countCart
    }

    //new order or make another
    const clickShow = (menus) => {
        let countCarts =  cart.filter(obj => obj.menuId === menus)
        let i = countCarts.length > 0
        return i
    }

    const hasMenuItem = (menus) =>{
        let hasMenuOptional = false
        let hasMenuLevel = false
        const devReact = menu.filter(obj => obj.id === (menus))
        for (let i in devReact){
            hasMenuOptional = devReact[i].add !== undefined  &&  (devReact[i].add).length > 0
            hasMenuLevel = devReact[i].level !== undefined  &&  (devReact[i].level).length > 0
        }
        return (hasMenuOptional || hasMenuLevel)
    }
    //get menu group by categories
    const devReact = Object.keys(menu).filter(obj => menu[obj].categoryId === (props.categories))
        .map(obj => ({
            "id": menu[obj].id,
            "menu":menu[obj].menu,
            "description": menu[obj].description,
            "image": menu[obj].image,
            "price": menu[obj].price
        }))

    //get item and level
    const getItem = (menuu,item,level) => {
        const menus = menu.filter(obj => obj.id === menuu)
        let optionalItem = []
        for(let i in menus){
            for(let j in menus[i].add){
                if(item.includes(menus[i].add[j].id)){
                    optionalItem.push(menus[i].add[j].item)
                }
            }
            for(let k in menus[i].level){
                if(level === menus[i].level[k].id)
                    optionalItem.push(menus[i].level[k].level)
            }
        }
        return optionalItem.join(", ")
    }
    
    const cartItem = (menus) =>{
        const cartI = cart.filter(obj => obj.menuId === menus)
        const cartII = cartI.map(menuKey => {
            return(
                <div key={menuKey.id} id={menuKey.id} className={classes.items} >
                    <Link to={`/menu/${menuKey.menuId}`}>
                    <Grid container spacing={3} onClick={() => props.getItem(menuKey.menuId,clickShow(menuKey.menuId),menuKey.itemIds,menuKey.levelId,menuKey.qty, menuKey.note)}>
                    <Grid item xs={1}>
                    <span className={classes.menuOptional}>{menuKey.qty}x</span>
                    </Grid>
                    <Grid item xs={8}>
                    <span className={classes.menuOptional}>{getItem(menuId, menuKey.itemIds, menuKey.levelId)}</span>
                    </Grid>
                    <Grid item xs={3}>
                    <span className={classes.priceOptional}>{menuKey.price}</span>
                    </Grid>
                    </Grid>
                    </Link>
                </div>
            )
        })
        return cartII
    }
    
    const confirmDialog = devReact.filter(obj => obj.id === (menuId))
        .map((menuKey, index) => {
            return(
                <div key={menuKey.id} id={menuKey.id} className={classes.root}>
                <DialogTitle id="alert-dialog-slide-title">
                    <span className={classes.dialogHeader}>{menuKey.menu}</span>
                    <span className={classes.dialogPrice}><NumberFormat value={menuKey.price} displayType={'text'} thousandSeparator={true}/></span>
                </DialogTitle>

                <DialogContent>
                
                {cartItem(menuKey.id)}
                </DialogContent>
                <DialogActions>
                <Link to={`/menu/${menuKey.id}`}>
                <Button className={classes.buttonConfirm} variant="contained" 
                    onClick={() => props.getItem(menuKey.id,false,null,null)} color="primary">
                    Make Another
                </Button>
                </Link>
                </DialogActions>
                </div>
            )
        })

    const getQty = (menus) =>{
        let countCarts =  cart.filter(obj => obj.menuId === menus) 
        let countCart = 0
        for (let i in countCarts){
           countCart = countCarts[i].qty
        }
        console.log("get qty")
        console.log(countCart)
       return countCart
    } 

    const getNote = (menus) =>{
        let countCarts =  cart.filter(obj => obj.menuId === menus) 
        let countCart = 0
        for (let i in countCarts){
           countCart = countCarts[i].note
        }
        console.log("get Note")
        console.log(countCart)
       return countCart
    } 
    
    
    const itemCategory = Object.keys(devReact)
        .map( (menuKey, index) => {
            return (
                // console.log(devReact[menuKey].image)
                <div key={devReact[menuKey].id} id={devReact[menuKey].id} className={classes.root}>
                    {
                    // new order or make another
                    clickShow(devReact[menuKey].id) ? 
                    [
                       (
                           //show confirm dialog if has item optional
                           hasMenuItem(devReact[menuKey].id) ? 
                           <div key={devReact[menuKey].id} id={devReact[menuKey].id} className={classes.root}> 
                            <Grid container spacing={3} onClick={() => {
                                handleClickOpen();
                                handleMenuId(devReact[menuKey].id);
                            }}>
                            <Grid item xs={4}>
                            <img src={devReact[menuKey].image} alt={devReact[menuKey].menu} className={classes.img}/>
                            </Grid>
                            
                            <Grid item xs={7} className={classes.textContainer}>
                            <Typography variant="subtitle2" className={classes.header} >{devReact[menuKey].menu}</Typography>
                            <Typography variant="caption" className={classes.caption} >{devReact[menuKey].description}</Typography>
                            <Typography variant="subtitle2" className={classes.header} >{countCart(devReact[menuKey].id) === 0 ? "" : countCart(devReact[menuKey].id) + "x " }</Typography>
                            <Typography variant="subtitle2" className={classes.price} >
                                <NumberFormat value={devReact[menuKey].price} displayType={'text'} thousandSeparator={true}/>
                            </Typography>
                            </Grid>
                            </Grid> 
                            </div>
                        : 
                            <div key={devReact[menuKey].id} id={devReact[menuKey].id} className={classes.root}> 
                            <Link to={`/menu/${devReact[menuKey].id}`}>
                            <Grid container spacing={3} onClick={() => props.getItem(devReact[menuKey].id,clickShow(devReact[menuKey].id),null,null,getQty(devReact[menuKey].id), getNote(devReact[menuKey].id))}>
                                <Grid item xs={4}>
                                <img src={devReact[menuKey].image} alt={devReact[menuKey].menu} className={classes.img}/>
                                </Grid>
                                <Grid item xs={7} className={classes.textContainer}>
                                <Typography variant="subtitle2" className={classes.header} >{devReact[menuKey].menu}</Typography>
                                <Typography variant="caption" className={classes.caption} >{devReact[menuKey].description}</Typography>
                                <Typography variant="subtitle2" className={classes.header} >{countCart(devReact[menuKey].id) === 0 ? "" : countCart(devReact[menuKey].id) + "x " }</Typography>
                                <Typography variant="subtitle2" className={classes.price} >
                                    <NumberFormat value={devReact[menuKey].price} displayType={'text'} thousandSeparator={true}/>
                                </Typography>
                                </Grid>
                            </Grid>   
                            </Link>
                            </div>
                        ) 
                    ]
                      : 
                      <div key={devReact[menuKey].id} id={devReact[menuKey].id} className={classes.root}> 
                     <Link to={`/menu/${devReact[menuKey].id}`}>
                      <Grid container spacing={3} onClick={() => props.getItem(devReact[menuKey].id,clickShow(devReact[menuKey].id),null,null)}>
                          <Grid item xs={4}>
                          <img src={devReact[menuKey].image} alt={devReact[menuKey].menu} className={classes.img}/>
                          </Grid>
                          <Grid item xs={7} className={classes.textContainer}>
                          <Typography variant="subtitle2" className={classes.header} >{devReact[menuKey].menu}</Typography>
                          <Typography variant="caption" className={classes.caption} >{devReact[menuKey].description}</Typography>
                          <Typography variant="subtitle2" className={classes.header} >{countCart(devReact[menuKey].id) === 0 ? "" : countCart(devReact[menuKey].id) + "x " }</Typography>
                          <Typography variant="subtitle2" className={classes.price} >
                              <NumberFormat value={devReact[menuKey].price} displayType={'text'} thousandSeparator={true}/>
                          </Typography>
                          </Grid>
                      </Grid>   
                      </Link>
                      </div>
                      }
                </div>
            )
        })
    return (
        <div>
            {itemCategory}
            <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
            >
            
            {confirmDialog}
            
        </Dialog>
        </div>
    )
}
export default (Item)
