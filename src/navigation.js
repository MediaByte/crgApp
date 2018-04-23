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
import { Grid, Row, Col } from 'react-material-responsive-grid';
import 'tachyons';
import Button from 'material-ui/Button';
import ListingFilters from './components/filters';



const styles = {
  root: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class AppArchitecture extends React.Component {
  constructor() {
    super();
      this.state = {
        bedroom: '',
        bathroom: '',
        location: '',
        pets: '',
        open: false,
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
      fetch('https://crg-server.herokuapp.com/rentals')
      .then(xml => xml.text())
      .then(xml => convert.xml2js(xml, options))
      .then(data => this.setState({ listings: data }))
    }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes } = this.props;
    const listArray = this.state.listings;
    console.log(this.state.listings)

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
              <div>
                <AppBar position="fixed" color='#FFFFFFF'>
                  <Toolbar>
                      <ListingFilters />
                    <Typography variant="title" color="inherit" className={classes.flex}>
                      Rentals
                    </Typography>
                    <Button color="inherit">
                      Sign up
                    </Button>
                  </Toolbar>
                </AppBar>
              </div>
              <div className='mt5'>
                <Grid>
                  <Row>
                    <Col>
                      <div>
                        <GetListings listings={listArray} />
                      </div>
                      <div> 
                        <ScrollToTop showUnder={160}>
                          <span>
                            <Icon
                              style={{ color: '#FF0017' }} 
                              size={40} 
                              icon={ic_arrow_upward} 
                            />
                          </span>
                        </ScrollToTop>
                      </div>
                    </Col>
                  </Row>
                </Grid>
              </div>
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