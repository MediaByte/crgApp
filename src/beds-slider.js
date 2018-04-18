import React, {Component} from 'react';
import Slider from 'material-ui/Slider';
import 'tachyons';

const styles = {
    root: {
      display: 'flex',
      height: 124,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  };
  

export default class LoadBedroomSlider extends Component {
  state = {
    bedSlider: 2,
  };

  handleBedSlider = (event, value) => {
    this.setState({bedSlider: value});
  };
  render() {
    return (
      <div>
        <Slider
            style={{height: 100}} 
            axis="y"
            min={0}
            max={6}
            step={1}
            value={this.state.bedSlider}
            onChange={this.handleBedSlider}
        />
        <p className='tc'>
          <span>{this.state.bedSlider}</span>
        </p>
      </div>
    );
  }
}