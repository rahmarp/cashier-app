import React, { Component } from 'react'
import { connect } from 'react-redux'
import ButtonCart from '../../components/Cart/ButtonCart/ButtonCart'
import Cart from '../../components/Cart/Cart'
import TabMenu from '../../components/TabMenu/TabMenu'
import * as actions from '../../store/actions/index';

class CartPage extends Component {
    getMenu = (menu,cart,itemIds,levelId,qty,note) => {
        //get menu by id
        this.props.onGetMenu(menu,cart,itemIds,levelId,qty,note)
        this.props.onGetItemAdd(menu)
        this.props.onGetItemLevel(menu)
    }
    sendOrder = () => {
        this.props.onSetOrder(this.props.cart)
        this.props.history.push('/order')  
    }
    compareValues = (key, order = 'asc') => {
        return function innerSort(a, b) {
          if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            // property doesn't exist on either object
            return 0;
          }
      
          const varA = (typeof a[key] === 'string')
            ? a[key].toUpperCase() : a[key];
          const varB = (typeof b[key] === 'string')
            ? b[key].toUpperCase() : b[key];
      
          let comparison = 0;
          if (varA > varB) {
            comparison = 1;
          } else if (varA < varB) {
            comparison = -1;
          }
          return (
            (order === 'desc') ? (comparison * -1) : comparison
          );
        };
      }
    render() {
        return (
            <div>
                <TabMenu items="Cart"  back={() => this.props.history.goBack()}/>
                <Cart 
                    user={this.props.user}
                    table={this.props.table}
                    items={this.props.cart.sort(this.compareValues('menuId', 'asc'))}
                    menu={this.props.menu}
                    getItem={this.getMenu} 
                    cart={this.props.cart}
                />
                <ButtonCart
                 click={this.sendOrder}
                 cart={this.props.cart}
                 user={this.props.user} />
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.users,
        table: state.user.table,
        menu: state.item.menu,
        item: state.item.menuItem,
        cart: state.cart.cart
    }
  }
  const mapDispatchToProps = dispatch => {
    return{
        onGetMenu: (menu,cart,itemIds,levelId,qty,note) => dispatch(actions.getMenu(menu,cart,itemIds,levelId,qty,note)),
        onGetItemAdd: (menu) => dispatch(actions.getMenuAdd(menu)),
        onGetItemLevel: (menu) => dispatch(actions.getMenuLevel(menu)),
        onSetOrder: (cart) => dispatch(actions.setOrder(cart))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartPage)
