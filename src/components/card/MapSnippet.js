//ReactJS
import React, { Component } from 'react';

//Google Map Components
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

//CSS & styling
import 'tachyons';

const style = {  
  width: '100%', 
  height: '500px' 
}

class MapSnippet extends Component {
  render() {
    return (
      <div>   
        <Map style={style} google={this.props.google} initialCenter={{lat: this.props.lat, lng: this.props.long}} zoom={15} onClick={this.onMapClicked}>
          <Marker onClick={this.onMarkerClick} />
        </Map>
      </div> 
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCfts7ICdfHE1B_5_FAwYR9OchyGr5_9VE')
})(MapSnippet)