import React, { Component } from 'react';
import GetListings from './connect';


class App extends Component {
  constructor() {
    super();
      this.state = {listings: []};
  }

  componentDidMount() {
  const convert = require('xml-js');
  const options = {
    ignoreComment: true, 
    compact: true,
    ignoreDeclaration: true,
    alwaysArray: false,
    ignoreAttributes: true,
    ignoreCdata: true,
    alwaysChildren: false,
    nativeType: true,
    trim: true
  };
    fetch('https://www.yougotlistings.com/api/rentals/search.php?key=1cY2iaM5eLEWXp7wmtUvgSPsozCJqQDubZ0BNKnk&include_mls=1')
    .then(xml => xml.text())
    .then(xml => convert.xml2js(xml, options))
    .then(data => this.setState({ listings: data }))
    .then(console.log);
  }

  render() {
    const listArray = this.state.listings;
    if (listArray.length === 0) {
      return (
        <div>
          <p className='tc'> LOADING APP... </p>
        </div>
      )
    } else {
        const listArray = this.state.listings.YGLResponse.Listings.Listing;
        return (
          <div>
            <GetListings listings={listArray} />
          </div>
        );
      }
    }
}

export default App;
