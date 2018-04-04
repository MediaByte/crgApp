import React from 'react';
import MapListings from './card';

const GetListings = ({ listings }) => {
	// debugger;
	const cardComponent = listings.map((listings) => {
		return (
			<MapListings
			 	key={listings.ID._text} 
			 	streetnumber={listings.StreetNumber._text} 
			 	streetname={listings.StreetName._text} 
			 	city={listings.City._text} 
			 	beds={listings.Beds._text} 
			 	baths={listings.Baths._text} 
			 	price={listings.Price._text} 
			 	photo={listings.hasOwnProperty('Photos') ? listings.Photos.Photo._text : 'https://image.freepik.com/free-vector/white-room-with-light-and-coming-soon-text_1017-5070.jpg'}
			/> 
		);
	})
	
	return (
		<div>
			{cardComponent}
		</div>
	);
}

export default GetListings;