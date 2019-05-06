import React, { useState} from "react";

// Drawer Popout
import { styles } from "../components/styled-components/Drawer";
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';

// Color Picker
import { ChromePicker } from "react-color";

// Component
const NewPaletteForm = (props) => {
  
  // State
  const [open, setOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState("");

  // Toggle the Drawer
  const handleDrawer = () => { setOpen(!open) };
  
  // Change the current color
  const changeColor = (color) => {
    setCurrentColor(color.hex);
  }

    const { classes } = props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classNames(classes.appBar, { [classes.appBarShift]: open, })}>
          <Toolbar disableGutters={!open}>
            <IconButton color="inherit" aria-label="Open drawer" onClick={handleDrawer} className={classNames(classes.menuButton, open && classes.hide)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Persistent drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer} variant="persistent" anchor="left" open={open} classes={{ paper: classes.drawerPaper, }} >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <h3>Design Your Palette!</h3>
          <Button variant="contained" color="secondary">Clear</Button>
          <Button variant="contained" color="primary">Random Color</Button>
          <ChromePicker color={currentColor} onChange={(newColor)=> changeColor(newColor)} />
          <Button style={{background: currentColor}} variant="contained" color="primary">Add Color!</Button>
          <Divider />
        </Drawer>
        <main className={classNames(classes.content, { [classes.contentShift]: open, })}>
          <div className={classes.drawerHeader} />
        </main>
      </div>
    );
  }

export default withStyles(styles, { withTheme: true })(NewPaletteForm);