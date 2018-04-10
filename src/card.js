import React from 'react';
import './connect';
import { Button } from 'reactstrap';
import 'tachyons';
const MapListings = ({ streetnumber, streetname, price, city, photo, unit }) => {
	return (
		<div className="ba self-center ma3 tc dib br3 shadow-5">
			<img className='ba ma1 br3 b--washed-red grow' height="200" width="225" src={photo} alt={`${streetnumber} ${streetname} #${unit}, ${city}, MA`} />
				<div>
					<h6 className='mt2'>{streetnumber} {streetname} #{unit}</h6>
						<h6>{city}, MA</h6>
							<p className=''>Click below to learn more</p>
				</div>
					<div>	
						<Button>More info</Button>
					</div>
						<br/>
		</div>
	);
}
export default MapListings;