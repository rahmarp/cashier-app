import { Button, makeStyles, TextField, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
      error: {
          color: 'red',
          textAlign: 'left'
      }
}))


export default function RegistrationForm(props) {
    const classes = useStyles()
    return (
        <div>
            <div className={classes.paper}>
                    {/* <Avatar className={classes.avatar}> */}
                    {/* <LockOutlinedIcon /> */}
                    {/* </Avatar> */}
                    <Typography component="h1" variant="h5">
                    Registration
                    </Typography>
                    <form className={classes.form}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="outlined-required"
                        label="Your Name"
                        autoFocus
                        name="name"
                        onChange={(event) => props.onChanged(event,"name")}
                    />
                    { props.error.length > 0 ? <span className={classes.error}>{props.error}</span> : ''}
                    <TextField
                        id="outlined-read-only-input"
                        margin="normal"
                        fullWidth
                        label="Table"
                        type="number"
                        // InputProps={{
                        //   readOnly: true,
                        // }}
                        variant="outlined"
                        name="table"
                        value={props.tableValue}
                    />
                    <Button
                        // type="submit"
                        onClick={props.onSubmited}
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    </form>
                </div>
        </div>
    )
}
