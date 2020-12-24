import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
    sectionDark: {
        backgroundColor: '#333',
        color: '#000'
    },
    sectionContent: {
        maxWidth: '800px',
        margin: '0 auto',
        padding:'40px'
    }
}))

export default function Section({ title, subtitle, dark, id }) {
    const classes = useStyles()
  return (
    <div className={(dark ? classes.sectionDark : "")}>
      <div className={classes.sectionContent} id={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
