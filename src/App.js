import React from 'react';
import './App.css';
import ReactPlayer from 'react-player'
import { Container, NavbarBrand,Navbar,  Row, Col } from 'reactstrap';

function App() {
  return <>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/">Mahendra Bagul</NavbarBrand>
            </Navbar>
            <Container >
              <Row>
                <Col  sm="12" md="12"> 
                 <div class="d-flex justify-content-center">
                    <ReactPlayer 
                      url='https://www.youtube.com/watch?v=PH-2FfFD2PU' 
                      playing  
                      controls
                    />
                    </div>
                </Col>
              </Row>
            </Container>
          </> 
}

export default App;
