/* eslint-disable react/prop-types */
//ReactJS
import React from 'react';
import PropTypes from 'prop-types';
//Material-UI Components
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CancelIcon from '@material-ui/icons/Cancel';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ClearIcon from '@material-ui/icons/Clear';
import Chip from '@material-ui/core/Chip';
import FormHelperText from '@material-ui/core/FormHelperText';
//Project Components
import fetchCities from './fetchCities';
//AutoComplete
import Select from 'react-select';
import 'react-select/dist/react-select.css';
//State
import { connect } from 'react-redux';
import { 
  city, 
  requestListings 
} from '../../state/actions'
const mapStateToProps = state => {
  return {
    city: state.userSettings.city,
    fromDate: state.userSettings.fromDate,
    toDate: state.userSettings.toDate,
    minBeds: state.userSettings.minBeds,
    maxBeds: state.userSettings.maxBeds,
    minPrice: state.userSettings.minPrice,
    maxPrice: state.userSettings.maxPrice,
    listings: state.requestListings.listings
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeCity: (props) => dispatch(city(props)),
    requestListings: (link) => dispatch(requestListings(link))
  }
}

class Option extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        suggestions: {}
      }
  }
  handleClick = event => {
    this.props.onSelect(this.props.option, event);
  };
  render() {
    const { children, isFocused, isSelected, onFocus } = this.props;
    return (
      <MenuItem
        onFocus={onFocus}
        selected={isFocused}
        onClick={this.handleClick}
        component="div"
        style={{
          fontWeight: isSelected ? 500 : 400,
        }}
      >
        {children}
      </MenuItem>
    );
  }
}
function SelectWrapped(props) {
  const { classes, ...other } = props;
  return (
    <Select
      optionComponent={Option}
      noResultsText={<Typography>{'No results found'}</Typography>}
      arrowRenderer={arrowProps => {
        return arrowProps.isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />;
      }}
      clearRenderer={() => <ClearIcon />}
      valueComponent={valueProps => {
        const { value, children, onRemove } = valueProps;
        const onDelete = event => {
          event.preventDefault();
          event.stopPropagation();
          onRemove(value);
        };
        if (onRemove) {
          return (
            <Chip
              tabIndex={-1}
              label={children}
              className={classes.chip}
              deleteIcon={<CancelIcon onTouchEnd={onDelete} />}
              onDelete={onDelete}
            />
          );
        }
        return <div className="Select-value">{children}</div>;
      }}
      {...other}
    />
  );
}
const ITEM_HEIGHT = 48;
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  chip: {
    margin: theme.spacing.unit / 4,
  },
  '@global': {
    '.Select-control': {
      display: 'flex',
      alignItems: 'center',
      border: 0,
      height: 'auto',
      background: 'transparent',
      '&:hover': {
        boxShadow: 'none',
      },
    },
    '.Select-multi-value-wrapper': {
      flexGrow: 1,
      display: 'flex',
      flexWrap: 'wrap',
    },
    '.Select--multi .Select-input': {
      margin: 0,
    },
    '.Select.has-value.is-clearable.Select--single > .Select-control .Select-value': {
      padding: 0,
    },
    '.Select-noresults': {
      padding: theme.spacing.unit * 2,
    },
    '.Select-input': {
      display: 'inline-flex !important',
      padding: 0,
      height: 'auto',
    },
    '.Select-input input': {
      background: 'transparent',
      border: 0,
      padding: 0,
      cursor: 'default',
      display: 'inline-block',
      fontFamily: 'inherit',
      fontSize: 'inherit',
      margin: 0,
      outline: 0,
    },
    '.Select-placeholder, .Select--single .Select-value': {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(16),
      padding: 0,
    },
    '.Select-placeholder': {
      opacity: 0.42,
      color: theme.palette.common.black,
    },
    '.Select-menu-outer': {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[2],
      position: 'absolute',
      left: 0,
      top: `calc(100% + ${theme.spacing.unit}px)`,
      width: '100%',
      zIndex: 2,
      maxHeight: ITEM_HEIGHT * 4.5,
    },
    '.Select.is-focused:not(.is-open) > .Select-control': {
      boxShadow: 'none',
    },
    '.Select-menu': {
      maxHeight: ITEM_HEIGHT * 4.5,
      overflowY: 'auto',
    },
    '.Select-menu div': {
      boxSizing: 'content-box',
    },
    '.Select-arrow-zone, .Select-clear-zone': {
      color: theme.palette.action.active,
      cursor: 'pointer',
      height: 21,
      width: 21,
      zIndex: 1,
    },
    // Only for screen readers. We can't use display none.
    '.Select-aria-only': {
      position: 'absolute',
      overflow: 'hidden',
      clip: 'rect(0 0 0 0)',
      height: 1,
      width: 1,
      margin: -1,
    },
  },
});

class NeighborhoodComponent extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        multiLabel: null,
        suggestions: []
      };
  };
  componentDidMount() {
    fetchCities().then(data => {this.setState({suggestions: data})})
  };
  handleCityChange = (event) => {
    this.props.changeCity(event)
  }
  render() {
    const { classes, city, showFormHelper=true } = this.props;
      return (
        <div className={classes.root}>
          <TextField
            fullWidth
            value={city}
            onChange={this.handleCityChange}
            placeholder="Cambridge"
            name="react-select-chip-label"
            InputLabelProps={
              {
                shrink: true,
              }
            }
            InputProps={
              {
                inputComponent: SelectWrapped,
                inputProps: {
                  classes,
                  multi: true,
                  instanceId: 'react-select-chip-label',
                  id: 'react-select-chip-label',
                  simpleValue: true,
                  options: this.state.suggestions,
                }
              }
            }
          />
          {showFormHelper ? <FormHelperText>City/Neighborhood</FormHelperText> : ''}
        </div>
      );
  }
}
NeighborhoodComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(NeighborhoodComponent));





