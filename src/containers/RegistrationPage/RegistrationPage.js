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
          table: 8,
          errorName: ''
          
         }
    
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      }
      handleChange = (event, field) => {
          event.preventDefault();
          this.setState({
            [field]: event.target.value
          })
          console.log(this.state.table)
      }
      validationForm = (errors) => {
        let valid = false;
        if (errors){
            valid = true;
        }
        else {
            valid=false
        }
        return valid
    }
      handleSubmit = ( event ) => {
          event.preventDefault();
          let user = this.state.name;
          let error = this.state.errorName;
          if (user.length <= 0) {
            error = "Please Enter Name!"
          }
          else {
              error = ""
          }
          this.setState({
            errorName: error,
          })
          console.log(user)
          if(this.validationForm(error)){
            this.props.history.push('/')
          }
          else {
            const user = this.state.name
            const table= this.state.table
            this.props.onAddUser(user, table)
            this.props.history.push('/menu')
          }

      }

    
    render() {    
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <RegistrationForm 
                onChanged={this.handleChange}
                onSubmited={this.handleSubmit}
                error={this.state.errorName}
                tableValue={this.state.table}/>
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
