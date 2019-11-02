import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link } from "react-router-dom";
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';




export default class Navbar extends React.Component<any, any> {


  render() {

    return (

      <div>
        <CssBaseline />
        <AppBar position="static" color="default" elevation={0} style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>
          <Toolbar style={{ flexWrap: 'wrap' }}>
            <Typography align="left" variant="h6" color="inherit" noWrap style={{ flexGrow: 1 }}>
              COUNTRIES FLAGS APP</Typography>
            <nav>
              <Link to="/add-image" color="textPrimary" style={{ margin: 2 }}>
                <Button> Add image</Button>
              </Link>
              <Link to='/countries-page' color="textPrimary" style={{ margin: 2 }}>
                <Button> countries </Button>
              </Link>               
            </nav>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}