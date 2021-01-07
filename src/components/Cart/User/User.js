import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        paddingTop: '20px'
    }
}))
function User(props) {
    const classes = useStyles();
    return (
        <div>
            <Grid container spacing={3} className={classes.root}>
                <Grid item xs={12}>
                    <Typography variant="h6">{props.user}</Typography>
                    <Typography variant="h6">Table {props.table}</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default User
