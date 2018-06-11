
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

class AppArchitecture extends Component {

  constructor(props) {
    super(props);
      this.state = {
        from: '',
        to: '',
        bedValue: 1,
        minBeds: 1,
        maxBeds: 1,
        city: 'Somerville',
        open: false,
        listings: [],
        left: false,
        minPrice: '',
        maxPrice: '',
      };
    this.onChangeBed = this.onChangeBed.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleMinPriceChange = this.handleMinPriceChange.bind(this);
    this.handleMaxPriceChange = this.handleMaxPriceChange.bind(this);
    this.doWeHaveListings = this.doWeHaveListings.bind(this);
  }

  handleDateChange = name => event => {
    this.setState({ [name]: event.target.value });
   fetch(`https://crg-server.herokuapp.com/rentals&detail_level=2&avail_from=${name === 'from' ? event.target.value : this.state.from}&avail_to=${name === 'to' ? event.target.value : this.state.to}&city_neighborhood=${this.state.city}&min_bed=${this.state.minBeds}&max_bed=${this.state.maxBeds}&include_mls=1`)
      .then(xml => xml.text())
      .then(xml => convert.xml2js(xml, options))
      .then(data => { this.setState({ listings: data })})
      .catch(err => console.log(err));
  };

  onChangeBed = (event) => {
    this.setState({ minBeds: event.target.value, maxBeds: event.target.value, bedValue: event.target.value });
    fetch(`https://crg-server.herokuapp.com/rentals&detail_level=2&city_neighborhood=${this.state.city}&min_bed=${event.target.value}&max_bed=${event.target.value}&include_mls=1`)
      .then(xml => xml.text())
      .then(xml => convert.xml2js(xml, options))
      .then(data => { this.setState({ listings: data })})
      .catch(err => console.log(err));
  }

  handleCityChange = (event) => {
    listArray = 0
    this.setState({ city: event, });
    fetch(`https://crg-server.herokuapp.com/rentals&detail_level=2&city_neighborhood=${event}&min_bed=${this.state.minBeds}&max_bed=${this.state.maxBeds}&include_mls=1`)
      .then(xml => xml.text())
      .then(xml => convert.xml2js(xml, options))
      .then(data => { this.setState({ listings: data })})
      .catch(err => console.log(err));
  };

  handleMaxPriceChange = (event) => {
    this.setState({ maxPrice: event.target.value });
    fetch(`https://crg-server.herokuapp.com/rentals&detail_level=2&city_neighborhood=${this.state.city}&min_bed=${this.state.minBeds}&max_bed=${this.state.maxBeds}&min_rent=${this.state.minPrice}&max_rent=${event.target.value}&include_mls=1`)
      .then(xml => xml.text())
      .then(xml => convert.xml2js(xml, options))
      .then(data => { this.setState({ listings: data })})
      .catch(err => console.log(err));
  }

  handleMinPriceChange = (event) => {
    this.setState({ minPrice: event.target.value});
    fetch(`https://crg-server.herokuapp.com/rentals&detail_level=2&city_neighborhood=${this.state.city}&min_bed=${this.state.minBeds}&max_bed=${this.state.maxBeds}&min_rent=${event.target.value}&max_rent=${this.state.maxPrice}&include_mls=1`)
      .then(xml => xml.text())
      .then(xml => convert.xml2js(xml, options))
      .then(data => { this.setState({ listings: data })})
      .catch(err => console.log(err));
  };

  doWeHaveListings = (responseYGL) => {
    if (responseYGL.hasOwnProperty('Listings')) {
      return true;
    } else {
      return false;
    }
  }

  render() {

    listArray = this.state.listings;
    console.log(this.state.listings);
    const { doWeHaveListings } = this

    if (listArray.length === 0) {
      return <ProgressComponent />
    } else {
        return (
          <div>
            <Layout 
            //Date Component Arguements
              handleDateChange={this.handleDateChange}
              from={this.state.from}
              to={this.state.to}
            //Bedroom Component Arguements
              onChangeBed={this.onChangeBed} 
              bedValue={this.state.bedValue}
            //Location Component Arguments
              handleCityChange={this.handleCityChange}
              city={this.state.city}
            //Pricing Component Arguements
              handleMinPriceChange={this.handleMinPriceChange}
              handleMaxPriceChange={this.handleMaxPriceChange}
              minPrice={this.state.minPrice}
              maxPrice={this.state.maxPrice}
            />
              <div className='pt5'>
                  { doWeHaveListings(this.state.listings.YGLResponse[0]) ? <GetListings listings={this.state.listings.YGLResponse[0].Listings[0].Listing} /> : <ProgressComponent /> }
              </div>
          </div>
        );
      }      
  }

  componentDidMount() {
    fetch(`https://crg-server.herokuapp.com/rentals&city_neighborhood=${this.state.city}&min_bed=${this.state.minBeds}&max_bed=${this.state.maxBeds}&include_mls=1&detail_level=2`)
      .then(xml => xml.text())
      .then(xml => convert.xml2js(xml, options))
      .then(data => { this.setState({ listings: data })})
      .catch(err => console.log(err));
  }
}

export default AppArchitecture;

