
import React, { Component } from 'react';

//Project Components
import GetListings from '../controllers/connect';
import Layout from '../views/Layout';
import ProgressComponent from '../components/progress/ProgressComponent';

//Styles and Designs
import 'tachyons';

//Converts XML response to JS array
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

  onChangeBed = (event, value) => {
    listArray = 0
    this.setState({ minBeds: value, maxBeds: value, bedSlider: value });
    fetch(`https://crg-server.herokuapp.com/rentals&city_neighborhood=${this.state.city}&min_bed=${value}&max_bed=${value}&include_mls=1`)
      .then(xml => xml.text())
      .then(xml => convert.xml2js(xml, options))
      .then(data => { this.setState({ listings: data })})
      .catch(err => console.log(err));
  }

  handleCityChange = (event) => {
    listArray = 0
    this.setState({ city: event, });
    fetch(`https://crg-server.herokuapp.com/rentals&city_neighborhood=${event}&min_bed=${this.state.minBeds}&max_bed=${this.state.maxBeds}&include_mls=1`)
      .then(xml => xml.text())
      .then(xml => convert.xml2js(xml, options))
      .then(data => { this.setState({ listings: data })})
      .catch(err => console.log(err));
  };

  handlePriceChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
    listArray = 0
    fetch(`https://crg-server.herokuapp.com/rentals&city_neighborhood=${this.state.city}&min_bed=${this.state.minBeds}&max_bed=${this.state.maxBeds}&min_rent=${this.state.minPrice}&max_rent=${this.state.maxPrice}&include_mls=1`)
      .then(xml => xml.text())
      .then(xml => convert.xml2js(xml, options))
      .then(data => { this.setState({ listings: data })})
      .catch(err => console.log(err));
  };


  constructor(props) {
    super(props);
      this.state = {
        bedSlider: 3,
        minBeds: 3,
        maxBeds: 3,
        city: 'Somerville',
        open: false,
        listings: [],
        left: false,
        minPrice: '',
        maxPrice: '',
      };
    this.onChangeBed = this.onChangeBed.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
  }

  render() {

    listArray = this.state.listings;
    console.log(this.state.listings);

    if (listArray.length === 0) {
      return <ProgressComponent />
    } else {
        return (
          <div>
            <Layout 
            //Bedroom Component Arguements
              onChangeBed={this.onChangeBed} 
              bedValue={this.state.bedSlider}
            //Location Component Arguments
              handleCityChange={this.handleCityChange}
              city={this.state.city}
            //Pricing Component Arguements
              handlePriceChange={this.handlePriceChange}
              minPrice={this.state.minPrice}
              maxPrice={this.state.maxPrice}
            />
              <div className='pt5'>
                  <GetListings 
                  listings={this.state.listings.YGLResponse[0].hasOwnProperty("Listings") ? this.state.listings.YGLResponse[0].Listings[0].Listing : alert('no listings found')} />
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


