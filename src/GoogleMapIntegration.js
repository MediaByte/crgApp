// AIzaSyCfts7ICdfHE1B_5_FAwYR9OchyGr5_9VE - Google API Key
import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import ScrollLock from './scroll';
import 'tachyons';
const style = {  width: '100%', height: '300px' }

class MapSnippet extends Component {
    constructor(props) {
      super(props);
      this.state = {
        modal: false
      };
  
      this.toggle = this.toggle.bind(this);
    }
  
    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }
  
    render() {
        debugger;
      return (
        <div>
          <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
          <Modal size='lg' isOpen={this.state.modal} toggle={this.toggle}>
            <ScrollLock>  
                <ModalBody>
                    <div style={style}>   
                        <Map
                            google={this.props.google}
                            center={{
                                lat: this.props.lat,
                                lng: this.props.long
                            }}
                            zoom={15}
                            onClick={this.onMapClicked}
                        >
                            <Marker 
                                onClick={this.onMarkerClick}
                                name={'Apartment Location'} 
                            />
                        </Map>
                    </div>
                </ModalBody>
            </ScrollLock>
                <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>Done</Button>
                </ModalFooter>
          </Modal>
        </div>
      );
    }
  }

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCfts7ICdfHE1B_5_FAwYR9OchyGr5_9VE')
})(MapSnippet)

