import React, { Component } from 'react'
import { connect } from 'react-redux';
import TabMenu from '../../components/TabMenu/TabMenu';
// import Nasi from '../../assets/nasi.jpeg';
import { Grid } from '@material-ui/core';
import ButtonAdd from '../../components/DetailsMenu/ButtonAdd/ButtonAdd';
import * as actions from '../../store/actions/index';
import DetailsMenu from '../../components/DetailsMenu/DetailsMenu';


class ItemDetails extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      //qty
      counter: this.props.item.qty,
      added: this.props.item.cart,
      note: this.props.item.note,
      //checkbox 
      menuItem: "",
      workDays: [],
      addPrice: 0,
      optionalItem: {},
      //radio
      levelPrice: 0,
      itemLevel: '',
      cartId: ''
    }
    this.checkboxChangeHandler = this.checkboxChangeHandler.bind(this)
  }

  componentDidMount = () => {
    

    //get menuItem
    let countItemPrice = 0
    let itemIds = []
    if((this.props.item.item).length !== undefined){    
      //show price of menuItem
      let itemTrue = this.props.item.item.filter(obj => obj.check === true)
      for (let i in itemTrue){
        countItemPrice += parseInt(itemTrue[i].itemPrice)
        itemIds.push(itemTrue[i].id)
      }
    }


    //update menuLevel
    let countLevelPrice = 0
    let levelItem = ''
    if((this.props.item.level).length !== undefined){  
      //show price of menuLevel
      let itemTrue = this.props.item.level.filter(obj => obj.check === true)
      for (let i in itemTrue){
        countLevelPrice += parseInt(itemTrue[i].levelPrice)
        levelItem = itemTrue[i].id
      }
    }
    let carts = {}
    let cartId = ''    
    let key = ""
    if(this.props.cart.length > 0){
      carts = this.props.cart.filter(obj => obj.menuId === this.props.item.id)
      console.log(carts)
      if(carts.length > 0){
        //getKey
        let itemID = (itemIds).join('-')        
        if(itemIds.length > 0){
            if(levelItem !== ''){
                key = this.props.item.id + '-' + itemID + '-' + levelItem
            }
            else{
                key = this.props.item.id + '-' + itemID
            }
        }
        else {
            if(levelItem !== ''){
                key = this.props.item.id + '-' + levelItem
            }
            else{
                key = this.props.item.id
            }
        }
        carts = carts.filter(obj => obj.key === key)
        if(carts.length > 1){
          carts = carts.filter(obj => obj.note === this.props.item.note)
        }


      }

      for(let i in carts){
        cartId = carts[i].id
      }
      
    }
      console.log(carts)
      console.log(key)

    
    this.setState({
      menuItem: this.props.item,
      optionalItem: this.props.item.item,
      workDays: itemIds,
      itemLevel: levelItem,
      levelPrice: countLevelPrice,
      addPrice: countItemPrice,
      cartId: cartId
    })
  }

  handleIncrement =() => {
    this.setState({ 
      counter: this.state.counter + 1,
      })
      
  }
  handleDecrement = () => {
    this.setState({ counter: this.state.counter - 1})
  }

  checkboxChangeHandler = (event) => {
    let st = event.target.checked
    let newArray = []
    let priceArray = []
    let updateMenuItem = {}
    let addprice = this.state.addPrice
    let price = 0
    let itemTrue = this.props.item.item.filter(obj => obj.id === parseInt(event.target.value))
    for (let i in itemTrue){
      price = itemTrue[i].itemPrice
    } 
    if(st){
      newArray = [...this.state.workDays, parseInt(event.target.value)];
      updateMenuItem = (this.state.optionalItem).map(i => {
        return {
          "id": i.id,
          "item": i.item,
          "itemPrice": i.itemPrice,
          "check": newArray.includes(i.id)
        }
      })                
      addprice += price
    }
    else{
      newArray = this.state.workDays.filter(e => e !== parseInt(event.target.value))
      updateMenuItem = (this.state.optionalItem).map(i => {
        return {
          "id": i.id,
          "item": i.item,
          "itemPrice": i.itemPrice,
          "check": newArray.includes(i.id)
        }
      })
      addprice -= price

    }

    this.setState({
      addPrice: addprice,
      itemPrices: priceArray,
      workDays: newArray,
      optionalItem: updateMenuItem
    });
    
  }

  radioChangeHandler = (event) => {
    let value = parseInt(event.target.value)
    let price = (this.props.menuLevel).filter(obj => obj.id === value)
    for ( let i in price){
      this.setState({
        levelPrice: parseInt(price[i].levelPrice)
      })
    }
    this.setState({
      itemLevel: value
    })
  }

  inputChangehandler = ( event ) => {
    this.setState({
      note: event.target.value
    })
  }

  inputCartHandler = ( event ) => {
    event.preventDefault();
    let cart = {
      "menuId": this.state.menuItem.id,
      "qty" : this.state.counter,
      "price" : (this.props.item.price + this.state.addPrice + this.state.levelPrice) * this.state.counter,
      "note" : this.state.note,
      "itemIds": this.state.workDays.sort(),
      "levelId": this.state.itemLevel
    }
    // console.log(this.state.menuItem)
    this.props.onAddCart(cart)
    this.props.history.goBack() 
  }
  updateCartHandler = ( event ) => {
    event.preventDefault();
    
    let cart = {
      "menuId": this.state.menuItem.id,
      "qty" : this.state.counter,
      "price" : (this.state.menuItem.price + this.state.addPrice + this.state.levelPrice)  * this.state.counter,
      "note" : this.state.note,
      "itemIds": this.state.workDays.sort(),
      "levelId": this.state.itemLevel,
      // "previousKey": this.getKey(this.state.menuItem.id)
    }
    let cartId = this.state.cartId
    this.props.onUpdateCart(cart,cartId)
    this.props.history.goBack() 
  }

  deleteCartHandler = (event) => {
    event.preventDefault();
    let cart = this.state.cartId
    this.props.onDeleteCart(cart)
    this.props.history.goBack()
  }
  
    render(){
      return (
        <div>
          <Grid container spacing={0}>
              <TabMenu 
              items={this.props.item.menu}
              back={() => this.props.history.goBack()}/>

            <Grid item xs={12}>
              <DetailsMenu
                menu={this.props.item}
                menuCheckbox={this.state.optionalItem}
                checkHandler={this.checkboxChangeHandler}
                menuRadio={this.props.item.level}
                valueRadio={this.state.itemLevel}
                radioHandler={this.radioChangeHandler}
                details={this.inputChangehandler}
                valueNote={this.state.note}
                increment={this.handleIncrement}
                decrement={this.handleDecrement}
                counter={this.state.counter}/>
            </Grid>
            <Grid item xs={12}>
              <ButtonAdd 
                add={this.inputCartHandler} 
                update={this.updateCartHandler}
                delete={this.deleteCartHandler}
                menuRadio={this.props.item.level}
                disable={this.state.itemLevel}
                label={(this.props.item.price + this.state.addPrice + this.state.levelPrice) * this.state.counter }
                count={this.state.counter}
                added={this.state.added}/>
            </Grid>
          </Grid>
        </div>
    )
    }
}

const mapStateToProps = state => {
  return {
    menu: state.item.menu,
    item: state.item.menuItem,
    menuAdd: state.item.menuAdd,
    menuLevel: state.item.menuLevel,
    cart: state.cart.cart
  }
}

const mapDispatchToProps = dispatch => {
  return{
      onAddCart: (menu) => dispatch(actions.addCart(menu)),
      onUpdateCart: (menu,cartId) => dispatch(actions.updateCart(menu,cartId)),
      onDeleteCart: (menu) => dispatch(actions.deleteCart(menu))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails)