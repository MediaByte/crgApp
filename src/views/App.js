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

<<<<<<< HEAD
=======
const mapStateToProps = state => {
  return {
    userValid: state.isUserAuthorized.userValid
  }
}

>>>>>>> 8a63451f1994bc1c5357908198212067a60445f7
class RentalApp extends Component {

  render() {

    const { userValid } = this.props
<<<<<<< HEAD

    console.log('rentalApp Log', this.props)

=======
    console.log('rentalApp Log ', this.props)
>>>>>>> 8a63451f1994bc1c5357908198212067a60445f7
    return (
      <div>
        <AppArchitecture />
        { userValid ? <BackTop style={{paddingBottom: 160}}/> : <CaptureLead /> }
      </div>
    )
  }

}
<<<<<<< HEAD

const mapStateToProps = (state) => {
  return { userValid: state.isUserAuthorized.userValid }
}

export default connect(mapStateToProps)(RentalApp);
=======
export default connect(mapStateToProps)(RentalApp);

>>>>>>> 8a63451f1994bc1c5357908198212067a60445f7
