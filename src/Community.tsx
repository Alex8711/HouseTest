import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import axios from 'axios';

type CommunityProps ={community:any};

const homeSample ={
    "id": "cf39c3f3-182b-4471-a7cb-1ba27526dcfe",
    "communityId": "56e20c00-805b-44b7-831f-f33e50edd54e",
    "price": 400000,
    "area": 950,
    "type": "House"
}
type Home = typeof homeSample;
const Community = ({community}:CommunityProps) => {
  const [homeList,setHomeList]=useState<Home[]|[]>([]);
  const [averagePrice,setAveragePrice]=useState(0);
  useEffect(()=>{
  const fetchHome=async ()=>{
     const {data}= await axios.get("https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/homes");
     setHomeList(data);
  };
  fetchHome();
  const homeListInThisCommunity = homeList.filter(home=>home.communityId===community.id);
  setAveragePrice(homeListInThisCommunity.reduce((a,b)=>a+b.price,0)/homeListInThisCommunity.length)
  },[])
  return (
    <>
      <Card className="my-3">
        
          <Card.Img src={community.imgUrl} variant="top" />
        
        <Card.Body>
          
            <Card.Title>{community.name}</Card.Title>
          
            <Card.Title>Average Price: ${averagePrice.toFixed(0)}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default Community;