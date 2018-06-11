import React from "react";
import PropTypes from "prop-types";

//Material-UI Components
import { withStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "left",
    flexWrap: "wrap",
    padding: theme.spacing.unit / 2,
    borderRadius: '9px',
  },
  chip: {
    margin: theme.spacing.unit / 2
  }
});

class ChipsComponent extends React.Component {

  render() {
    const { classes, features } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="title">Utilities</Typography>
          
          {features.map((data, i) => {
            return (
              <Chip
                key={i}
                label={data}
                className={classes.chip}
              />
            );
        })}

      </div>
    );
  }
}

ChipsComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ChipsComponent);
