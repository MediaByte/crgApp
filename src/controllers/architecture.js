//ReactJS
import React, { Component } from 'react';

//State
import { connect } from 'react-redux';
import { 
  city, 
  fromDate, 
  toDate, 
  minBeds, 
  maxBeds, 
  minPrice, 
  maxPrice, 
  requestListings 
} from '../state/actions'

//Project Components
import GetListings from '../controllers/connect';
import Layout from '../views/Layout';
import ProgressComponent from '../components/progress/ProgressComponent';

//CSS 
import 'tachyons';

const mapStateToProps = state => {
  return {
    city: state.userSettings.city,
    fromDate: state.userSettings.fromDate,
    toDate: state.userSettings.toDate,
    minBeds: state.userSettings.minBeds,
    maxBeds: state.userSettings.maxBeds,
    minPrice: state.userSettings.minPrice,
    maxPrice: state.userSettings.maxPrice,
    listings: state.requestListings.listings
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeCity: (props) => dispatch(city(props)),
    onFromDateChange: (event) => dispatch(fromDate(event.target.value)),
    onToDateChange: (event) => dispatch(toDate(event.target.value)),
    onMinBedsChange: (event) => dispatch(minBeds(event.target.value)),
    onMaxBedsChange: (event) => dispatch(maxBeds(event.target.value)),
    onMinRentChange: (event) => dispatch(minPrice(event.target.value)),
    onMaxRentChange: (event) => dispatch(maxPrice(event.target.value)),
    requestListings: (link) => dispatch(requestListings(link))
  }
}

class AppArchitecture extends Component {
  constructor(props) {
    super(props);
      this.state = {
        bedValue: 1,
        open: false,
        left: false,
      };

  }

  handleCityChange = (event) => {
    this.props.changeCity(event)
    this.props.requestListings(`https://crg-server.herokuapp.com/rentals?city_neighborhood=${this.props.city}&min_bed=${this.props.minBeds}&max_bed=${this.props.maxBeds}&detail_level=2&avail_from=${this.props.fromDate}&avail_to=${this.props.toDate}`)
    this.forceUpdate();
  }

  handleDateChange = name => event => {
  this.setState({ [name]: event.target.value });
  fetch(`https://crg-server.herokuapp.com/rentals?detail_level=2&avail_from=${name === 'from' ? event.target.value : this.state.from}&avail_to=${name === 'to' ? event.target.value : this.state.to}&city_neighborhood=${this.state.city}&min_bed=${this.state.minBeds}&max_bed=${this.state.maxBeds}&include_mls=1`)
    .then(data => data.json())
    .then(data => { this.setState({ listings: data })})
    .catch(err => console.log(err));
  };

  onChangeBed = (event) => {
    this.setState({ minBeds: event.target.value, maxBeds: event.target.value, bedValue: event.target.value });
    fetch(`https://crg-server.herokuapp.com/rentals?detail_level=2&city_neighborhood=${this.state.city}&min_bed=${event.target.value}&max_bed=${event.target.value}&include_mls=1`)
      .then(data => data.json())
      .then(data => { this.setState({ listings: data })})
      .catch(err => console.log(err));
  }

  handleMaxPriceChange = (event) => {
    this.setState({ maxPrice: event.target.value });
    fetch(`https://crg-server.herokuapp.com/rentals?detail_level=2&city_neighborhood=${this.state.city}&min_bed=${this.state.minBeds}&max_bed=${this.state.maxBeds}&min_rent=${this.state.minPrice}&max_rent=${event.target.value}&include_mls=1`)
      .then(data => data.json())
      .then(data => { this.setState({ listings: data })})
      .catch(err => console.log(err));
  }

  handleMinPriceChange = (event) => {
    this.setState({ minPrice: event.target.value});
    fetch(`https://crg-server.herokuapp.com/rentals?detail_level=2&city_neighborhood=${this.state.city}&min_bed=${this.state.minBeds}&max_bed=${this.state.maxBeds}&min_rent=${event.target.value}&max_rent=${this.state.maxPrice}&include_mls=1`)
      .then(data => data.json())
      .then(data => { this.setState({ listings: data })})
      .catch(err => console.log(err));
  };

  doWeHaveListings = () => {
    if (this.props.listings.YGLResponse[0].hasOwnProperty('Listings')) {
      return true;
    } else return false;
  }

  render() {
	const { listings } = this.props
	const { doWeHaveListings } = this

	    if (listings.length === 0) {
	      return <ProgressComponent />
	    } else {
	        return (
	          <div>
	            <Layout 
	            //Date Component Arguements
	              handleDateChange={this.handleDateChange}
	              from={this.props.from}
	              to={this.props.to}
	            //Bedroom Component Arguements
	              onChangeBed={this.onChangeBed} 
	              bedValue={this.props.bedValue}
	            //Location Component Arguments
	              handleCityChange={this.handleCityChange}
	              city={this.props.city}
	            //Pricing Component Arguements
	              handleMinPriceChange={this.handleMinPriceChange}
	              handleMaxPriceChange={this.handleMaxPriceChange}
	              minPrice={this.props.minPrice}
	              maxPrice={this.props.maxPrice}
              //Authorization
                isUserAuthorized={this.props.isUserAuthorized}
	            />
	              <div className={"mt5 pb5"}>
	                { doWeHaveListings() ? <GetListings listings={listings.YGLResponse[0].Listings[0].Listing} /> : <ProgressComponent /> }
	              </div>
	          </div>
	        );
	      }      
  }

  componentDidMount() {
    const { requestListings } = this.props
      requestListings(`https://crg-server.herokuapp.com/rentals?city_neighborhood=${this.props.city}&min_bed=${this.props.minBeds}&max_bed=${this.props.maxBeds}&detail_level=2&avail_from=${this.props.fromDate}&avail_to=${this.props.toDate}`)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppArchitecture);

