import React, { Component } from 'react';
import {Map, Marker, InfoWindow, GoogleApiWrapper} from 'google-maps-react';
import { Button, ModalHeader, Modal } from 'reactstrap';
import ScrollLock from './scroll';
import 'tachyons';
const style = {  width: '100%', height: '400px' }

class MapSnippet extends Component {
    constructor(props) {
      super(props);
        this.state = { modal: false, lat: 0, long: -0};
          this.toggle = this.toggle.bind(this);
    }
  
    toggle() {
      this.setState({ modal: !this.state.modal, lat: this.props.lat, long: this.props.long });
    }
  
    render() {
      return (
        <div>
          <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
            <Modal size='lg' isOpen={this.state.modal} toggle={this.toggle}>
              <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                <ScrollLock>  
                  <div>   
                    <Map style={style} google={this.props.google} initialCenter={{lat: this.state.lat, lng: this.state.long}} zoom={15} onClick={this.onMapClicked}>
                      <Marker onClick={this.onMarkerClick} name={'Current location'}/>
                      <InfoWindow onClose={this.onInfoWindowClose}/>
                    </Map>
                  </div>
                </ScrollLock>
            </Modal>
        </div>
      );
    }
  }

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCfts7ICdfHE1B_5_FAwYR9OchyGr5_9VE')
})(MapSnippet)

