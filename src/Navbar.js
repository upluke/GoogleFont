import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color:'gray'
  },
  appBar: {
    backgroundColor: 'white',
    boxShadow:"none"
  },
  link:{
    textDecoration:"none",
    color:"gray"
  },
  button:{
    "&:hover": {  // disable the hover effect
      backgroundColor: "transparent"
  }
  }
}));



export default () => {
  const classes = useStyles();
  const [items] = useState(['Catalog', 'Featured', 'Articles', 'About'])

  return (
    <div>
       <AppBar position="static" className={classes.appBar}>
        <Toolbar>
        
          <Typography variant="h6" className={classes.title}>
          <Link className={classes.link}  to={'/nav_Catalog'}><span style={{fontWeight:"bold"}}>Google</span> Fonts</Link>
          </Typography>
          {items.map(i => (
          <Button color="inherit" className={classes.button} > <Link className={classes.link}  to={'/nav_' + i}>{i}</Link></Button>
           
      
        ))}
         
        </Toolbar>
      </AppBar>
     
    </div>
  )
}
