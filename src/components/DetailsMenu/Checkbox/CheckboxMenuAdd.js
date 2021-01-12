import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '1rem',
        marginBottom: '5px',
        backgroundColor: 'white',
        boxShadow: 'none'
    },
    list: {
        listStyleType: 'none'
    },
    item: {
        paddingLeft: '1rem'
    },
    label: {
        margin: '10px',
        color: 'black'
    }
}))

function CheckboxMenuAdd(props) {
    const classes = useStyles()
    const checkbox = (props.menuAdd)
        .map(obj => {
            return (
                <FormControlLabel key={obj.item}
                control={<Checkbox name="gilad" value={obj.item} onChange={(e) => props.checkHandler(e)}/>}
                label={obj.item}
            />
            )
        }
            
        )
    return (
        <div className={classes.root}>            
            <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend" className={classes.label}>Add Optional</FormLabel>
            <FormGroup>
            {checkbox}
            </FormGroup>
        </FormControl>
        </div>
    )
}

export default CheckboxMenuAdd
