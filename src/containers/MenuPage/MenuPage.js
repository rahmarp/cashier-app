import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router';
import ButtonCart from '../../components/Cart/ButtonCart/ButtonCart';
import Items from '../../components/Items/Items';
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu'
import asyncComponent from '../../hoc/asyncComponent/asyncComponent';
import * as actions from '../../store/actions/index';

const asyncMenuDetails = asyncComponent(() => {
    return import('../ItemDetails/ItemDetails')
  })
class MenuPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             show: this.props.cart.length
        }
    }

    componentDidMount = () => {
        console.log(this.props.cart)
    }

    
    getMenu = (menu) => {
        this.props.onGetMenu(menu)
        this.props.onGetItemAdd(menu)
        this.props.onGetItemLevel(menu)
    }
    getSubTotal(cart) {
        let subTotal = 0
        const total = Object.keys(cart).map(obj => {
            return (
                cart[obj].price
            )
        })
        for (const i in total){
            subTotal += total[i]
        }
        return subTotal
    }
    render() {
        return (
            <div>
                <NavigationMenu
                    items={this.props.categories}/>
                { this.state.show > 0 ? <ButtonCart 
                subTotal={this.getSubTotal(this.props.cart)}
                item={this.state.show} /> : null}
                <Items
                    items={this.props.categories}
                    item={this.getMenu} />
                <Switch>
                {/* <Route path="/menu" component={MenuPage} /> */}
                <Route path="/menu/:id" exact component={asyncMenuDetails} />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.users,
        table: state.user.table,
        categories: state.item.categories,
        menu: state.item.menu,
        cart: state.cart.cart,
        menuItem: state.item.menuItem
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onGetMenu: (menu) => dispatch(actions.getMenu(menu)),
        onGetItemAdd: (menu) => dispatch(actions.getMenuAdd(menu)),
        onGetItemLevel: (menu) => dispatch(actions.getMenuLevel(menu))
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(MenuPage)
