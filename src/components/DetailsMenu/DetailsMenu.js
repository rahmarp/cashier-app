import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import CheckboxMenuAdd from './Checkbox/CheckboxMenuAdd';
import Counter from './Counter/Counter';
import DetailItem from './DetailItem/DetailItem';
import InputDetails from './InputDetails/InputDetails';
import RadioButton from './RadioButton/RadioButton';

const useStyles = makeStyles((theme) => ({
    root: {
        overflowY: 'scroll',
        marginBottom: '100px',
        boxShadow: 'none',
        backgroundColor: '#f5f5f5'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function DetailsMenu(props) {
    const classes = useStyles();
    let menu = props.menu.menu
    let length = 0
    if(props.menuRadio === undefined || props.menuRadio === {}){
        length = 0
    }
    else{
        length = props.menuRadio.length
    }
    return (        
        <div className={classes.root}>
            <Grid item xs={12}>
                  <DetailItem menu={props.menu}/>
            </Grid>

            {props.menuCheckbox.length > 0 ? 
            <Grid item xs={12}>
                  <CheckboxMenuAdd 
                    menuAdd={props.menuCheckbox}
                    checkHandler={props.checkHandler}
                    menu={menu}
                    />
            </Grid>
            : null
            }
            {length !== 0 && length !== undefined ?
            <Grid item xs={12}>
                    <RadioButton 
                        menuLevel={props.menuRadio}
                        radioHandler={props.radioHandler}
                        value={props.valueRadio}/>
            </Grid>
            : null
            }

            <Grid item xs={12}>
                    <InputDetails 
                        details={props.details}
                        value={props.valueNote}/>
            </Grid>

            <Grid item xs={12}>
                    <Counter 
                        increment={props.increment}
                        counters={props.counter}
                        decrement={props.decrement} />
            </Grid>
            
        </div>
    )
}

export default DetailsMenu

