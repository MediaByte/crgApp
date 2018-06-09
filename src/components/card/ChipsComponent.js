import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import TagFacesIcon from "@material-ui/icons/TagFaces";
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
  state = {
    chipData: [
      { key: 0, label: "Heat" },
      { key: 1, label: "Hot water" },
      { key: 2, label: "Electricity" },
      { key: 3, label: "Pet OK" },
    ]
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="title">Rent includes</Typography>
        {this.state.chipData.map(data => {
          let avatar = null;

          if (data.label === "Pet OK") {
            avatar = (
              <Avatar>
                <TagFacesIcon className={classes.svgIcon} />
              </Avatar>
            );
          }

          return (
            <Chip
              key={data.key}
              avatar={avatar}
              label={data.label}
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
