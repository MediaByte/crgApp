import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    minWidth: 190,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class BedroomComponent extends React.Component {
  state = {
    beds: 0,
  };

  render() {
    const { classes, bedValue, bedChange } = this.props;

    return (
      <div className={classes.root}>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-helper">Bedrooms</InputLabel>
          <NativeSelect
            value={bedValue}
            onChange={bedChange}
            input={<Input id="age-native-helper" />}
          >
            <option value="" />
            <option value={0}>Studio</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
          </NativeSelect>
          <FormHelperText>Select Bedrooms</FormHelperText>
        </FormControl>
        
      </div>
    );
  }
}

BedroomComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BedroomComponent);
