//ReactJS
import React, { Component } from 'react';

//Project Components
import AppArchitecture from '../controllers/architecture';

//Ant Design UI
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