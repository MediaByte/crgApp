//ReactJS
import React from 'react';
import PropTypes from 'prop-types';

//Material-UI
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';

//Project Components
import CarouselComponent from './CarouselComponent';
import MapSnippet from './MapSnippet'

function TabContainer(props) {
  return (
    <div component="div" style={{ padding: 6 * 2 }}>
      {props.children}
    </div>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class DetailsComponent extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, photoArray, lat, long  } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar>
          <Tabs centered value={value} onChange={this.handleChange}>
            <Tab label="Photos" />
            <Tab label="Details" />
            <Tab label="Map" />
          </Tabs>
        </AppBar>
        {value === 0 && 
          <TabContainer>
            <Grid container>
              <Grid item xs={12}>
                <CarouselComponent photoArray={photoArray}/>
              </Grid>
            </Grid>
          </TabContainer>}
        {value === 1 && 
          <TabContainer>

          </TabContainer>}
        {value === 2 && 
          <TabContainer>
            <Grid container justify='center'>
              <Grid item xs={12}>
                <MapSnippet lat={lat} long={long}/>
              </Grid>
            </Grid>
          </TabContainer>}
      </div>
    );
  }
}

DetailsComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DetailsComponent);





