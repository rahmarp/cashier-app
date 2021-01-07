import React, { Component } from 'react'
import { connect } from 'react-redux';
import TabMenu from '../../components/TabMenu/TabMenu';
// import Nasi from '../../assets/nasi.jpeg';
import { Button, ButtonGroup, Grid } from '@material-ui/core';
import DetailItem from '../../components/ItemDetails/DetailItem/DetailItem';
import ButtonAdd from '../../components/ItemDetails/ButtonAdd/ButtonAdd';
import * as actions from '../../store/actions/index';
import InputDetails from '../../components/ItemDetails/InputDetails/InputDetails';


class ItemDetails extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      id: this.props.match.params.id,
      counter: 1,
      show: true,
      added: false,
      note: "",
      menuItem: ""
    }
  }

  componentDidMount = () => {
    const cart = this.props.cart
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
      "price" : this.state.menuItem.price * this.state.counter,
      "note" : this.state.note
    }
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
      const disable = this.state.counter > 0
      return (
        <div>
          <Grid container spacing={0}>

            <Grid item xs={12}>
              <TabMenu items={this.state.menuItem.menu}/>
            </Grid>

            <Grid item xs={12}>
              <DetailItem 
                menu={this.props.item} />
            </Grid>

            <Grid item xs={12}>
            <InputDetails 
              details={this.inputChangehandler}
              value={this.state.note} />
            {/* {listItem} */}
            </Grid>

            <Grid item xs={12}>
              <center>
                <ButtonGroup size="large" aria-label="small outlined button group">
                    <Button onClick={this.handleDecrement} disabled={!disable}>-</Button>
                    <Button disabled>{this.state.counter}</Button>
                    <Button onClick={this.handleIncrement}>+</Button>
                </ButtonGroup>
                </center>
            </Grid>
            {/* <ViewCart /> */}
            <Grid item xs={12}>
              <ButtonAdd 
                add={this.inputCartHandler} 
                update={this.updateCartHandler}
                delete={this.deleteCartHandler}
                label={this.state.menuItem.price * this.state.counter}
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