import React, { Component } from 'react'
import { connect } from 'react-redux';
import TabMenu from '../../components/TabMenu/TabMenu';
// import Nasi from '../../assets/nasi.jpeg';
import { Button, Grid, TextField } from '@material-ui/core';
import DetailItem from '../../components/DetailItem/DetailItem';


class ItemDetails extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      id: this.props.match.params.id,
      clicks: 0,
      show: true
    }
  }

  IncrementItem =() => {
    this.setState({ clicks: this.state.clicks + 1})
  }
  DecrementItem = () => {
    this.setState({ clicks: this.state.clicks - 1})
  }
  
    render(){
      return (
        <div>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <TabMenu items={this.props.menu} id={this.state.id}/>
            </Grid>
            {/* <Grid item xs={12} className={classes.imgContainer}>
            </Grid> */}
            <Grid item xs={12}>
              <DetailItem id={this.state.id} menu={this.props.menu} />
            {/* {listItem} */}
            </Grid>
            <Button onClick={this.IncrementItem}>+</Button>
            <TextField value={this.state.clicks} type="number" InputProps={{ inputProps: { min: 0, max: 10 } }} />
            <Button onClick={this.DecrementItem}>-</Button>
          </Grid>
          {/* <Grid item xs={12} className={classes.buttonContainer}>
          <Button variant="contained" color="primary" className={classes.button}>
            Add
          </Button>
          </Grid> */}
        </div>
    )
    }
}

const mapStateToProps = state => {
  return {
    menu: state.item.menu
  }
}
export default connect(mapStateToProps)(ItemDetails)