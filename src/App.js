import React, { Component } from 'react';
import AppArchitecture from './components/architecture';
import { BackTop } from 'antd';

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