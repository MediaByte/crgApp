import React, { Component } from 'react';

//Project Components
import GetListings from '../controllers/connect';
import Loading from '../components/Loading'
import Layout from './Layout';

//Styles and Designs
import 'tachyons';

//Converts XML response to an JS array
const convert = require('xml-js');
const options = {
    ignoreComment: true, 
    compact: true, 
    ignoreDeclaration: true, 
    alwaysArray: true, 
    ignoreAttributes: true, 
    ignoreCdata: true, 
    alwaysChildren: false, 
    nativeType: true, 
    trim: true
};


let listArray = 0

export default class AppArchitecture extends Component {

  budgetHandleChange = (event) => {
    this.setState({ amount: event.target.value });
    console.log(event.target.value);
  };

  onChangeBed = (event, value) => {
    listArray = 0
    this.setState({ minBeds: value, maxBeds: value, bedSlider: value });
    fetch(`https://crg-server.herokuapp.com/rentals&city_neighborhood=${this.state.city}&min_bed=${value}&max_bed=${value}&include_mls=1`)
      .then(xml => xml.text())
      .then(xml => convert.xml2js(xml, options))
      .then(data => { this.setState({ listings: data })})
      .catch(err => console.log(err));
  }


  constructor(props) {
    super(props);
      this.state = {
        bedSlider: 2,
        minBeds: 3,
        maxBeds: 3,
        city: 'Somerville',
        open: false,
        listings: [],
        left: false,
        amount: 1500,
      };
    this.onChangeBed = this.onChangeBed.bind(this);
  }

  render() {

    listArray = this.state.listings;
    console.log(this.state.listings);

    if (listArray.length === 0) {
      return <Loading />
    } else {
        return (
          <div>
            <Layout 
              //Bedroom Components
              onChangeBed={this.onChangeBed} 
              bedValue={this.state.bedSlider}
            />
              <div className='pt5'>
                  <GetListings listings={this.state.listings.YGLResponse[0].hasOwnProperty("Listings") ? this.state.listings.YGLResponse[0].Listings[0].Listing : alert('no listings found')} />
              </div>
          </div>
        );
      }      
  }

  componentDidMount() {
    fetch(`https://crg-server.herokuapp.com/rentals&city_neighborhood=${this.state.city}&min_bed=${this.state.minBeds}&max_bed=${this.state.maxBeds}&include_mls=1`)
      .then(xml => xml.text())
      .then(xml => convert.xml2js(xml, options))
      .then(data => { this.setState({ listings: data })})
      .catch(err => console.log(err));
  }
}


