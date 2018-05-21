import React, {Component} from 'react';
import GetListings from '../containers/connect';
import Loading from '../containers/Loading'
import { Row, Col } from 'antd'
import AlertDialog from '../containers/AlertDialog';
import Layout from './Layout';
import 'tachyons';
import 'antd/dist/antd.css';
const convert = require('xml-js');
const options = {ignoreComment: true, compact: true, ignoreDeclaration: true, alwaysArray: false, ignoreAttributes: true, ignoreCdata: true, alwaysChildren: false, nativeType: true, trim: true};
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
        fetch(`https://crg-server.herokuapp.com/rentals&city_neighborhood=${this.state.city}&min_bed=0&max_bed=0`)
        .then(xml => xml.text())
        .then(xml => convert.xml2js(xml, options))
        .then(data => { this.setState({ listings: data })})

      } else if (beds === 5) {
        listArray = 0
        this.setState({ minBeds: 1, maxBeds: 1, bedSlider: beds });
        fetch(`https://crg-server.herokuapp.com/rentals&city_neighborhood=${this.state.city}&min_bed=1&max_bed=1`)
        .then(xml => xml.text())
        .then(xml => convert.xml2js(xml, options))
        .then(data => { this.setState({ listings: data })})
      } else if (beds === 10) {
        listArray = 0
        this.setState({ minBeds: 2, maxBeds: 2, bedSlider: beds });
        fetch(`https://crg-server.herokuapp.com/rentals&city_neighborhood=${this.state.city}&min_bed=2&max_bed=2`)
        .then(xml => xml.text())
        .then(xml => convert.xml2js(xml, options))
        .then(data => { this.setState({ listings: data })})
        
      } else if ( beds === 15) {
        listArray = 0
        this.setState({ minBeds: 3, maxBeds: 3, bedSlider: beds }); 
        fetch(`https://crg-server.herokuapp.com/rentals&city_neighborhood=${this.state.city}&min_bed=3&max_bed=3`)
        .then(xml => xml.text())
        .then(xml => convert.xml2js(xml, options))
        .then(data => { this.setState({ listings: data })})
        
      } else if (beds === 20) {
        listArray = 0
        this.setState({ minBeds: 4, maxBeds: 4, bedSlider: beds });
        fetch(`https://crg-server.herokuapp.com/rentals&city_neighborhood=${this.state.city}&min_bed=4&max_bed=4`)
        .then(xml => xml.text())
        .then(xml => convert.xml2js(xml, options))
        .then(data => { this.setState({ listings: data })})
        
      } else if (beds === 25){
        listArray = 0
        this.setState({ minBeds: 5, maxBeds: 5, bedSlider: beds });
        fetch(`https://crg-server.herokuapp.com/rentals&city_neighborhood=${this.state.city}&min_bed=5&max_bed=5`)
        .then(xml => xml.text())
        .then(xml => convert.xml2js(xml, options))
        .then(data => { this.setState({ listings: data })})
      } else
          return <AlertDialog title='Server' message='Something went wrong in your bedroom search parameters and the server was not able to return any listings. Please check your bedroom settings and I will see if there is anything available in your criteria' />
      }


  constructor() {
    super();
      this.state = {
        bathSlider: 1,
        bedSlider: 0,
        defaultValue: 0,
        minBeds: 2,
        maxBeds: 2,
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
                <Row>
                  <Col>
                    <div>
                      <GetListings listings={this.state.listings.YGLResponse.Listings.Listing} />
                    </div>
                  </Col>
                </Row>
              </div>
          </div>
        );
      }      
  }

  componentDidMount() {

    fetch(`https://crg-server.herokuapp.com/rentals&city_neighborhood=${this.state.city}&min_bed=${this.state.minBeds}&max_bed=${this.state.maxBeds}&baths=${this.state.baths}`)
      .then(xml => xml.text())
      .then(xml => convert.xml2js(xml, options))
      .then(data => { this.setState({ listings: data })})
      .catch(err => console.log(err))

  }
}
