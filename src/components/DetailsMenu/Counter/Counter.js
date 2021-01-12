import { ButtonGroup, makeStyles, Button} from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '1rem',
        marginBottom: '5px',
        backgroundColor: 'white',
        textAlign: 'center'
    },
}))

function Counter(props) {
    const disable = props.counter > 0
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <ButtonGroup size="large" aria-label="small outlined button group">
                <Button onClick={(e) => props.decrement(e)} disabled={!disable}>-</Button>
                <Button disabled>{props.counter}</Button>
                <Button onClick={(e) => props.increment(e)}>+</Button>
            </ButtonGroup>
        </div>
    )
}

export default Counter
