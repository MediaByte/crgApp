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
    );
  }
}