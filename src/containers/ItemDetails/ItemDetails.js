import React, { Component } from 'react'
import { connect } from 'react-redux';
import TabMenu from '../../components/TabMenu/TabMenu';
// import Nasi from '../../assets/nasi.jpeg';
import { Grid } from '@material-ui/core';
import ButtonAdd from '../../components/ButtonAdd/ButtonAdd';
import * as actions from '../../store/actions/index';
import DetailsMenu from '../../components/DetailsMenu/DetailsMenu';
// import InputDetails from '../../components/ItemDetails/InputDetails/InputDetails';
// import CheckboxMenuAdd from '../../components/ItemDetails/Checkbox/CheckboxMenuAdd';
// import RadioButton from '../../components/ItemDetails/RadioButton/RadioButton';


class ItemDetails extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      //qty
      counter: 1,
      added: false,
      note: "",
      //checkbox 
      menuItem: "",
      workDays: [],
      addPrice: 0,
      optionalItem: {},
      //radio
      levelPrice: 0,
      itemLevel: '',
    }
    this.checkboxChangeHandler = this.checkboxChangeHandler.bind(this)
  }

  componentDidMount = () => {
    console.log(this.props.cart)
    const cart = this.props.cart

    //remove object keys 
    let items = {}
    for (let i in this.props.item){
      items = {
        "id" : this.props.item[i].id,
        "menu" : this.props.item[i].menu,
        "description" : this.props.item[i].description,
        "price" : this.props.item[i].price,
        "item" : this.props.item[i].add,
        "level" : this.props.item[i].level
      }
    }

    //get cart
    let countCarts =  this.props.cart.filter(obj => obj.menu === items.menu)
    let countCart = []
    let levelItem = ""

    for (let i in countCarts){
      countCart = countCarts[i].item
      levelItem = countCarts[i].level
    }

    //get menuItem
    let updateMenuItem = {}
    let countItemPrice = 0
    if((this.props.menuAdd).length !== undefined){
      updateMenuItem = (this.props.menuAdd).map(i => {
        return {
          item: i.item,
          itemPrice: i.itemPrice,
          check: countCart.includes(i.item)
        }
      } )      
      //show price of menuItem
      let itemTrue = updateMenuItem.filter(obj => obj.check === true)
      for (let i in itemTrue){
        countItemPrice += parseInt(itemTrue[i].itemPrice)
      }
    }

    //update menuLevel
    let updateMenuLevel = {}
    let countLevelPrice = 0
    if((this.props.menuLevel).length !== undefined){
      updateMenuLevel = (this.props.menuLevel).map(i => {
        return {
          level: i.level,
          levelPrice: i.levelPrice,
          check: levelItem === i.level
        }
      } )      
      //show price of menuItem
      let itemTrue = updateMenuLevel.filter(obj => obj.check === true)
      for (let i in itemTrue){
        countLevelPrice += parseInt(itemTrue[i].levelPrice)
      }
    }
   

    

    console.log(countItemPrice)
    const qty = Object.keys(cart)
      .filter(obj => cart[obj].menu === items.menu)
      .map(obj => {
        return (          
          cart[obj].qty
        )   
    })
    const notes = cart.filter(obj => obj.menu === items.menu)
    let note = ""
    for (let i in notes){
      note = notes[i].note
    }
    console.log(notes)
    const qtyInt = parseInt(qty)
    const menu = Object.keys(cart)
      .map(obj => {
        return (          
          cart[obj].menu
        )   
    })
    var arraycontainsturtles = (menu.indexOf(items.menu) > -1);
    // const menuItem = Object.keys()
    if (arraycontainsturtles === true){
      this.setState({
        added: arraycontainsturtles,
        counter: qtyInt,
        note: note,
      })
    }
    this.setState({
      menuItem: items,
      optionalItem: updateMenuItem,
      workDays: countCart,
      itemLevel: levelItem,
      levelPrice: countLevelPrice,
      addPrice: countItemPrice
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
    let itemTrue = this.props.menuAdd.filter(obj => obj.item === event.target.value)
    for (let i in itemTrue){
      price = itemTrue[i].itemPrice
    } 
    if(st){
      newArray = [...this.state.workDays, event.target.value];
      updateMenuItem = (this.state.optionalItem).map(i => {
        return {
          "item": i.item,
          "itemPrice": i.itemPrice,
          "check": newArray.includes(i.item)
        }
      })                
      addprice += price
    }
    else{
      newArray = this.state.workDays.filter(e => e !== event.target.value)
      updateMenuItem = (this.state.optionalItem).map(i => {
        return {
          "item": i.item,
          "itemPrice": i.itemPrice,
          "check": newArray.includes(i.item)
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
    console.log(addprice)
    
  }

  radioChangeHandler = (event) => {
    let value = event.target.value
    let price = (this.props.menuLevel).filter(obj => obj.level === value)
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
      "menu": this.state.menuItem.menu,
      "qty" : this.state.counter,
      "price" : (this.state.menuItem.price + this.state.addPrice + this.state.levelPrice) * this.state.counter,
      "note" : this.state.note,
      "item": this.state.workDays,
      "level": this.state.itemLevel
    }
    console.log(this.state.note)
    this.props.onAddCart(cart)
    this.props.history.goBack() 
  }

  updateCartHandler = ( event ) => {
    event.preventDefault();
    let cart = {
      "menu": this.state.menuItem.menu,
      "qty" : this.state.counter,
      "price" : (this.state.menuItem.price + this.state.addPrice + this.state.levelPrice)  * this.state.counter,
      "note" : this.state.note,
      "item": this.state.workDays,
      "level": this.state.itemLevel
    }
    console.log(this.state.note)
    this.props.onUpdateCart(cart)
    this.props.history.goBack() 
  }

  deleteCartHandler = (event) => {
    event.preventDefault();
    let cart = this.state.menuItem.menu
    this.props.onDeleteCart(cart)
    this.props.history.goBack()
  }
  
    render(){
      // console.log(this.props.menuAdd)
      return (
        <div>
          <Grid container spacing={0}>
              <TabMenu items={this.state.menuItem.menu}/>

            <Grid item xs={12}>
              <DetailsMenu
                menu={this.props.item}
                menuCheckbox={this.state.optionalItem}
                checkHandler={this.checkboxChangeHandler}
                checkboxCheck={this.checkboxCheck}
                menuRadio={this.props.menuLevel}
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
                menuRadio={this.props.menuLevel}
                disable={this.state.itemLevel}
                label={(this.state.menuItem.price + this.state.addPrice + this.state.levelPrice) * this.state.counter }
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
      onUpdateCart: (menu) => dispatch(actions.updateCart(menu)),
      onDeleteCart: (menu) => dispatch(actions.deleteCart(menu))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails)