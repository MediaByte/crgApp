import React from 'react';
import PropTypes from 'prop-types';
import GetListings from './connect';
import ScrollToTop from 'react-scroll-up'
import { ic_arrow_upward } from 'react-icons-kit/md/ic_arrow_upward'; 
import Icon from 'react-icons-kit';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';
import { Row, Col } from 'reactstrap';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 3,
    height: '100%',
    zIndex: 1,
    overflow: 'auto',
    display: 'flex',
    width: '100%',

  },
  appBar: {
    position: 'fixed',
    backgroundColor: '#333A40',
    
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    backgroundColor: '#333A40',
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'fixed',
    },
  },
  content: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 1,  
  },
});

class AppArchitecture extends React.Component {
  constructor() {
    super();
      this.state = {
        bedroom: '',
        bathroom: '',
        location: '',
        pets: '',
        open: false,
        anchor: 'left',
        mobileOpen: false,
        listings: [],
      }
  }
  componentDidMount() {
    const convert = require('xml-js');
    const options = {
      ignoreComment: true, 
      compact: true,
      ignoreDeclaration: true,
      alwaysArray: false,
      ignoreAttributes: true,
      ignoreCdata: true,
      alwaysChildren: false,
      nativeType: true,
      trim: true
    };
      fetch('https://www.yougotlistings.com/api/rentals/search.php?key=1cY2iaM5eLEWXp7wmtUvgSPsozCJqQDubZ0BNKnk&include_mls=1')
      .then(xml => xml.text())
      .then(xml => convert.xml2js(xml, options))
      .then(data => this.setState({ listings: data }))
    }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes, theme } = this.props;
    const listArray = this.state.listings;
    console.log(this.state.listings)

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>{mailFolderListItems}</List>
        <Divider />
        <List>{otherMailFolderListItems}</List>
      </div>
    );
    if (listArray.length === 0) {
      return (
        <div>
          Loading...
        </div>
      )
    } else {
      const listArray = this.state.listings.YGLResponse.Listings.Listing
      return (
        <div className={classes.root}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.navIconHide}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" noWrap>
                {/* Responsive drawer */}
              </Typography>
            </Toolbar>
          </AppBar>
          <Hidden mdUp>
            <Drawer
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden smDown implementation="css">
            <Drawer
              variant="permanent"
              open
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <main className={classes.content}>
            <div className={classes.toolbar} />
                <Row>
                  <Col xs={{size: 'auto'}} md={{size: 9, offset: 3}} lg={{ size: 9, offset: 3 }}>
                    <GetListings listings={listArray} /> 
                    <ScrollToTop showUnder={160}>
                      <span>
                        <Icon
                          style={{ color: '#FF0017' }} 
                          size={40} 
                          icon={ic_arrow_upward} 
                        />
                      </span>
                    </ScrollToTop>
                  </Col>
                </Row>
          </main>
        </div>
      );
    }
    
  }
}

AppArchitecture.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(AppArchitecture);

