import React, { Component } from 'react';
// import GetListings from './connect';
import RendorRentalControls from './landing';
import ScrollLock from './scroll';
import ConnectToYGL from './yougotlistings';
const city = 'Cambridge';


class App extends Component {
  // constructor() {
  //   super();
  //     this.state = {
  //       listings: [],
  //       photos: [],
  //     };
  // }
    componentDidMount() {
      ConnectToYGL(city)
    }
      render() {
        return (
          <div>
            <ScrollLock>
              <RendorRentalControls />
            </ScrollLock>
          </div>
        );
      }
}

export default App;
