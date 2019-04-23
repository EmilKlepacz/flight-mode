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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import IframesGroup from "./IframeTop";
import { BrowserRouter as Router, Route, Link, Prompt } from "react-router-dom";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#FFFFFF" },
    secondary: { main: "#8cfd09" }
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
    fontFamily: "Share Tech Mono",
    marginLeft: -48
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
      background: "rgba(140, 253, 9, 0.15);"
    }
  },

  aboutDialog: {
    backgroundColor: "rgba(140, 253, 9, 0.15);",
  },

  aboutDialogTitle: {
    backgroundColor: "#000000",
    fontFamily: "Share Tech Mono"
  },

  aboutDialogContent: {
    backgroundColor: "#000000",
  },

  aboutDialogContextText: {
    backgroundColor: "#000000",
  },

  sideList: {
    width: 250,
  },

  list: {
    backgroundColor: "#000000",
  },

  paperInDrawer: {
    backgroundColor: "#000000"
  },

  bigAvatar: {
    margin: 10,
    width: 50,
    height: 50,
  },

  typography: {
    fontFamily: "Share Tech Mono"
  }
};

const RuneIcon_1 = (props) => (
  <SvgIcon {...props}>
    <path d="M13,4.75c-3.3963013,0-6.362793,1.8452148-7.9714355,4.5805054   C5.0170288,9.347168,4.9995728,9.3571777,4.9892578,9.375C4.9810181,9.3892822,4.9813232,9.4054565,4.9741211,9.4200439   C4.1994629,10.7720947,3.75,12.3331909,3.75,14c0,1.612854,0.4168701,3.1292725,1.1455688,4.4508057   c0.0103149,0.102478,0.0388794,0.2042847,0.093689,0.2991943c0.0551758,0.09552,0.1381836,0.1604004,0.2225342,0.2207642   C6.8570557,21.5394897,9.7296143,23.25,13,23.25c3.4020996,0,6.3731689-1.8513184,7.9798584-4.5943604   c0.0083008-0.0126343,0.0232544-0.017395,0.0308838-0.0306396c0.0082397-0.0142822,0.0079346-0.0304565,0.0151367-0.0450439   C21.8005371,17.2279053,22.25,15.6668091,22.25,14C22.25,8.8994141,18.1005859,4.75,13,4.75z M5.25,14   c0-1.1431274,0.255249-2.225647,0.7014771-3.2034912L11.6083984,14.0625l-5.6097412,3.2387695   C5.5236206,16.2980957,5.25,15.1817017,5.25,14z M20.75,14c0,1.1431274-0.255249,2.225647-0.7014771,3.2034912L14.6080933,14.0625   l5.4875488-3.1682129C20.513916,11.8461304,20.75,12.8953857,20.75,14z M19.3619385,9.5860596L13.75,12.8260498V6.2880249   C16.0723877,6.512146,18.095459,7.7662964,19.3619385,9.5860596z M12.25,6.2880249v6.4130249L6.7033691,9.4987793   C7.9734497,7.7272949,9.9657593,6.5084839,12.25,6.2880249z M6.7686768,18.588501L12.25,15.4239502v6.2880249   C10.0038452,21.4951782,8.0412598,20.3120728,6.7686768,18.588501z M13.75,21.7119751v-6.4130249l5.5466309,3.2022705   C18.0265503,20.2727051,16.0342407,21.4915161,13.75,21.7119751z"></path>
  </SvgIcon>
);

const RuneIcon_2 = (props) => (
  <SvgIcon {...props}>
    <path d="M19.1552734,4.8447266c-0.2929688-0.2929688-0.7675781-0.2929688-1.0605469,0L13,9.9394531   L7.9052734,4.8447266c-0.2929688-0.2929688-0.7675781-0.2929688-1.0605469,0s-0.2929688,0.7675781,0,1.0605469L11.9394531,11   l-5.0947266,5.0947266c-0.2929688,0.2929688-0.2929688,0.7675781,0,1.0605469l5.625,5.625   C12.6162109,22.9267578,12.8076172,23,13,23s0.3837891-0.0732422,0.5302734-0.2197266l5.625-5.625   c0.2929688-0.2929688,0.2929688-0.7675781,0-1.0605469L14.0605469,11l5.0947266-5.0947266   C19.4482422,5.6123047,19.4482422,5.1376953,19.1552734,4.8447266z M17.5644531,16.625L13,21.1894531L8.4355469,16.625   L13,12.0605469L17.5644531,16.625z"></path>
  </SvgIcon>
);

