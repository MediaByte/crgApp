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

  handleChange = (event) => {
    this.setState({ amount: event.target.value });
    console.log(event.target.value);
  };

  onChangeBed = (beds) => {
      if (beds === 0) {
        listArray = 0
        this.setState({ minBeds: 0, maxBeds: 0, bedSlider: beds });
        fetch(`https://crg-server.herokuapp.com/rentals&city_neighborhood=${this.state.city}&min_bed=0&max_bed=0&include_mls=1`)
        .then(xml => xml.text())
        .then(xml => convert.xml2js(xml, options))
        .then(data => { this.setState({ listings: data })})
      } else if (beds === 5) {
        listArray = 0
        this.setState({ minBeds: 1, maxBeds: 1, bedSlider: beds });
        fetch(`https://crg-server.herokuapp.com/rentals&city_neighborhood=${this.state.city}&min_bed=1&max_bed=1&include_mls=1`)
        .then(xml => xml.text())
        .then(xml => convert.xml2js(xml, options))
        .then(data => { this.setState({ listings: data })})
      } else if (beds === 10) {
        listArray = 0
        this.setState({ minBeds: 2, maxBeds: 2, bedSlider: beds });
        fetch(`https://crg-server.herokuapp.com/rentals&city_neighborhood=${this.state.city}&min_bed=2&max_bed=2&include_mls=1`)
        .then(xml => xml.text())
        .then(xml => convert.xml2js(xml, options))
        .then(data => { this.setState({ listings: data })})
      } else if ( beds === 15) {
        listArray = 0
        this.setState({ minBeds: 3, maxBeds: 3, bedSlider: beds }); 
        fetch(`https://crg-server.herokuapp.com/rentals&city_neighborhood=${this.state.city}&min_bed=3&max_bed=3&include_mls=1`)
        .then(xml => xml.text())
        .then(xml => convert.xml2js(xml, options))
        .then(data => { this.setState({ listings: data })})
      } else if (beds === 20) {
        listArray = 0
        this.setState({ minBeds: 4, maxBeds: 4, bedSlider: beds });
        fetch(`https://crg-server.herokuapp.com/rentals&city_neighborhood=${this.state.city}&min_bed=4&max_bed=4&include_mls=1`)
        .then(xml => xml.text())
        .then(xml => convert.xml2js(xml, options))
        .then(data => { this.setState({ listings: data }) })
      } else if (beds === 25){
        listArray = 0
        this.setState({ minBeds: 5, maxBeds: '', bedSlider: beds });
        fetch(`https://crg-server.herokuapp.com/rentals&city_neighborhood=${this.state.city}&min_bed=5&include_mls=1`)
        .then(xml => xml.text())
        .then(xml => convert.xml2js(xml, options))
        .then(data => { this.setState({ listings: data })})
  }
}

  constructor() {
    super();
      this.state = {
        bathSlider: 1,
        bedSlider: 0,
        defaultValue: 0,
        minBeds: 3,
        maxBeds: 3,
        baths: 1,
        city: 'Somerville',
        pets: '',
        open: false,
        listings: [],
        left: false,
        amount: 1500,
      }
    this.onChangeBed = this.onChangeBed.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  render() {

    listArray = this.state.listings;
    console.log(this.state.listings)

    if (listArray.length === 0) {
      return <Loading />
    } else {
        return (
          <div>
            <Layout onChangeBed={this.onChangeBed} bedValue={this.state.bedSlider} handleChange={this.handleChange} amount={this.state.amount} />
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


