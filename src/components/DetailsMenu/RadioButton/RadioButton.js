import { FormControl, FormControlLabel, FormLabel, makeStyles, Radio, RadioGroup } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '1rem',
        marginBottom: '5px',
        backgroundColor: 'white'
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
    },
    price: {
        position: 'absolute',
        right: 0
    },
    labelheader: {
        width: '39vh'
    }
}))

function RadioButton(props) {
    const classes = useStyles()
    const label = (menu, harga) => {
        return (
            <div className={classes.labelheader}>
                <span>{menu}</span>
                <span className={classes.price}>{harga === 0 ? "Gratis" : "+" + harga}</span>
            </div>
        )
    }
    return (
        <div className={classes.root}>
            <FormControl component="fieldset">
            <FormLabel component="legend" className={classes.label}>Level</FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value={props.value} onChange={(e) => props.radioHandler(e)} >
                {(props.menuLevel).map(obj => {
                    return(
                        <FormControlLabel key={obj.level} value={obj.id}
                        control={<Radio/> } 
                        label={label(obj.level,obj.levelPrice)}></FormControlLabel>
                    )
                })}
            </RadioGroup>
            </FormControl>
        </div>
    )
}

export default RadioButton
