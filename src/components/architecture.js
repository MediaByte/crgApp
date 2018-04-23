import React from 'react';
import PropTypes from 'prop-types';
import GetListings from '../containers/connect';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { Row, Col } from 'antd'
import 'tachyons';
import Button from 'material-ui/Button';
import ListingFilters from './filters';
import { Spin } from 'antd';
import 'tachyons';
import 'antd/dist/antd.css';

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
      fetch(`https://crg-server.herokuapp.com/rentals&city_neighborhood=Cambridge`)
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
        <Row justify={'center'} align={'middle'}>
          <div className='mt6'>
            <Col offset={11} span={2}>
              <Spin color='' size='large' spinning={this.state.loading} tip={'Loading...'} />
            </Col>
          </div>
        </Row>
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
                <Row>
                  <Col>
                    <div>
                      <GetListings listings={listArray} />
                    </div>
                  </Col>
                </Row>
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