import React from 'react';
import { Row, Col } from 'reactstrap';
import 'tachyons';
import LoadPriceSlider from './slider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import LoadBedroomSlider from './beds-slider';
import LoadBathroomSlider from './baths-slider';
import AppBar from 'material-ui/AppBar';


export default class LoadNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => {
    this.setState({open: !this.state.open});
  }

  render() {
    return (
      <div>
        <div>
          <AppBar
            title="Apartments"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onClick={this.handleToggle}
            className='bg-dark white'
          />
        </div>
          <div>
            <Drawer open={this.state.open} style={{  backgroundColor: '#333A40' }}>
                <div>
                  <Row>
                    <Col xs={{size: 4, offset: 2}}>
                      <div className='white lead avenir'>
                      <LoadBedroomSlider />
                      </div>
                    </Col>
                    <Col xs={{size: 4, offset: 2}}>
                      <div className='white lead avenir'>
                      <LoadBathroomSlider />
                      </div>
                    </Col>
                  </Row>
                </div>
                <div>
                  <Row>
                    <Col xs={{ size: 10, offset: 1 }}>
                      <div className='dark lead avenir'>
                        <LoadPriceSlider />
                      </div>
                    </Col>
                  </Row>
                </div>
                <div>
                  <Row>
                    <Col xs={{ size: 10, offset: 3 }}>
                      <RaisedButton 
                      backgroundColor="#FFFFFF"
                      labelColor='#212121'
                      label="Done"
                      onClick={this.handleToggle}
                    />
                    </Col>
                  </Row>
                </div>
            </Drawer>
          </div>
      </div>
    );
  }
}