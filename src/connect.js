import React from 'react';
import MapListings from './card'
const GetListings = ({ listings }) => {
	const cardComponent = listings.map((listings, i) => {
		return (
			<MapListings
			 	key={i} 
			 	streetnumber={listings.StreetNumber} 
			 	streetname={listings.StreetName} 
			 	unit={listings.Unit} 
			 	city={listings.City} 
			 	beds={listings.Beds} 
			 	baths={listings.Baths} 
			 	available={listings.AvailableDate} 
			 	price={listings.Price} 
			 	pet={listings.Pet} 
			 	includes={listings.RentIncludes} 
			 	photo={listings.Photos.Photo}
			 	listing_id={listings.ID}
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