import { Grid, makeStyles, Paper } from '@material-ui/core'
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
        boxShadow: 'none'
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
                <Paper>
                  <DetailItem menu={props.menu}/>
                </Paper>
            </Grid>

            {props.menuCheckbox.length > 0 ? 
            <Grid item xs={12}>
                <Paper>
                  <CheckboxMenuAdd 
                    menuAdd={props.menuCheckbox}
                    checkHandler={props.checkHandler}
                    menu={menu}
                    />
                </Paper>
            </Grid>
            : null
            }
            {length !== 0 && length !== undefined ?
            <Grid item xs={12}>
                <Paper>
                    <RadioButton 
                        menuLevel={props.menuRadio}
                        radioHandler={props.radioHandler}
                        value={props.valueRadio}/>
                </Paper>
            </Grid>
            : null
            }

            <Grid item xs={12}>
                <Paper>
                    <InputDetails 
                        details={props.details}
                        value={props.valueNote}/>
                </Paper>
            </Grid>

            <Grid item xs={12}>
                <Paper>
                    <Counter 
                        increment={props.increment}
                        counters={props.counter}
                        decrement={props.decrement} />
                </Paper>
            </Grid>
            
        </div>
    )
}

export default DetailsMenu

