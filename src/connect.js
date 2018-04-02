import React from 'react';
// import ScrollLock from './scroll';
import MapListings from './card';

const GetListings = (props) => {
	const cardComponent = props.map((listings, i) => {
debugger;
		return (
				<MapListings
				 	key={i} 
				 	streetnumber={listings.streetnumber[0]._text[0].value} 
				 	streetname={listings.streetname[0]._text[0]} 
				 	unit={listings.unit[0]._text[0]} 
				 	city={listings.city[0]._text[0]} 
				 	beds={listings.beds[0]._text[0]} 
				 	baths={listings.baths[0]._text[0]} 
				 	availabledate={listings.availabledate[0]._text[0]} 
				 	price={listings.price[0]._text[0]} 
				 	pet={listings.pet} 
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