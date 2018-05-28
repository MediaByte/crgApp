import React, { Component } from 'react';
import AppArchitecture from './architecture';
import { BackTop } from 'antd';
import 'antd/dist/antd.css';

class RentalApp extends Component {
  
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

}
export default RentalApp;