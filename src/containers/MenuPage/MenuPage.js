import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScrollableTabsButtonAuto from '../../components/NavigationMenu/ScrollableTabsButtonAuto'

class MenuPage extends Component {
    render() {
        return (
            <div>
                <ScrollableTabsButtonAuto/>
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
