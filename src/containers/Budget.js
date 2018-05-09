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
  
    constructor() {
        super();
            this.state = {
                amount: '',
            };
    }


  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
    console.log(event.target.value)
  };


  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Input
          id="adornment-amount"
          value={this.state.amount}
          onChange={this.handleChange('amount')}
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
