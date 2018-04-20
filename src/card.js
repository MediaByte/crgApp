import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Map from '@material-ui/icons/Map';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MapSnippet from './GoogleMapIntegration';

const styles = theme => ({
	card: {
	  maxWidth: 325,
	  margin: 15,
	  
	},
	media: {
	  height: 0,
	  paddingTop: '56.25%', // 16:9
	},
	actions: {
	  display: 'flex',
	},
	expand: {
	  transform: 'rotate(0deg)',
	  transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	  }),
	  marginLeft: 'auto',
	},
	expandOpen: {
	  transform: 'rotate(180deg)',
	},
	avatar: {
	  backgroundColor: red[500],
	},
  });
  
  class MapListings extends React.Component {

	state = { expanded: false };
  
	handleExpandClick = () => {
	  this.setState({ expanded: !this.state.expanded });
	};
  
	render() {
	  const { classes } = this.props;
	  const { lat, long, streetnumber, streetname, price, city, photo, unit, beds, baths, key } = this.props
	  const title = `${streetnumber} ${streetname}, #${unit}`
	  const subTitle = `${city} MA`
  
	  return (
		<div>
		  <Card className={classes.card}>
			<CardHeader
			  avatar={
				<Avatar aria-label="Recipe" className={classes.avatar}>
				  R
				</Avatar>
			  }
			  action={
				<IconButton>
				  <MoreVertIcon />
				</IconButton>
			  }
			  title={title}
			  subheader={subTitle}
			/>
			<CardMedia
			  className={classes.media}
			  image={photo}
			  title={title}
			/>
			<CardContent>
			  <Typography component="p">
				Harvard Sqaure 2 bedroom condo on Massachusetts Avenue Cambridge. This apartment includes heat and hotwater.
				Tenants are responsible for metered utilities.
			  </Typography>
			</CardContent>
			<CardActions className={classes.actions} disableActionSpacing>
				<IconButton aria-label="Add to favorites">
					<FavoriteIcon />
			  	</IconButton>
				{/* <Button size="small" color="primary">
						Google Map
					</Button>
					<Button size="small" color="primary">
						Learn More
				</Button> */}
			  	<MapSnippet lat={lat} long={long}/>
			  <IconButton
				className={classnames(classes.expand, {
				  [classes.expandOpen]: this.state.expanded,
				})}
				onClick={this.handleExpandClick}
				aria-expanded={this.state.expanded}
				aria-label="Show more"
			  >
				<ExpandMoreIcon />
			  </IconButton>
			</CardActions>
			
			<Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
			  <CardContent>
				<Typography paragraph variant="body2">
				  Additional Details:
				</Typography>
				<Typography paragraph>
				  Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
				  minutes.
				</Typography>
				<Typography paragraph>
				  Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
				  heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
				  browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
				  chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
				  salt and pepper, and cook, stirring often until thickened and fragrant, about 10
				  minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
				</Typography>
				<Typography paragraph>
				  Add rice and stir very gently to distribute. Top with artichokes and peppers, and
				  cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes.
				  Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into
				  the rice, and cook again without stirring, until mussels have opened and rice is
				  just tender, 5 to 7 minutes more. (Discard any mussels that don’t open.)
				</Typography>
				<Typography>
				  Set aside off of the heat to let rest for 10 minutes, and then serve.
				</Typography>
			  </CardContent>
			</Collapse>
		  </Card>
		</div>
	  );
	}
  }
  
  MapListings.propTypes = {
	classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(MapListings);



















// import './connect';
// import RequestShowingButton from './RequestShowing';
// import ShowListing from './ShowListings'
// import 'tachyons';
// <div className="avenir ba ma3 dib br2 shadow-5">
// // 				<Card className='bg-dark text-white shadow-5 border border-secondary' style={{ width: '100%', height: '100%' }}> 
// // 					<CardBody>
// // 						<Row className='no-gutters'>
// // 							<Col className='ma0 pa0'>					
// // 								<img 
// 									href='#' 
// 									className='grow rounded mx-auto d-block'
// 									style={{ width: '210px', height: '180px' }} 
// 									src={photo} 
// 									alt={'Click here for the pictures'} 
// 								/>
// 							</Col>
// 						</Row>
// 						<Row className='no-gutters'>
// 							<Col className='mt3' xs={12}>
// 								<p className='small b m-0 p-0 avenir'>{title}</p>
// 							</Col>
// 						</Row>
// 						<Row>
// 							<Col xs={6}>
// 								<p className='small i avenir m-0 p-0 mb0'>{subTitle}</p>
// 							</Col>
// 						</Row>
// 						<Row className='no-gutters bg-dark mt3 mb0 pb0 border border-secondary'>
// 							<Col className='flex justify-center' xs={4}>
// 								Beds
// 							</Col>
// 							<Col className='flex justify-center' xs={4}>
// 								Baths
// 							</Col>
// 							<Col className='flex justify-center' xs={4}>
// 								Rent
// 							</Col>
// 						</Row>
// 						<Row className='no-gutters bg-dark pb0'>
// 							<Col className='flex justify-center' xs={4}>
// 								<p>{beds}</p>
// 							</Col>
// 							<Col className='flex justify-center' xs={4}>
// 								<p>{baths}</p>
// 							</Col>
// 							<Col className='flex justify-center pb0' xs={4}>
// 								<p>${price}</p>
// 							</Col>
// 						</Row>	
// 					</CardBody>
// 					<CardBody className='flex justify-center border border-secondary border-right-0 border-left-0 pl0 pr0'>
// 						<Row className='bg-dark' style={{ width: '100%', height: '100%' }}>
// 							<Col className='flex justify-center border border-secondary border-top-0 border-bottom-0 border-left-0' xs={4}>
// 								<ShowListing modalTitle ={`Listing Sheet: ${title} ${subTitle}`} /> 
// 							</Col>
// 							<Col className='flex justify-center border border-secondary border-top-0 border-bottom-0 border-left-0' xs={4}>
// 								<RequestShowingButton modalTitle='Add to show list'/>
// 							</Col>
// 							<Col className='flex justify-center' xs={4}>
// 								<MapSnippet lat={lat} long={long} modalTitle={title} modalSubTitle={subTitle}/>
// 							</Col>
// 						</Row>
// 					</CardBody>
// 				</Card>
// 			</div>		


// class MoreInfo extends Component {
// 	constructor(props) {
// 		super(props);
// 			this.toggle = this.toggle.bind(this);
// 				this.state = { collapse: false };
// 		}
// 	toggle() {
// 		this.setState({ collapse: !this.state.collapse });
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<Button className='shadow-5  avenir' color="danger" size="sm" block onClick={this.toggle} style={{ marginBottom: '1rem' }}>Details</Button>
// 					<Collapse isOpen={this.state.collapse}>
// 						<Card className='avenir bg-dark text-white pa0 ma0' style={{ width: '100%', height: '100%' }}>
// 							<CardBody>
								
// 									Content goes here
								
// 							</CardBody>
// 						</Card>	
// 				</Collapse>
// 			</div>
// 		);
// 	}
// }
// export default MapListings;