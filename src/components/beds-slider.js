import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Slider, InputNumber, Row, Col } from 'antd';

export default class BedSlider extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: 0
    };
  }
  onChange = value => {
    this.setState({
      inputValue: value
    });
  };
  render() {
    return (
      <Row type="flex" justify="center">
        <Col md={24}>
        <div style={{ width: '100%' }}>
            <Slider
              min={0}
              max={8}
              onChange={this.onChange}
              value={this.state.inputValue}
            />
          </div>
        </Col>
        <Col span={12}>
          <InputNumber
            min={0}
            max={8}
            value={this.state.inputValue}
            onChange={this.onChange}
          />
        </Col>
      </Row>
    );
  }
}