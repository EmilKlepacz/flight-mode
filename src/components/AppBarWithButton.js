import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Paper from "@material-ui/core/Paper";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SvgIcon from '@material-ui/core/SvgIcon';

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#FFFFFF" }, 
    secondary: { main: "#11cb5f" }
  }
});

const styles = {
  root: {
    flexGrow: 1,
    zIndex: 1,
  },
  grow: {
    flexGrow: 1,
    textAlign: "center",
    fontFamily: "Share Tech Mono"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },

  appBar: {
    background: "rgba(0, 0, 0, 1.0);",
    marginLeft: "0px",
    marginRight: "0px",
    "&:hover": {
      background: "rgba(0, 0, 0, 0.7);"
    }
  },

  sideList: {
    width: 250,
  },

  list: {
    backgroundColor: "#000000"
  },

  paperInDrawer:{
      backgroundColor: "#000000"
  }

};

const RuneIcon_1 = (props) => (
  <SvgIcon {...props}>
    <path d="M13,4.75c-3.3963013,0-6.362793,1.8452148-7.9714355,4.5805054   C5.0170288,9.347168,4.9995728,9.3571777,4.9892578,9.375C4.9810181,9.3892822,4.9813232,9.4054565,4.9741211,9.4200439   C4.1994629,10.7720947,3.75,12.3331909,3.75,14c0,1.612854,0.4168701,3.1292725,1.1455688,4.4508057   c0.0103149,0.102478,0.0388794,0.2042847,0.093689,0.2991943c0.0551758,0.09552,0.1381836,0.1604004,0.2225342,0.2207642   C6.8570557,21.5394897,9.7296143,23.25,13,23.25c3.4020996,0,6.3731689-1.8513184,7.9798584-4.5943604   c0.0083008-0.0126343,0.0232544-0.017395,0.0308838-0.0306396c0.0082397-0.0142822,0.0079346-0.0304565,0.0151367-0.0450439   C21.8005371,17.2279053,22.25,15.6668091,22.25,14C22.25,8.8994141,18.1005859,4.75,13,4.75z M5.25,14   c0-1.1431274,0.255249-2.225647,0.7014771-3.2034912L11.6083984,14.0625l-5.6097412,3.2387695   C5.5236206,16.2980957,5.25,15.1817017,5.25,14z M20.75,14c0,1.1431274-0.255249,2.225647-0.7014771,3.2034912L14.6080933,14.0625   l5.4875488-3.1682129C20.513916,11.8461304,20.75,12.8953857,20.75,14z M19.3619385,9.5860596L13.75,12.8260498V6.2880249   C16.0723877,6.512146,18.095459,7.7662964,19.3619385,9.5860596z M12.25,6.2880249v6.4130249L6.7033691,9.4987793   C7.9734497,7.7272949,9.9657593,6.5084839,12.25,6.2880249z M6.7686768,18.588501L12.25,15.4239502v6.2880249   C10.0038452,21.4951782,8.0412598,20.3120728,6.7686768,18.588501z M13.75,21.7119751v-6.4130249l5.5466309,3.2022705   C18.0265503,20.2727051,16.0342407,21.4915161,13.75,21.7119751z"></path>
  </SvgIcon>
);

class AppBarWithButton extends React.Component{

  state = {
    left: false
  };

  toggleDrawer = (open) => () => {
    this.setState({
      left: open
    });
  };

  render(){
    const { classes } = this.props;

    const sideList = (
      <div className={classes.sideList}>
        <List className={classes.list}>
          {['About', 'Chaotic Cult', 'Send us nudes'].map((text) => (
            <ListItem button key={text}>
              <ListItemIcon> 
                <RuneIcon_1 className={classes.iconHover} fontSize="small" color="primary"/>
              </ListItemIcon>
              <ListItemText primary={<Typography variant="h7" style={{ color: '#FFFFFF', fontFamily: "Share Tech Mono" }}>{text}</Typography>}/>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List className={classes.list}>
          {['Other stuff', 'Groove'].map((text) => (
            <ListItem button key={text}>
              <ListItemIcon> <InboxIcon/> </ListItemIcon>
              <ListItemText primary={<Typography variant="h7" style={{ color: '#FFFFFF', fontFamily: "Share Tech Mono" }}>{text}</Typography>}/>
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <AppBar className={classes.appBar} color="default">
            <Toolbar>
              <IconButton
                className={classes.menuButton}
                color="primary"
                aria-label="Menu"
                onClick={this.toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h3"
                color="primary"
                className={classes.grow}
              >
                Flight-mode
              </Typography>
            </Toolbar>
          </AppBar>

        <Drawer classes={{ paper: classes.paperInDrawer }}  open={this.state.left} onClose={this.toggleDrawer(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            {sideList}
          </div>
        </Drawer>

        </div>
      </MuiThemeProvider>
    );
  }
  
}


// function ButtonAppBar(props) {
//   const { classes } = props;
//   return (
//     <MuiThemeProvider theme={theme}>
//       <div className={classes.root}>
//         <AppBar className={classes.appBar} color="default">
//           <Toolbar>
//             <IconButton
//               className={classes.menuButton}
//               color="primary"
//               aria-label="Menu"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Typography
//               variant="h3"
//               color="primary"
//               className={classes.grow}
//             >
//               Flight-mode
//             </Typography>
//           </Toolbar>
//         </AppBar>
//       </div>
//     </MuiThemeProvider>
//   );
// }

AppBarWithButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppBarWithButton);
