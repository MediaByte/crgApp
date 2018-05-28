import React from 'react';
import MapListings from '../components/CardComponent';
import 'tachyons';

const GetListings = ({ listings }) => {
	const cardComponent = listings.map((listing, i) => {
		return (
			<div>
				<MapListings
					key={i}
					streetnumber={listing.StreetNumber[0]._text[0]} 
					streetname={listing.StreetName[0]._text[0]} 
					unit={listing.Unit[0].hasOwnProperty('_text') ? listing.Unit[0]._text[0] : '111'}
					city={listing.City[0]._text[0]} 
					beds={listing.Beds._text} 
					baths={listing.Baths._text} 
					price={listing.Price._text} 
					photo={listing.hasOwnProperty("Photos") ? listing.Photos[0].Photo[0]._text[0] : 'https://image.freepik.com/free-vector/white-room-with-light-and-coming-soon-text_1017-5070.jpg'}
					lat={listing.hasOwnProperty("Latitude") ? listing.Latitude[0]._text[0] : '42.3736158'}  
					long={listing.hasOwnProperty("Longitude") ? listing.Longitude[0]._text[0] : '-71.1097335'}
				/>
			</div>
		);
	})
	return (
		<div className='flex flex-wrap justify-center'>
			{cardComponent}
		</div>	
	);
}
export default GetListings;