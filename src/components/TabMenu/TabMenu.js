import { makeStyles } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    nav: {
        backgroundColor: '#fafafa',
        position: 'sticky',
        top: '0px',
        width: '100%',
        height: '50px',
        zIndex: '1000',
        boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.15);',
    },
    navItems: {
      overflowX: 'scroll',
      width: '100%',
      whiteSpace: 'nowrap',
      padding: '0rem'
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
        cursor: 'pointer',
        marginTop: '5px'
    },
    active: {
        borderBottom: '1x solid #333'
    },
    link: {
      "&.active":{
        borderBottom: '1x solid #333'
      },
      borderBottom: '1x solid #333',
    },
    close: {
        width: '15px',        
        marginTop: '3px'
    }



}))

export default function TabMenu(props) {
    const classes = useStyles();
    return (
        <nav className={classes.nav}>
            <div className={classes.navContent}>
            <ul className={classes.navItems}>
                <li className={classes.navItem}>
                    <Link to="/menu">
                        <img alt="close" className={classes.close} src="https://www.flaticon.com/svg/static/icons/svg/32/32178.svg"/>
                    </Link>
                </li>
                <li className={classes.navItem}>
                  {props.items}
                </li>
            </ul>
            </div>
        </nav>
    )
}


