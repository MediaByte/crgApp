import React from 'react';
import 'tachyons';
import './connect';

const MapListings = ({ streetnumber, streetname, price, city, photo, unit }) => {
	// debugger;
	return (
		<section className='mw7-ns center ph9-ns dib h-m br8 ba dark-gray b--black-10 mh1 mv0 w-100 w-50-m w-25-l shadow-5'>
	  		<img className='h-m db w-100 br2 br--top' width='200' height='250' src={`${photo}`} alt='View listing'/>
	 		<div className='pa2 ph3-ns pb3-ns'>
				<div className='dt w-100 mt1'>
						<div className='dtc'>
						<h5 className='f6 f5-ns mv0'>{`${streetnumber}`} {`${streetname}`} {`#${unit}`} </h5>
						</div>
	  					<div className='dtc tr'>
	    					<h3 className='f5 mv0'>{`$${price}`}</h3>
	  					</div>
					</div>
	  					<div className='dtc'>
	    					<h6 className='f6 f6-ns mv0'>{`${city}`}, MA</h6>
	  				</div>
				    <p className='f6 lh-copy measure mt2 mid-gray'>

				    </p>
				</div>
		</section>
		
	);
}

export default MapListings;