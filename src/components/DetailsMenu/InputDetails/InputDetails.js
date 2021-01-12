import { FormLabel, Grid, makeStyles, TextareaAutosize } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '1rem',
        marginBottom: '5px',
        backgroundColor: 'white'
    },
    input: {
        width: '100%',
      },

    container: {
        width: '100%',
        paddingLeft: '1rem',
        paddingBottom: '50px',
        minHeight: "120px"
    },
    label: {
        margin: '10px',
        color: 'black'
    }
}))
function InputDetails(props) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                <FormLabel component="legend" className={classes.label}>Add Notes</FormLabel>
                <TextareaAutosize
                    onChange={(e) => props.details(e)} 
                    className={classes.input} 
                    value={props.value}
                    placeholder="Special Instruction"
                    rowsMin={4} />
                </Grid>
            </Grid>
            
        </div>
    )
}

export default InputDetails
