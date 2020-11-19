import React, { useEffect, useState } from 'react';
import {Card, Row, Col,Container} from 'react-bootstrap';
import axios from 'axios';
import Header from './Header';
import Community from './Community';

const App=()=> {
  const [communitiesList,setCommunitiesList]= useState([]);
  useEffect(()=>{
    const fetchCommunities = async ()=>{
      const {data}= await axios.get("https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/communities");
      // console.log(data);
      setCommunitiesList(data);
    }
    fetchCommunities();

  },[])
    
  return (
   <>
   <Header/>
   <Container>
   <Row>
     {communitiesList.map((community,index)=>(
              <Col sm={12} md={6} lg={4} xl={3} key={index}>
                <Community community={community} />
              </Col>
            ))}
   </Row>
   </Container>
   </>
  );
}

export default App;
