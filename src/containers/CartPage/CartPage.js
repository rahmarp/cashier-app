import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from '../../components/Cart/User/User'
import ViewCart from '../../components/Cart/ViewCart/ViewCart'
import TabMenu from '../../components/TabMenu/TabMenu'
import * as actions from '../../store/actions/index';

class CartPage extends Component {
    getMenu = (menu) => {
        this.props.onGetMenu(menu)
    }
    render() {
        return (
            <div>
                <TabMenu items="Cart"/>
                <User 
                    user={this.props.user}
                    table={this.props.table} />
                <ViewCart 
                    items={this.props.cart}
                    menu={this.props.menu}
                    getItem={this.getMenu} />
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
        onGetMenu: (menu) => dispatch(actions.getMenu(menu))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartPage)
