import { Grid, makeStyles, TextareaAutosize, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    input: {
        width: '80%',
      },
      container: {
        width: '100%',
        paddingLeft: '1rem',
        paddingBottom: '50px',
        minHeight: "120px"
      }
}))
function InputDetails(props) {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                <Typography variant="h6">Add Notes</Typography>
                <TextareaAutosize
                    onChange={(e) => props.details(e)} 
                    className={classes.input} 
                    value={props.value}
                    rowsMin={4} />
                </Grid>
            </Grid>
            
        </div>
    )
}

export default InputDetails
