import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Slider, InputNumber, Row, Col } from 'antd';

export default class BedSlider extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: 0,
      defaultValue: 0,
      beds: 0,
      minBed: 0,
    };
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
        fetch(`https://www.yougotlistings.com/api/rentals/search.php?key=1cY2iaM5eLEWXp7wmtUvgSPsozCJqQDubZ0BNKnk&include_mls=1&beds=${this.state.beds}`)
        .then(xml => xml.text())
        .then(xml => convert.xml2js(xml, options))
        .then(data => this.setState({ beds: data }))

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