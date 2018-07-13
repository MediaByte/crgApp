import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Material-UI
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

//project files
import NeighborhoodComponent from './sections/NeighborhoodComponent';
import BedroomComponent from './sections/bedroomComponent';
import PriceComponent from './sections/Price';


const styles = theme => ({

  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  search: {
	borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    padding: '8px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },

})

class SearchFilters extends Component {

render() {
	const {classes} = this.props
	return (
		<div>
			<Paper style={{backgroundColor: '#FFFFFF40'}} rounded className={classes.root} elevation={20}>
				<Grid container spacing={0}>
					<Grid item xs={12} sm={12} md={12}>
						<div className={classes.search}>
							<NeighborhoodComponent/>

						</div>
							<Grid container style={{marginTop: 4}} spacing={8}>
								<Grid item xs={4} sm={4} md={3}>
									<div className={classes.search}>
										<BedroomComponent/>
									</div>
								</Grid>
								<Grid item xs={4} sm={4} md={3}>
									<div className={classes.search}>
										<PriceComponent />
									</div>
								</Grid>
							</Grid>
					</Grid>
				</Grid>
			</Paper>
			<br/>
		</div>
	)

}


}


SearchFilters.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchFilters);