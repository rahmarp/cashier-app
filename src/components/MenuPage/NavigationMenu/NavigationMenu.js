import { makeStyles } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-scroll'

const useStyles = makeStyles((theme) => ({
    nav: {
        backgroundColor: '#fff',
        position: 'sticky',
        top: '0px',
        width: '100%',
        height: '60px',
        zIndex: '1000',
        boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.15);'
    },
    navItems: {
      overflowX: 'scroll',
      width: '100%',
      whiteSpace: 'nowrap',
      paddingInlineStart: '1rem',
      '&::-webkit-scrollbar': {
        display: 'none'
      }
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
    },
    active: {
        fontWeight: 'bold'
    },
    link: {
      '&:active':{
        borderBottom: '1px solid #333'
      },
      color: '#333',
    }



}))

export default function NavigationMenu(props) {
    const classes = useStyles();
    const listItem = Object.keys( props.items )
      .map( (catKey, index) => {
        return (
          <li key={index} className={classes.navItem}>
            <Link 
              activeClass={classes.active}
              className={classes.link}
              to={props.items[catKey].title}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
                {props.items[catKey].title}
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


