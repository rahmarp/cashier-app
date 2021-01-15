import React, { Component } from 'react'
import { connect } from 'react-redux'
import ButtonCart from '../../components/MenuPage/ButtonCart/ButtonCart';
import Items from '../../components/Items/Items';
import NavigationMenu from '../../components/MenuPage/NavigationMenu/NavigationMenu';
import * as actions from '../../store/actions/index';

class MenuPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             show: this.props.cart.length
        }
    }

    componentDidMount = () => {
        //count all qty of carts
        let count = 0
        for (let i in this.props.cart){
            count += this.props.cart[i].qty
        }
        this.setState({
            show: count
        })
        console.log(this.props.cart)
    }

    
    getMenu = (menu) => {
        //get menu by id
        this.props.onGetMenu(menu)
        this.props.onGetItemAdd(menu)
        this.props.onGetItemLevel(menu)
    }
    getSubTotal(cart) {
        //count all prices of carts
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
                { this.state.show > 0 ? 
                    <ButtonCart 
                        subTotal={this.getSubTotal(this.props.cart)}
                        item={this.state.show} /> 
                    : 
                    null}
                <Items
                    items={this.props.categories}
                    item={this.getMenu} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        categories: state.item.categories,
        cart: state.cart.cart,
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