const RuneIcon_3 = (props) => (
  <SvgIcon {...props}>
    <path d="M24.25,1H1.75C1.3359375,1,1,1.3359375,1,1.75S1.3359375,2.5,1.75,2.5h10.5v4.5644531l-5.4052734,5.4052734  c-0.2929688,0.2929688-0.2929688,0.7675781,0,1.0605469L12.25,18.9355469V24.25c0,0.4140625,0.3359375,0.75,0.75,0.75  s0.75-0.3359375,0.75-0.75v-5.3144531l5.4052734-5.4052734c0.2929688-0.2929688,0.2929688-0.7675781,0-1.0605469L13.75,7.0644531  V2.5h10.5C24.6640625,2.5,25,2.1640625,25,1.75S24.6640625,1,24.25,1z M13.75,9.1855469L17.5644531,13L13.75,16.8144531V9.1855469z   M12.25,16.8144531L8.4355469,13L12.25,9.1855469V16.8144531z"></path>
  </SvgIcon>
);

const RuneIcon_4 = (props) => (
  <SvgIcon {...props}>
    <path d="M24.25,1H1.75C1.3359375,1,1,1.3359375,1,1.75S1.3359375,2.5,1.75,2.5h10.5v6H7.375  c-0.4140625,0-0.75,0.3359375-0.75,0.75S6.9609375,10,7.375,10h4.875v6H7.375c-0.4140625,0-0.75,0.3359375-0.75,0.75  s0.3359375,0.75,0.75,0.75h4.875v6.75c0,0.4140625,0.3359375,0.75,0.75,0.75s0.75-0.3359375,0.75-0.75V17.5h4.875  c0.4140625,0,0.75-0.3359375,0.75-0.75S19.0390625,16,18.625,16H13.75v-6h4.875c0.4140625,0,0.75-0.3359375,0.75-0.75  s-0.3359375-0.75-0.75-0.75H13.75v-6h10.5C24.6640625,2.5,25,2.1640625,25,1.75S24.6640625,1,24.25,1z"></path>
  </SvgIcon>
);

const RuneIcon_5 = (props) => (
  <SvgIcon {...props}>
    <path d="M24.25,1H1.75C1.3359375,1,1,1.3359375,1,1.75S1.3359375,2.5,1.75,2.5h10.5v8.6894531L7.9052734,6.8447266  c-0.2929688-0.2929688-0.7675781-0.2929688-1.0605469,0s-0.2929688,0.7675781,0,1.0605469L11.9394531,13l-5.0947266,5.0947266  c-0.2929688,0.2929688-0.2929688,0.7675781,0,1.0605469C6.9912109,19.3017578,7.1826172,19.375,7.375,19.375  s0.3837891-0.0732422,0.5302734-0.2197266L12.25,14.8105469V24.25c0,0.4140625,0.3359375,0.75,0.75,0.75s0.75-0.3359375,0.75-0.75  v-9.4394531l4.3447266,4.3447266C18.2412109,19.3017578,18.4326172,19.375,18.625,19.375s0.3837891-0.0732422,0.5302734-0.2197266  c0.2929688-0.2929688,0.2929688-0.7675781,0-1.0605469L14.0605469,13l5.0947266-5.0947266  c0.2929688-0.2929688,0.2929688-0.7675781,0-1.0605469s-0.7675781-0.2929688-1.0605469,0L13.75,11.1894531V2.5h10.5  C24.6640625,2.5,25,2.1640625,25,1.75S24.6640625,1,24.25,1z"></path>
  </SvgIcon>
);





class AppBarWithButton extends React.Component {

  state = {
    left: false,
    aboutOpen: false
  };

  toggleDrawer = (open) => () => {
    this.setState({
      left: open
    });
  };

  handleClickItem = (index) => () => {
    switch (index) {
      case 0: {
        this.setState({ aboutOpen: true });
        break;
      }
      default: {
        break;
      }
    }

  }

  handleCloseAbout = () => {
    this.setState({ aboutOpen: false });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.sideList}>
        <List className={classes.list}>
          {/* {['About', 'Chaotic Cult', 'Send us nudes'].map((text, index) => (
            <ListItem button key={text} onClick={this.handleClickItem(index)}>
              <ListItemIcon>
                <RuneIcon_1 fontSize="small" color="secondary" />
              </ListItemIcon>
              <ListItemText primary={<Typography variant="h7" style={{ color: '#FFFFFF', fontFamily: "Share Tech Mono" }}>{text}</Typography>} />
            </ListItem>
          ))} */}
          <Link to="/">
            <ListItem button key={"Home"}>
              <ListItemIcon>
                <RuneIcon_1 fontSize="small" color="secondary" />
              </ListItemIcon>
              <ListItemText primary={<Typography variant="h7" style={{ color: '#FFFFFF', fontFamily: "Share Tech Mono" }}>{"Home"}</Typography>} />
            </ListItem>
          </Link>
          
