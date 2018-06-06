//ReactJS
import React, { Component } from 'react';

//Bootstrap Carousel
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators,} from 'reactstrap';

var items = [];

export default class CarouselComponent extends Component {
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
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const { photoArray } = this.props;
    items = photoArray

    const slides = photoArray.map((item, i) => {
      return (
        <CarouselItem className="custom-tag" tag="div" onExiting={this.onExiting} onExited={this.onExited} key={item._text[0]}>
          <div style={{padding: '15px'}} className={'flex flex-wrap justify-center'}>
            <img height={'400px'} src={item._text[0]} alt={'Test'} />
          </div>
        </CarouselItem>
      );
    });

    return (
      <div>
        <style>
          {`.custom-tag {
                max-width: 100%;
                height: 470px;
                background: black;
            }`
          }
        </style>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={photoArray} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </div>
    );
  }
}