import React, {Component} from 'react';
import PropTypes from 'prop-types';
import GetListings from '../containers/connect';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { Row, Col, Spin } from 'antd'
import Button from 'material-ui/Button';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import { ListItem } from 'material-ui/List';
import MenuIcon from '@material-ui/icons/Menu';
import { Slider } from 'antd';
import AlertDialog from '../containers/AlertDialog';
import 'tachyons';
import 'antd/dist/antd.css';



const styles = {
  root: { flexGrow: 1, backgroundColor: '#FFFFFF'},
  fullList: { width: '300' },
  list: { width: 300 },
  flex: { flex: 1 },
  menuButton: { marginLeft: -12, marginRight: 20 },
};

class AppArchitecture extends Component {

  toggleDrawer = (side, open) => () => {
    this.setState({[side]: open});
  };

  onChange = (value) => {

    
      this.setState({
        inputValue: value
      });
      console.log(value + ' ' + this.state.inputValue)
      switch (value) {
        case 0:
          this.setState({ minBeds: 0, maxBeds: 0 });
            break;
        case 5:
          this.setState({ minBeds: 1, maxBeds: 1 });
            break;
        case 10:
          this.setState({ minBeds: 2, maxBeds: 2 });
            break;
        case 15:
          this.setState({ minBeds: 3, maxBeds: 3 });
            break;
        case 20:
          this.setState({ minBeds: 4, maxBeds: 4 });
            break;
        case 25:
          this.setState({ minBeds: 5, maxBeds: 8 });
            break;
        default:
          return <AlertDialog title='Server' message='Something went wrong in your bedroom search parameters and the server was not able to return any listings. Please check your bedroom settings and I will see if there is anything available in your criteria' />
      }
    
  };

  constructor() {
    super();
      this.state = {
        inputValue: 0,
        defaultValue: 0,
        maxBeds: 2,
        bathroom: 1,
        minBeds: 2,
        city: 'Cambridge',
        pets: '',
        open: false,
        listings: [],
        listArray: [],
        left: false,
      }
    this.onChange = this.onChange.bind(this)
  }

  render() {
    const { classes } = this.props;
    const { listings } = this.state
    console.log(this.state.listings)

    if (listings.length === 0) {
      return (
        <Row>
          <div className='mt6'>
            <Col offset={10} span={6}>
              <br/>
              <br/>
              <br/>
              <br/>
                <Spin color='' size='large' spinning={this.state.loading} tip={'Loading...'} />
          </Col>
        </div>
      </Row>
        
      )
   
    } else {
      return (
        <div className={classes.root}>
          <div>
            <AppBar position="fixed" color='#FFFFFFF'>
              <Toolbar>
                <div>
                  <IconButton onClick={this.toggleDrawer('left', true)} className={classes.menuButton} color="inherit" aria-label="Menu">
                      <MenuIcon />
                  </IconButton>
                  <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                      <div tabIndex={0} role="button" onKeyDown={this.toggleDrawer('left', false)}>
                        <div className={classes.list}>
                          <List>
                            <div>
                              <ListItem button>
                              <div>
                                <Row>
                                  <Col xs={24}>
                                    <div style={{ float: 'left', marginLeft: 10, }}>
                                      <h6> 
                                          Bedrooms
                                      </h6>      
                                    </div>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col span={24}>
                                      <div style={{ float: 'left', height: 50, width: 220, marginLeft: 10 }}>
                                      
                                        <Slider
                                          included={false}
                                          style={{ color: '#f50', justify: 'center'}}
                                          min={0}
                                          max={25}
                                          onChange={this.onChange}
                                          value={this.state.inputValue}
                                          step={5}
                                          marks={{
                                            0: { label: <strong>0</strong> },
                                            5: { label: <strong>1</strong> },
                                            10: { label: <strong>2</strong> },
                                            15: { label: <strong>3</strong> },
                                            20: { label: <strong>4</strong> },
                                            25: { label: <strong>5+</strong> }
                                          }}
                                        />
                                      </div>
                                  </Col>
                                </Row>
                              </div>
                              </ListItem>
                            </div>
                          </List>
                          <Divider />
                        </div>
                      </div>
                  </Drawer>
              </div>
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
                  <GetListings listings={this.state.listings.YGLResponse.Listings.Listing} />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      );

    }
        
    }
  

  componentDidMount() {
    const convert = require('xml-js');
    const options = {ignoreComment: true, compact: true, ignoreDeclaration: true, alwaysArray: false, ignoreAttributes: true, ignoreCdata: true, alwaysChildren: false, nativeType: true, trim: true};
    
    fetch(`https://crg-server.herokuapp.com/rentals&city_neighborhood=${this.state.city}&min_bed=${this.state.minBeds}&max_bed=${this.state.maxBeds}`)
    .then(xml => xml.text())
    .then(xml => convert.xml2js(xml, options))
    .then(data => this.setState({ listings: data }))

    console.log(this.state.listings)


  }
}
AppArchitecture.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(AppArchitecture);