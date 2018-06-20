//ReactJS
import React, { Component } from 'react';

//Project Components
import AppArchitecture from '../controllers/architecture';
import CaptureLead from './LeadCapture/LeadCapture';

//Back to top component
import { BackTop } from 'antd';
import 'antd/dist/antd.css';

//Styling
import 'tachyons';

class RentalApp extends Component {
  
  render() {  
    return (
      <div>
        <BackTop style={{paddingBottom: 150}}/>
        <AppArchitecture />
        <CaptureLead />
      </div>
    )
  }

}
export default RentalApp;