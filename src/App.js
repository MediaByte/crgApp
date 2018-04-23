import React, { Component } from 'react';
import AppArchitecture from './components/architecture';
import { BackTop, Spin } from 'antd';
import 'tachyons';
import 'antd/dist/antd.css';

class RentalApp extends Component {
  
  constructor() {
    super()
      this.state = {
        loading: true
      }
    
  }


  render() {  
    
    return (
      <div>
        <div>
          <AppArchitecture />
          <BackTop />
        </div>
      </div>
    )
    
  }
  componentDidMount() {
    
  }
}
export default RentalApp;