import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Slider, Row, Col } from 'antd';

export default class BedSlider extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: 0,
      defaultValue: 0,
    };
  }


  onChange = value => {
    this.setState({
      inputValue: value
    });
  };

  render() {
    return (
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
                  defaultValue={this.state.defaultValue}
                  style={{ color: '#f50', justify: 'center'}}
                  min={0}
                  max={25}
                  value={this.state.inputValue}
                  onChange={this.onChange}
                  step={5}
                  marks={{
                    0: '0', //studio
                    5: '1', //one bedroom
                    10: '2', //two bedroom
                    15: '3', //three bedroom
                    20: '4', //four bedroom
                    25: { //5+ Bedrooms
                          label: <strong>5+</strong>
                        }
                  }}
                />
              </div>
          </Col>
        </Row>
      </div>
    );
  }
}