import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router';
import Items from '../../components/Items/Items';
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu'
import asyncComponent from '../../hoc/asyncComponent/asyncComponent';
import * as actions from '../../store/actions/index';
import data from '../../data.json'

const asyncMenuDetails = asyncComponent(() => {
    return import('../ItemDetails/ItemDetails')
  })

class MenuPage extends Component {
    render() {
        return (
            <div>
                <NavigationMenu
                    items={this.props.categories}/>
                <Items
                    items={this.props.categories} />
                welcome to menu page!!
                <p>Your name: {this.props.user}</p>
                <p>Your name: {this.props.table}</p>
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
        menu: state.item.menu
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onInitCategories: (categories) => dispatch(actions.setCategories(categories)),
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(MenuPage)
