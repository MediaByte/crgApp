import React from 'react';
import MapListings from './card';
import 'tachyons';

const GetListings = ({ listings }) => {
	console.log(listings)
	const cardComponent = listings.map((listings, i) => {
		return (
			<div>
				<MapListings
					key={listings.ID}
					streetnumber={listings.StreetNumber._text} 
					streetname={listings.StreetName._text} 
					unit={listings.Unit.hasOwnProperty('_text') ? listings.Unit._text : '111'}
					city={listings.City._text} 
					beds={listings.Beds._text} 
					baths={listings.Baths._text} 
					price={listings.Price._text} 
					photo={listings.hasOwnProperty('Photos') ? listings.Photos.Photo._text : 'https://image.freepik.com/free-vector/white-room-with-light-and-coming-soon-text_1017-5070.jpg'}
					lat={listings.Latitude._text} 
					long={listings.Longitude._text}
					includeselectric={listings.IncludeElectricity._text}
					includesgas={listings.IncludeGas._text}
					includesheat={listings.IncludeHeat._text}
					includeshotwater={listings.IncludeHotWater._text}
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