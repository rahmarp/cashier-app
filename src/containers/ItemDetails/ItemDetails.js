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
      id: this.props.match.params.id,
      counter: 1,
      show: true,
      added: false,
      note: "",
      menuItem: "",
      workDays: [],
      addPrice: 0,
      itemPrices: [],
      levelPrice: 0,
      itemLevel: ''
    }
    this.checkboxChangeHandler = this.checkboxChangeHandler.bind(this)
  }

  componentDidMount = () => {
    const cart = this.props.cart
    if (this.props.menuAdd.length > 0){
      this.setState({
        check: 0
      })
    }
    let items = {}
    for (let i in this.props.item){
      items = {
        "id" : this.props.item[i].id,
        "menu" : this.props.item[i].menu,
        "description" : this.props.item[i].description,
        "price" : this.props.item[i].price,
      }
    }
    const qty = Object.keys(cart)
      .filter(obj => cart[obj].menu === items.menu)
      .map(obj => {
        return (          
          cart[obj].qty
        )   
    })
    const note = Object.keys(cart)
    .filter(obj => cart[obj].menu === items.menu)
    .map(obj => {
      return (          
        cart[obj].note
      )   
    })
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
      menuItem: items
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
    
    let newArray = [...this.state.workDays, event.target.value];
    let addPrice = 0
    
    let prices = (this.props.menuAdd).filter(obj => obj.item === event.target.value)
    let price = ""
    for (let i in prices){
      price = prices[i].itemPrice
    }
    let itemPrice = [...this.state.itemPrices, price]
    if (this.state.workDays.includes(event.target.value)) {
      newArray = newArray.filter(day => day !== event.target.value);
      itemPrice = itemPrice.filter(a => a !== price)
      }
    for (let i in newArray){
      addPrice += parseInt(itemPrice[i])
    }
    this.setState({
    addPrice: addPrice,
    itemPrices: itemPrice,
    workDays: newArray
    });
    console.log(itemPrice)
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
      "price" : (this.state.menuItem.price + this.state.addPrice) * this.state.counter,
      "note" : this.state.note,
      "item": this.state.workDays
    }
    console.log(cart)
    this.props.onAddCart(cart)
    this.props.history.goBack() 
  }

  updateCartHandler = ( event ) => {
    event.preventDefault();
    let cart = {
      "menu": this.state.menuItem.menu,
      "qty" : this.state.counter,
      "price" : this.state.menuItem.price * this.state.counter,
      "note" : this.state.note
    }
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
      return (
        <div>
          <Grid container spacing={0}>
              <TabMenu items={this.state.menuItem.menu}/>

            <Grid item xs={12}>
              <DetailsMenu
                menu={this.props.item}
                menuCheckbox={this.props.menuAdd}
                checkHandler={this.checkboxChangeHandler}
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