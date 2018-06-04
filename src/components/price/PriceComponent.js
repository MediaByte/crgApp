/* eslint-disable react/prefer-stateless-function */
import React from "react";
import MaskedInput from "react-text-mask";
import NumberFormat from "react-number-format";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit
  }
});

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={[
        "(",
        /[1-9]/,
        /\d/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/
      ]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired
};

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      ref={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value
          }
        });
      }}
      thousandSeparator
      prefix="$"
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

class PriceComponent extends React.Component {

  render() {
    const { classes } = this.props;
    const { minPrice, maxPrice, handleMinPriceChange, handleMaxPriceChange } = this.props;

    return (
      <div className={classes.container}>
        <TextField
          className={classes.formControl}
          label="Min"
          value={minPrice}
          onChange={handleMinPriceChange}
          id="formatted-numberformat-input"
          InputProps={{
            inputComponent: NumberFormatCustom
          }}
        />
        <TextField
          className={classes.formControl}
          label="Max"
          value={maxPrice}
          onChange={handleMaxPriceChange}
          id="formatted-numberformat-input"
          InputProps={{
            inputComponent: NumberFormatCustom
          }}
        />
      </div>
    );
  }
}

PriceComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PriceComponent);
