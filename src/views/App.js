//ReactJS
import React, { Component } from 'react';

//Project Components
import AppArchitecture from '../controllers/architecture';

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
      </div>
    )
  }

}
export default RentalApp;