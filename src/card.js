import React, { Component } from 'react';
import './connect';
import 'tachyons';
import { Row, Col, Collapse, Card, CardBody, Button } from 'reactstrap';
import MapSnippet from './GoogleMapIntegration';
import RequestShowingButton from './RequestShowing';
import ShowListing from './ShowListings'

const MapListings = ({ lat, long, streetnumber, streetname, price, city, photo, unit, beds, baths, key }) => {
	const title = `${streetnumber} ${streetname} #${unit}`
	const subTitle = `${city} MA`
		return (
			<div className="avenir ba ma3 dib br2 shadow-5">
				<Card className='bg-dark text-white shadow-5 border border-secondary' style={{ width: '100%', height: '100%' }}> 
					<CardBody className='flex justify-center border border-secondary border-top-0 border-right-0 border-left-0 pt3 pl0 pr0'>
						<Row className='bg-dark' style={{ width: '100%', height: '100%' }}>
							<Col className='flex justify-center border border-secondary border-top-0 border-bottom-0 border-left-0' xs={4}>
								<ShowListing modalTitle ={`Listing Sheet: ${title} ${subTitle}`} /> 
							</Col>
							<Col className='flex justify-center border border-secondary border-top-0 border-bottom-0 border-left-0' xs={4}>
								<RequestShowingButton modalTitle='Add to show list'/>
							</Col>
							<Col className='flex justify-center' xs={4}>
								<MapSnippet lat={lat} long={long} modalTitle={title} modalSubTitle={subTitle}/>
							</Col>
						</Row>
					</CardBody>

					<CardBody>
						<Row className='no-gutters'>
							<Col className='ma0 pa0'>					
								<img 
									href='#' 
									className='grow rounded mx-auto d-block'
									style={{ width: '210px', height: '180px' }} 
									src={photo} 
									alt={'Click here for the pictures'} 
								/>
							</Col>
						</Row>
						<Row className='no-gutters'>
							<Col className='mt3' xs={12}>
								<p className='small b m-0 p-0 avenir'>{title}</p>
							</Col>
						</Row>
						<Row>
							<Col xs={6}>
								<p className='small i avenir m-0 p-0 mb0'>{subTitle}</p>
							</Col>
						</Row>
						<Row className='no-gutters bg-dark mt3 mb0 pb0 border border-secondary'>
							<Col className='flex justify-center' xs={4}>
								Beds
							</Col>
							<Col className='flex justify-center' xs={4}>
								Baths
							</Col>
							<Col className='flex justify-center' xs={4}>
								Rent
							</Col>
						</Row>
						<Row className='no-gutters bg-dark'>
							<Col className='flex justify-center' xs={4}>
								<p>{beds}</p>
							</Col>
							<Col className='flex justify-center' xs={4}>
								<p>{baths}</p>
							</Col>
							<Col className='flex justify-center' xs={4}>
								<p>${price}</p>
							</Col>
						</Row>	
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
				<Button className='shadow-5  avenir' color="danger" size="sm" block onClick={this.toggle} style={{ marginBottom: '1rem' }}>Details</Button>
					<Collapse isOpen={this.state.collapse}>
						<Card className='avenir bg-dark text-white pa0 ma0' style={{ width: '100%', height: '100%' }}>
							<CardBody>
								
									Content goes here
								
							</CardBody>
						</Card>	
				</Collapse>
			</div>
		);
	}
}
export default MapListings;