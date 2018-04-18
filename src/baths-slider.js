import React, {Component} from 'react';
import Slider from 'material-ui/Slider';
import 'tachyons';
  

export default class LoadBathroomSlider extends Component {
  state = {
    bathSlider: 2,
  };

  handleBathSlider = (event, value) => {
    this.setState({bathSlider: value});
  };
  render() {
    return (
      <div>
        <Slider
            style={{height: 70}} 
            axis="y"
            min={0}
            max={4}
            step={1}
            value={this.state.bathSlider}
            onChange={this.handleBathSlider}
        />
        <p className='tc'>
          <span>{this.state.bathSlider}</span>
        </p>
      </div>
    );
  }
}