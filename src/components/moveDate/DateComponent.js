import React from 'react';
import PropTypes from 'prop-types';

//Material-UI components
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

//Project
import dateArray from './dateArray';
let options = dateArray();

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 199
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
          <InputLabel htmlFor="name-native-disabled">Available from</InputLabel>
          <NativeSelect
            value={this.props.from}
            onChange={handleDateChange('from')}
            input={<Input name="name" id="name-native-disabled" />}
          >
            <option value="" />
            {options.map((item, i) => {
              return (
                <option key={item} value={item}>{item}</option>
              );
            }
            )}
          </NativeSelect>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="name-native-disabled">Available to</InputLabel>
          <NativeSelect
            value={this.props.to}
            onChange={handleDateChange('to')}
            input={<Input name="name" id="name-native-disabled" />}
          >
            <option value="" />
            {options.map((item, i) => {
              return (
                <option key={item} value={item}>{item}</option>
              );
            }
            )}
          </NativeSelect>
        </FormControl>      
      </div>

    );
  }
}

DateComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DateComponent);
