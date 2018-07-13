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
class RentalApp extends Component {

  render() {

    const { userValid } = this.props
    return (
      <div>
        <AppArchitecture />
        { userValid ? <BackTop style={{paddingBottom: 160}}/> : <CaptureLead /> }
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return { userValid: state.isUserAuthorized.userValid }
}

export default connect(mapStateToProps)(RentalApp);

