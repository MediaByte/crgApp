//ReactJS
import React, { Component } from 'react';

//Bootstrap Carousel
import { 
  Carousel, 
  CarouselItem, 
  CarouselControl, 
  CarouselIndicators,} 
from 'reactstrap';

//Material-UI
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 10,
    height: '470px',
    marginBottom: 20,
    borderRadius: '9px',
  }),
});

class CarouselComponent extends Component {

  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = false;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.props.photoArray.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.props.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const { classes, photoArray } = this.props;

    const slides = photoArray.map((item, i) => {

      return (
          <CarouselItem key={i} className="custom-tag" tag="div" onExiting={this.onExiting} onExited={this.onExited}>
            <div style={{padding: '15px'}} className={'flex flex-wrap justify-center'}>
              <img height={'380px'} src={item.hasOwnProperty('_text') ? item._text[0] : item} alt={'Photos'} />
            </div>
          </CarouselItem>
      );
    });

    return (
      <div>
        <Paper className={classes.root} elevation={20}>
          <Typography variant="headline" component="h3">
            Photos
          </Typography>
        <style>
          {`.custom-tag {
                max-width: 100%;
                height: 400px;
                background: black;
            }`
          }
        </style>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={slides} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
        </Paper>   
        </div> 
    );
  }
}


export default withStyles(styles)(CarouselComponent);