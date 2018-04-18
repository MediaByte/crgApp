import React, {Component} from 'react';
import Slider from 'material-ui/Slider';
import 'tachyons';

export default class LoadPriceSlider extends Component {
  state = {
    rentSlider: 1800,
  };

  handleRentSlider = (event, value) => {
    this.setState({rentSlider: value});
  };
  render() {
    return (
      <div className='pa0 ma0'>
        <Slider
          style={{width: '100%'}} 
          min={1350}
          max={5000}
          step={25}
          value={this.state.rentSlider}
          onChange={this.handleRentSlider}
        />
        <p className='tc'>
          ${this.state.rentSlider}
        </p>
      </div>
    );
  }
}