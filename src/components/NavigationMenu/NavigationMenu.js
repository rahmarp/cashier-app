import { makeStyles } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll'
import data from '../../data.json';

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

export default function NavigationMenu() {
    const classes = useStyles();
    const listItem = Object.keys( data.categories )
      .map( (catKey, index) => {
        return (
          <li key={index} className={classes.navItem}>
            <Link 
              activeClassName="active"
              className={classes.link}
              to={data.categories[catKey].title}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
                {data.categories[catKey].title}
              </Link>
              
          </li>
        )
      })
    return (
        <nav className={classes.nav}>
            <div className={classes.navContent}>
            <ul className={classes.navItems}>
            {listItem}
            </ul>
            </div>
        </nav>
    )
}


