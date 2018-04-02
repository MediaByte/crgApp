// import React from 'react';
import GetListings from './connect.js'
const convert = require('xml-js');
const options = {
	ignoreComment: true, 
	compact: true,
	ignoreDeclaration: true,
	alwaysArray: true,
	ignoreAttributes: true,
	ignoreCdata: true,
	alwaysChildren: true,
	nativeType: true,
	trim: true
};
var resYGL = {listings: []};

const ConnectToYGL = (props) => {
		fetch('https://www.yougotlistings.com/api/rentals/search.php?key=1cY2iaM5eLEWXp7wmtUvgSPsozCJqQDubZ0BNKnk&include_mls=1&city_neighborhood=' + props)
			.then(xml => xml.text())
			.then(xml => xml.toLowerCase())
			.then(xml => convert.xml2json(xml, options))
			.then(data => JSON.parse(data))
			.then(data => {
				console.log(data.yglresponse[0].listings[0].listing)
				resYGL.listings = data.yglresponse[0].listings[0].listing
				GetListings(resYGL.listings)
				
			})
} 


export default ConnectToYGL;


