import React, { Component } from 'react';
import './connect';
import 'tachyons';
import { Collapse, Card, Table, CardBody, Button } from 'reactstrap';
import MapSnippet from './GoogleMapIntegration';

const MapListings = ({ lat, long, streetnumber, streetname, price, city, photo, unit, beds, baths, key }) => {
// const title = `${streetnumber} ${streetname} #${unit}`
// const subTitle = `${city}, MA`
	return (
		<div className="ba self-center ma3 dib br2 shadow-5">
				<Card inverse style={{ width: 250, height: '100%', backgroundColor: '#333', borderColor: '#333' }}> 
					<CardBody className="border border-light">
					<MapSnippet lat={lat} long={long} />
					</CardBody>
						<img href='#' className='m-0 br3 grow img-fluid' style={{ width: 250, height: 200 }} src={photo} alt={`${streetnumber} ${streetname} #${unit}, ${city}, MA`} />					
					<CardBody body outline color="danger">
						<MoreInfo lat={lat} long={long} bd={beds} bth={baths} rent={price} />
					</CardBody>
				</Card>
			</div>		
	);
}

class MoreInfo extends Component {

	constructor(props) {
		super(props);
			this.toggle = this.toggle.bind(this);
				this.state = { collapse: false };
		}
		
	toggle() {
		this.setState({ collapse: !this.state.collapse });
	}

	render() {
		return (
			<div>
				<Button color="danger" size="sm" block onClick={this.toggle} style={{ marginBottom: '1rem' }}>Details</Button>
				<Collapse isOpen={this.state.collapse}>
					<Card inverse style={{ width: '100%', height: '100%', backgroundColor: '#333', borderColor: '#333' }}>
					<CardBody>
						<Table className='m-0 table table-sm table-striped table-dark text-center' style={{style: 'text-center'}}>
									<thead>
										<tr>
											<th>Beds</th>
											<th>Bath</th>
											<th>Rent</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row">{this.props.bd}</th>
											<td>{this.props.bth}</td>
											<td>${this.props.rent}</td>
										</tr>
									</tbody>
						</Table>
					</CardBody>
					</Card>	
				</Collapse>
			</div>
		);
	}
}


export default MapListings;