import { makeStyles } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    nav: {
        backgroundColor: '#fafafa',
        position: 'sticky',
        top: '0px',
        width: '100%',
        height: '80px',
        zIndex: '1000',
        boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.15);'
    },
    navItems: {
      overflowX: 'scroll',
      width: '100%',
      whiteSpace: 'nowrap',
      padding: '1rem'
    },
    navLogo: {
        height: '60px',
        width: '60px',
    },
    navContent: {
        maxWidth: '900px',
        padding: '0rem 1rem',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        aligItems: 'center',
        height: '100%'
    },
    navItem: {
        display: 'inline',
        marginRight: '2rem',
        color: '#333',
        cursor: 'pointer'
    },
    active: {
        borderBottom: '1x solid #333'
    },
    link: {
      "&.active":{
        borderBottom: '1x solid #333'
      },
      borderBottom: '1x solid #333',
    }



}))

export default function TabMenu(props) {
    const classes = useStyles();
    console.log(props.items)
    const listItem = Object.keys( props.items )
      .map( (catKey, index) => {
        return (
          <li key={index} className={classes.navItem}>
                {props.items[catKey].menu}
          </li>
        )
      })
    return (
        <nav className={classes.nav}>
            <div className={classes.navContent}>
            <ul className={classes.navItems}>
                <li className={classes.navItem}>
                    <Link to="/menu">Back</Link>
                </li>
            {listItem}
            </ul>
            </div>
        </nav>
    )
}


