import React, { Component } from 'react'
import { connect } from 'react-redux'
import MediaControlCard from '../../components/NavigationMenu/MediaControlCard';
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu'
import SimpleCard from '../../components/NavigationMenu/SimpleCard';
// import ScrollableTabsButtonAuto from '../../components/NavigationMenu/ScrollableTabsButtonAuto'
import Section from '../../components/NavigationMenu/TextSection'
import dummyText from "./DummyText";

class MenuPage extends Component {
    render() {
        return (
            <div>
                <NavigationMenu/>
                <SimpleCard />
                <Section
                title="Section 1"
                subtitle={dummyText}
                dark={true}
                id="section1"
                />
                <Section
                title="Section 2"
                subtitle={dummyText}
                dark={false}
                id="section2"
                />
                <Section
                title="Section 3"
                subtitle={dummyText}
                dark={true}
                id="section3"
                />
                <Section
                title="Section 4"
                subtitle={dummyText}
                dark={false}
                id="section4"
                />
                <Section
                title="Section 5"
                subtitle={dummyText}
                dark={true}
                id="section5"
                />
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
