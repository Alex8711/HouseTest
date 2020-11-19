import React from 'react';
import {Navbar,Form,FormControl} from 'react-bootstrap';

const Header=()=>{

return(
<>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      {' '}
      Community Information
    </Navbar.Brand>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    </Form>
  </Navbar>
</>)
}

export default Header;