          <ListItem button key={"About"} onClick={this.handleClickItem(0)}>
            <ListItemIcon>
              <RuneIcon_2 fontSize="small" color="secondary" />
            </ListItemIcon>
            <ListItemText primary={<Typography variant="h7" style={{ color: '#FFFFFF', fontFamily: "Share Tech Mono" }}>{"About"}</Typography>} />
          </ListItem>
        
          <Link to="/all-episodes">
          <ListItem button key={"All Episodes"}>
            <ListItemIcon>
              <RuneIcon_3 fontSize="small" color="secondary" />
            </ListItemIcon>
            <ListItemText primary={<Typography variant="h7" style={{ color: '#FFFFFF', fontFamily: "Share Tech Mono" }}>{"All Episodes"}</Typography>} />
          </ListItem>
          </Link>

          {/* <ListItem button key={"Chaotic Cult"}>
            <ListItemIcon>
              <RuneIcon_4 fontSize="small" color="secondary" />
            </ListItemIcon>
            <ListItemText primary={<Typography variant="h7" style={{ color: '#FFFFFF', fontFamily: "Share Tech Mono" }}>{"Chaotic Cult"}</Typography>} />
          </ListItem>
        </List>
        <Divider />
        <List className={classes.list}>
        <ListItem button key={"Send Us Nudes"}>
            <ListItemIcon>
              <RuneIcon_5 fontSize="small" color="secondary" />
            </ListItemIcon>
            <ListItemText primary={<Typography variant="h7" style={{ color: '#FFFFFF', fontFamily: "Share Tech Mono" }}>{"Send Us Nudes"}</Typography>} />
          </ListItem> */}
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
                variant="h4"
                color="primary"
                className={classes.grow}
              >
                flight_mode
              </Typography>
            </Toolbar>
          </AppBar>

          <Drawer classes={{ paper: classes.paperInDrawer }} open={this.state.left} onClose={this.toggleDrawer(false)}>
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer(false)}
              onKeyDown={this.toggleDrawer(false)}
            >
              {sideList}
            </div>
          </Drawer>

          <Dialog
            fullWidth={true}
            maxWidth={'sm'}
            open={this.state.aboutOpen}
            aria-labelledby="about-dialog-title"
            onClose={this.handleCloseAbout}
            className={classes.aboutDialog}
          >
            <DialogTitle id="about-dialog-title" className={classes.aboutDialogTitle}><Typography align="center" variant="h7" style={{ color: '#FFFFFF', fontFamily: "Share Tech Mono" }}> &#10010; About Preachers &#10010;</Typography></DialogTitle>
            <DialogContent className={classes.aboutDialogContent}>
              <DialogContentText className={classes.aboutDialogContextText}>
                <Grid
                  container
                  direction="column"
                  justify="flex"
                  alignItems="flex"
                  spacing={24}
                >
                  <Grid item xs={12}>
                    <Grid
                      container
                      direction="column"
                      justify="center"
                      alignItems="center"
                      spacing={24}
                    >
                      <Grid item xs={12}><Avatar alt="Avatar" src="/static/images/e_avatar.jpg" className={classes.bigAvatar} /></Grid>
                      <Grid item xs={12}>
                        <Typography
                          className={classes.typography}
                          variant="body1"
                          paragraph="true"
                          align="justify"
                          color="primary"
                        >
                          /Emil : Trvly fascinated with polish and scandinavian black metal.
                          Explorer of post-punk and dark electronic from Berlin underground scene.
                          </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid
                      container
                      direction="column"
                      justify="center"
                      alignItems="center"
                      spacing={24}
                    >
                      <Grid item xs={12}><Avatar alt="Avatar" src="/static/images/r_avatar.jpg" className={classes.bigAvatar} /></Grid>
                      <Grid item xs={12}>
                        <Typography
                          className={classes.typography}
                          variant="body1"
                          paragraph="true"
                          align="justify"
                          color="primary"
                        >
                          /Radej : Enthusiast of of london jazz and 90s east coast rap music.
                          Fanatic of polish black metal. Dancing to weird electronic music.
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

              </DialogContentText>
            </DialogContent>
          </Dialog>

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
