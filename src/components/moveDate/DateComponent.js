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

//State
import { connect } from 'react-redux';
import { 
  fromDate,
  toDate
} from '../../state/actions'


const mapStateToProps = state => {
  return {
    fromDate: state.userSettings.fromDate,
    toDate: state.userSettings.toDate,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    moveDateFrom: (value) => dispatch(fromDate(value)),
    moveDateTo: (value) => dispatch(toDate(value))
  }
}



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


  handleDateChange = name => event => {
    switch (name){
      case 'from':
        return this.props.moveDateFrom(event.target.value);
      case 'to':
        return this.props.moveDateTo(event.target.value);
      default: 
        break;
    }
  };

  render() {
    const { classes } = this.props
    
    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
        <br/>
          <NativeSelect
            value={this.props.from}
            onChange={this.handleDateChange('from')}
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
        <FormHelperText>From</FormHelperText>
        <br/>
        </FormControl>
        <FormControl className={classes.formControl}>
          <NativeSelect
            value={this.props.to}
            onChange={this.handleDateChange('to')}
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
          <FormHelperText>To</FormHelperText>
        </FormControl>      
      </div>

    );
  }
}

DateComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(DateComponent));
