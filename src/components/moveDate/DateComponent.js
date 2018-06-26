import React from 'react';
import PropTypes from 'prop-types';

//Material-UI components
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormHelperText from '@material-ui/core/FormHelperText';

//Project
import dateArray from './dateArray';
let options = dateArray();

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    width: '100%'
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class DateComponent extends React.Component {

  render() {
    const { classes, handleDateChange } = this.props;
    
    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
        <br/>
          <NativeSelect
            value={this.props.from}
            onChange={handleDateChange('from')}
            input={<Input fullWidth name="name" id="name-native-disabled" />}
          >
            <option value="" />
            {options.map((item, i) => {
              return (
                <option key={item} value={item}>{item}</option>
              );
            }
            )}
          </NativeSelect>
        <FormHelperText>Min Rent</FormHelperText>
        <br/>
        </FormControl>
        <FormControl className={classes.formControl}>
          <NativeSelect
            value={this.props.to}
            onChange={handleDateChange('to')}
            input={<Input fullWidth name="name" id="name-native-disabled" />}
          >
            <option value="" />
            {options.map((item, i) => {
              return (
                <option key={item} value={item}>{item}</option>
              );
            }
            )}
          </NativeSelect>
          <FormHelperText>Max Rent</FormHelperText>
        </FormControl>      
      </div>

    );
  }
}

DateComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DateComponent);
