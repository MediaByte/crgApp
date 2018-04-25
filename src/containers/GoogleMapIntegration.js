import React, { Component } from 'react';
import {Map, Marker, InfoWindow, GoogleApiWrapper} from 'google-maps-react';
import { Modal } from 'reactstrap';
import IconButton from 'material-ui/IconButton';
import MapsPinDrop from '@material-ui/icons/Map';
import 'tachyons';

const style = {  width: '100%', height: '350px' }

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
          <div>
            <IconButton aria-label="Google Map" onClick={this.toggle}>
              <MapsPinDrop />
            </IconButton>
          </div>
          <div>
            <Modal className='shadow-5 mt5 pa2' size='lg' isOpen={this.state.modal} toggle={this.toggle}>
              <div>  
                <div>   
                  <Map style={style} google={this.props.google} initialCenter={{lat: this.state.lat, lng: this.state.long}} zoom={14} onClick={this.onMapClicked}>
                    <Marker onClick={this.onMarkerClick} name={'Current location'} />
                    <InfoWindow onOpen={this.windowHasOpened} onClose={this.windowHasClosed} visible={this.state.showingInfoWindow}>
                      <div>
                        <h1>{this.props.title + this.props.subTitle}</h1>
                      </div>
                    </InfoWindow>
                  </Map>
                </div> 
              </div>
            </Modal>
          </div>
        </div>
      );
    }
  }

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCfts7ICdfHE1B_5_FAwYR9OchyGr5_9VE')
})(MapSnippet)