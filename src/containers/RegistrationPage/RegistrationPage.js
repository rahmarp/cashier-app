import { Container, CssBaseline} from '@material-ui/core';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import * as actions from '../../store/actions/index'


class RegistrationPage extends Component {
    constructor() {
        super()  
        this.state = { 
          name: '',
          table: ''
         }
    
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      }
      handleChange = (event, field) => {
          this.setState({
            [field]: event.target.value
          })
      }
      handleSubmit = ( event ) => {
          event.preventDefault();
          const user = this.state.name
          const table= this.state.table
          this.props.onAddUser(user, table)
      }

    
    render() {    
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <RegistrationForm 
                onChanged={this.handleChange}
                onSubmited={this.handleSubmit}/>
            </Container>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddUser: (user,table) => dispatch(actions.addUser(user,table))
    }
}

export default (connect(null, mapDispatchToProps)(RegistrationPage))
