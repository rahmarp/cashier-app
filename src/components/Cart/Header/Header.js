import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        padding: '0',
        margin: '0',
        backgroundColor: '#dcdde1',
        height: '3rem'
    },
    header: {
        padding: '15px'
    },
    
}))

function Header(props) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Typography variant="subtitle2" className={classes.header} >{props.label}</Typography>
        </div>
    )
}

export default Header
