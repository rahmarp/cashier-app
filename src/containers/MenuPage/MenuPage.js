import React, { Component } from 'react'
import { connect } from 'react-redux'
import Items from '../../components/Items/Items';
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu'

class MenuPage extends Component {
    render() {
        return (
            <div>
                <NavigationMenu/>
                <Items />
                welcome to menu page!!
                <p>Your name: {this.props.user}</p>
                <p>Your name: {this.props.table}</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.users,
        table: state.user.table
    }
}

export default connect( mapStateToProps )(MenuPage)
