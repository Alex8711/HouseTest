import React, { useEffect} from 'react';
import { Row, Col,Container} from 'react-bootstrap';
import Header from './components/shared/Header';
import CommunityComponent from './components/Community/Community';
import {RootState} from './reducers/index';
import {CommunitiesState}from './reducers/communitiesReducer'
import {fetchCommunities}  from './actions/communityActions';
import { useDispatch, useSelector } from "react-redux";
import Loader from './components/shared/Loader';

const App=()=> {
  const dispatch = useDispatch();
   const {data,loading,errors} = useSelector<RootState,CommunitiesState>(state=>state.communitiesList);
    useEffect(()=>{
    dispatch(fetchCommunities());
    },[dispatch])
  return (
   <>
   
   <Header/>
   {loading?(<Loader/>):(<Container>
   <Row>
     {data.map((community,index)=>(
              <Col sm={12} md={6} lg={4} xl={3} key={index}>
                <CommunityComponent community={community} />
              </Col>
            ))}
   </Row>
   </Container>)}
   
   </>
  );
}

export default App;
