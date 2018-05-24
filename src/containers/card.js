import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Card, { CardHeader, CardMedia, CardActions } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import red from 'material-ui/colors/red';
import grey from 'material-ui/colors/grey';
import MapSnippet from './GoogleMapIntegration';

const styles = theme => ({
	card: {
	 	maxWidth: 325,
	 	width: 325,
	 	margin: 25,
	 	height: 363
	},
	media: {
		height: 225,
		paddingTop: '56.25%', // 16:9
		paddingBottom: 50,
		marginBottom: 0,
	},
	actions: {
		display: 'flex',
		paddingTop: 0,
		backgroundColor: grey[200],
		marginTop: 0,
	},

	bigAvatar: {
		backgroundColor: red[400],
    	width: 50,
    	height: 50,
  },
  });
  
class MapListings extends React.Component {
  
	render() {
		const { 
			classes,
			lat, 
			long, 
			streetnumber, 
			streetname, 
			price, 
			city, 
			photo, 
			unit, 
			beds, 
			baths,  
		} = this.props

		const title = `${streetnumber} ${streetname} #${unit}`
		const subTitle = `${city} MA`

			return (
				<div>
				  <Card className={classes.card}>
					<CardHeader
					  title={title}
					  subheader={subTitle}
					  avatar={
						<Avatar aria-label="Price" className={classes.bigAvatar}>
						     <Typography variant="body2" align="center">
						        {`$${price}`}
						     </Typography>
						</Avatar>
					  }
					/>
					<CardMedia
					  className={classes.media}
					  image={photo}
					  title={title}
					/>
					<CardActions className={classes.actions}>
					  	<MapSnippet 
					  		title={title} 
					  		subTitle={subTitle} 
					  		lat={lat} 
					  		long={long}
					  	/>
					</CardActions>
				  </Card>
				</div>
			);
	}
}
  
  MapListings.propTypes = {
	classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(MapListings);