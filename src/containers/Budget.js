import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    flexBasis: 200,
  },
});

class Budget extends React.Component {

  render() {
    const { classes, amount } = this.props;
    const { handleChange } = this.props;

    return (
      <div className={classes.root}>
        <Input
          id="adornment-amount"
          value={amount}
          onChange={handleChange}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
      </div>
    );
  }
}

Budget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Budget);
