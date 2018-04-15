import React, { Component } from 'react';
import { Button, ModalHeader, Modal } from 'reactstrap';
import 'tachyons';
import Icon from 'react-icons-kit';
import { calendarPlusO } from 'react-icons-kit/fa/calendarPlusO';       

export default class RequestShowingButton extends Component {
    constructor(props) {
      super(props);
        this.state = { modal: false, content: '' };
          this.toggle = this.toggle.bind(this);
    }
  
    toggle() {
      this.setState({ modal: !this.state.modal, title: this.props.modalTitle, content: this.props.content });
    }
  
    render() {
      return (
        <div>
          <Button className='grow shadow-5 pt2 pr3 pb1 pl3 ma1' color="white" onClick={this.toggle}><div style={{ color: '#ED0036' }}><Icon size={20} icon={calendarPlusO} /></div></Button>
            <Modal className='shadow-5' size='lg' isOpen={this.state.modal} toggle={this.toggle}>
              <ModalHeader className='avenir shadow-5 bg-dark text-white br2' toggle={this.toggle}>{`${this.state.title}`}</ModalHeader>
            </Modal>
        </div>
      );
    }
  }