import React, { Component } from 'react';
import {Map, Marker, InfoWindow, GoogleApiWrapper} from 'google-maps-react';
import { Button, ModalHeader, Modal } from 'reactstrap';
import 'tachyons';
import Icon from 'react-icons-kit';
import { location2 } from 'react-icons-kit/icomoon/location2';   
const style = {  width: '100%', height: '400px' }
class MapSnippet extends Component {
    constructor(props) {
      super(props);
        this.state = { modal: false, lat: 0, long: -0, title: '', subTitle: '' };
          this.toggle = this.toggle.bind(this);
    }
  
    toggle() {
      this.setState({ modal: !this.state.modal, lat: this.props.lat, long: this.props.long, title: this.props.modalTitle, subTitle: this.props.modalSubTitle });
    }
  
    render() {
      return (
        <div>
          <Button className='grow shadow-5 pt2 pr3 pb1 pl3 ma1' color="white" onClick={this.toggle}> <div style={{ color: '#ED0036' }}><Icon size={20} icon={location2} /> </div></Button>
            <Modal className='shadow-5' size='lg' isOpen={this.state.modal} toggle={this.toggle}>
              <ModalHeader size='sm' className='avenir shadow-5 bg-dark text-white br2' toggle={this.toggle}>{`Google Map: ${this.state.title} ${this.state.subTitle}`}</ModalHeader>
                {/* <ScrollLock>   */}
                  <div>   
                    <Map style={style} google={this.props.google} initialCenter={{lat: this.state.lat, lng: this.state.long}} zoom={15} onClick={this.onMapClicked}>
                      <Marker onClick={this.onMarkerClick} name={'Current location'}/>
                      <InfoWindow onClose={this.onInfoWindowClose}/>
                    </Map>
                  </div>
                {/* </ScrollLock> */}
            </Modal>
        </div>
      );
    }
  }

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCfts7ICdfHE1B_5_FAwYR9OchyGr5_9VE')
})(MapSnippet)

