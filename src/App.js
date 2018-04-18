import React, { Component } from 'react';
import GetListings from './connect';
import PersistentDrawer from './navigation';
import ScrollToTop from 'react-scroll-up'
import { ic_arrow_upward } from 'react-icons-kit/md/ic_arrow_upward'; 
import Icon from 'react-icons-kit';

class RentalApp extends Component {
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
  } 
  render() {
    const listArray = this.state.listings;
    console.log(listArray)
      if (listArray.length === 0) {
        return (
          <div>
            <PersistentDrawer />
          </div>
        )
      } else {
          const listArray = this.state.listings.YGLResponse.Listings.Listing;
            return (
              <div>
                <PersistentDrawer />
                  <GetListings listings={listArray} /> 
                    <ScrollToTop showUnder={160}>
                      <span className='br4 rounded'>
                        <Icon
                          style={{ color: '#FF0017' }} 
                          className='border border-danger br4'
                          size={40} 
                          icon={ic_arrow_upward} 
                        />
                      </span>
                    </ScrollToTop>
              </div>
            )
        }
    }
}
export default RentalApp;