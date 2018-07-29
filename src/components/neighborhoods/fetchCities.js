const preProcesser = (city, neighborhoods=[]) => {
	const suggestions = neighborhoods.map((n) => {
			return {
				value: `${city}:${n._text[0]}`,
				label: `${city} | ${n._text[0]}`
			}
	})
	suggestions.unshift({ "value": city,"label": city });	
	return suggestions;
}
const fetchCities = () => 
	fetch('http://crg-server.herokuapp.com/office')
		.then(response => response.json())
		.then(data => data.YGLResponse[0].Accounts[0].Account[0].DefaultCityNeighborhood[0].City)
		.then((suggestions) => {
			// eslint-disable-next-line
			return suggestions.map((city) => {
				if (city.Name[0]._text[0] === 'Cambridge' || city.Name[0]._text[0] === 'Somerville' || city.Name[0]._text[0] === 'Medford' || city.Name[0]._text[0] === 'Boston') {
					city = preProcesser(city.Name[0]._text[0], city.Neighborhood);
						return city;
				}
			})
		})
		.then(data => data.filter(d => d))
		.then(data => {
			let suggestions = []
				data.forEach((item) => {
					suggestions.push.apply(suggestions, item);
				});

					return suggestions;
		})
export default fetchCities;