import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import { Row, Col } from 'antd'
import Typography from 'material-ui/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import Locations from '../containers/Locations';
import List from 'material-ui/List';
import { Slider } from 'antd';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import 'antd/dist/antd.css';
import logo from './logo.jpg'
import Budget from '../containers/Budget'

const styles = {
    root: { flexGrow: 1, backgroundColor: '#FFFFFF'},
    fullList: { width: '300' },
    list: { width: 300 },
    flex: { flex: 1 },
    menuButton: { marginLeft: -12, marginRight: 20 },
  };

 class Layout extends Component {
    constructor() {
        super();
            this.state = {
                bathSlider: 1,
                defaultValue: 0,
                inputValue: 0,
                open: false,
                left: false,
            }
    }
    
render() {
    const { classes } = this.props;
    const { onChangeBed, bedValue} = this.props;
        return (
            <AppBar position="fixed" color='white'>

                <Toolbar>

                    <IconButton onClick={this.toggleDrawer('left', true)} className={classes.menuButton} color="inherit" aria-label="Menu"><MenuIcon /></IconButton>

                        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                            <div tabIndex={0} role="button">
                                <div className={classes.list}>

                                    <List>
                                        <Row>
                                            <Col span={5}>
                                                <div style={{ float: 'left', marginLeft: 10, paddingTop: 10}}>
                                                    <h6>Rent</h6>  
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={24}>
                                                <div style={{ marginLeft: 50 }}>
                                                    <Budget /> 
                                                </div>
                                            </Col>
                                        </Row>
                                        <br/>
                                        <Divider />
                                        <br/>
                                        <Row>
                                            <Col span={24}>
                                                <div style={{ float: 'left', marginLeft: 10, }}>
                                                    <h6>Bedrooms</h6>      
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col span={22} offset={2}>
                                                <div style={{ float: 'left', height: 50, width: 220, marginLeft: 10 }}>
                                                    <Slider included={false} style={{ paddingBottom: 20, color: '#f50', justify: 'center'}} min={0} max={25} value={bedValue} onChange={onChangeBed} step={5} marks={{ 0: { label: <strong>0</strong> }, 5: { label: <strong>1</strong> }, 10: { label: <strong>2</strong> }, 15: { label: <strong>3</strong> }, 20: { label: <strong>4</strong> }, 25: { label: <strong>5+</strong> } }} />
                                                </div>
                                                
                                            </Col>
                                        </Row>
                                        <br/>
                                        <Divider />
                                        <br/>
                                        <Row>
                                            <Col span={24}>
                                                <div style={{ float: 'left', marginLeft: 10, }}>
                                                    <h6>Neighborhood</h6>      
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col span={22} offset={2}>
                                                <div className='pr3'>
                                                    <Locations />
                                                </div>
                                            </Col>
                                        </Row>
                                        
                                    </List>
                                </div>
                            </div>
                        </Drawer>
                    <Typography variant="title" color="inherit" className={classes.flex}>Rentals</Typography>
                    <Button color="inherit">Sign up</Button>
                </Toolbar>
            </AppBar>
        )
    }

    toggleDrawer = (side, open) => () => {
        this.setState({[side]: open});
      };

}          

Layout.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };

  export default withStyles(styles, { withTheme: true })(Layout);