import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

//State
import { connect } from 'react-redux';
import { minBeds, maxBeds } from '../../state/actions'


const mapStateToProps = state => {
  return {
    maxBeds: state.userSettings.maxBeds,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMinBedsChange: (event) => dispatch(minBeds(event)),
    onMaxBedsChange: (event) => dispatch(maxBeds(event)),
  }
}

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    width: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class BedroomComponent extends React.Component {

  onChange = (event) => {
    this.props.onMinBedsChange(event.target.value)
    this.props.onMaxBedsChange(event.target.value)
  }

  render() {
    const { classes, maxBeds } = this.props;

    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl}><br/>
          <NativeSelect
            value={maxBeds}
            onChange={this.onChange}
            input={<Input fullWidth id="age-native-helper" />}
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

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(BedroomComponent));
