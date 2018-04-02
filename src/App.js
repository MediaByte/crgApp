import React, { Component } from 'react';
import GetListings from './connect';
import RendorRentalControls from './landing';
import ScrollLock from './scroll';
import ConnectToYGL from './yougotlistings';


class App extends Component {
  constructor() {
    super();
      this.state = {
        listings: [],
        photos: [],
      };
  }
    componentDidMount() {
      ConnectToYGL([`1cY2iaM5eLEWXp7wmtUvgSPsozCJqQDubZ0BNKnk`])
    }
      render() {
        return (
          <div>
            <RendorRentalControls />
              <ScrollLock>
                <GetListings listings={this.state.listings}/>
              </ScrollLock>
          </div>
        );
      }
}

export default App;
