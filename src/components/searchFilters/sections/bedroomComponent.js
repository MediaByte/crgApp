import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    width: '100%',
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
          <NativeSelect
            value={bedValue}
            onChange={bedChange}
            input={
              <Input
                disableUnderline={true} 
                fullWidth 
                id="age-native-helper" 
              />
            }
          >
            <option value="">Beds</option>
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
        </FormControl>
        
      </div>
    );
  }
}

BedroomComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BedroomComponent);
