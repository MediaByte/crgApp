import React from 'react';
import { Row, Collapse, Col, Navbar, Jumbotron, NavbarToggler, Nav, NavItem, Form, FormGroup, Label, Input } from 'reactstrap';
import 'tachyons';

export default class LoadNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div className='shadow-5 avenir mb5 tc'>
        <Navbar fixed={`top`} color='dark' dark>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-3 grow shadow-1" />
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <div className='mt4'>
                    <Jumbotron className='bg-dark shadow-1'> <hr className="my-6 shadow-5" color='gray' />
                      <Form className='flex justify-center'>
                        <Row className='white mt2'>
                          <Col className='bg-dark' xs={6}> 
                            <FormGroup>
                              <Label for="bedroomSelect"className='lead dark mt1'>Bedrooms</Label>
                                <Input invalid className='form-control-range shadow-1 mw4' type="select" name="select" id="bedroomSelect">
                                  <option>Studio</option>
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                  <option>6</option>
                                  <option>7</option>
                                </Input>
                            </FormGroup>
                          </Col>
                          <Col className='bg-dark' xs={6}>
                            <FormGroup>
                              <Label for="bedroomSelect" className='lead dark mt1'>Max Baths</Label>
                                <Input invalid className='shadow-5 mw4' type="select" name="select" id="bedroomSelect">
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                </Input>
                            </FormGroup>  
                          </Col>
                        </Row>
                      </Form>
                    </Jumbotron>
                  </div>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
    );
  }
}