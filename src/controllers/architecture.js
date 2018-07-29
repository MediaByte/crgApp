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
        open: false,
        left: false,
      };
  }
  doWeHaveListings = () => {
    if (this.props.listings.YGLResponse[0].hasOwnProperty('Listings')) {
      return true;
    } else return false;
  }
  render() {
	const { listings } = this.props
	const { doWeHaveListings } = this
	    if (listings.length <= 0) {
	      return <ProgressComponent />
	    } else {
	        return (
	          <div>
	             <Layout isUserAuthorized={this.props.isUserAuthorized}/>
	              <div className={"pt5 pb5"}>
	                { doWeHaveListings() ? <GetListings listings={listings.YGLResponse[0].Listings[0].Listing} /> : <ProgressComponent /> }
	              </div>
	          </div>
	        );
	      }      
  }
  componentDidMount() {
    this.props.requestListings(`https://crg-server.herokuapp.com/rentals?city_neighborhood=${this.props.city}&min_bed=${this.props.minBeds}&max_bed=${this.props.maxBeds}&detail_level=2&avail_from=${this.props.fromDate}&avail_to=${this.props.toDate}&max_rent=${this.props.maxPrice}&min_rent=${this.props.minPrice}`)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppArchitecture);

