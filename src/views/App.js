//ReactJS
import React, { Component } from 'react';

//State Management
import { connect } from 'react-redux';

//Project Components
import AppArchitecture from '../controllers/architecture';
import CaptureLead from './LeadCapture/LeadCapture';

//Back to top component
import { BackTop } from 'antd';
import 'antd/dist/antd.css';

//Styling
import 'tachyons';

const mapStateToProps = state => {
  return {
    userValid: state.userValid
  }
}

class RentalApp extends Component {

  render() {
    const { userValid } = this.props
    console.log('rentalApp Log ', userValid)
    return (
      <div>
        <AppArchitecture />
        { userValid ? <BackTop style={{paddingBottom: 150}}/> : <CaptureLead /> }
      </div>
    )
  }

}
export default connect(mapStateToProps, null)(RentalApp);