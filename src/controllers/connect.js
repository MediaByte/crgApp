import React from 'react';
import MapListings from '../components/card/CardComponent';
import 'tachyons';

const GetListings = ({ listings }) => {
	const cardComponent = listings.map((listing, i) => {
		return (
			<div>
				<MapListings
					key={listing.ID[0]._text[0]}
					listingid={listing.ID[0]._text[0]}
					streetnumber={listing.StreetNumber[0]._text[0]}
					movedate={listing.hasOwnProperty('AvailableDate') ? listing.AvailableDate[0]._text[0] : 'for immediate move-in'} 
					streetname={listing.StreetName[0]._text[0]} 
					unit={listing.Unit[0].hasOwnProperty('_text') ? listing.Unit[0]._text[0] : '111'}
					city={listing.City[0]._text[0]} 
					beds={listing.Beds[0]._text[0]} 
					baths={listing.Baths[0]._text[0]} 
					price={listing.Price[0]._text[0]} 
					photo={listing.hasOwnProperty("Photos") ? listing.Photos[0].Photo[0]._text[0] : 'https://image.freepik.com/free-vector/white-room-with-light-and-coming-soon-text_1017-5070.jpg'}
					photoArray={listing.hasOwnProperty("Photos") ? listing.Photos[0].Photo : 'https://image.freepik.com/free-vector/white-room-with-light-and-coming-soon-text_1017-5070.jpg'}
					lat={listing.hasOwnProperty("Latitude") ? listing.Latitude[0]._text[0] : '42.3736158'}  
					long={listing.hasOwnProperty("Longitude") ? listing.Longitude[0]._text[0] : '-71.1097335'}
					electric={listing.IncludeElectricity[0]._text[0]}
					gas={listing.IncludeGas[0]._text[0]}
					heat={listing.IncludeHeat[0]._text[0]}
					hotwater={listing.IncludeHotWater[0]._text[0]}
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