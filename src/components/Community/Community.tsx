import React, { useEffect} from "react";
import { Card } from "react-bootstrap";
import {formatPriceNumber} from '../../utils/formatPriceNumber';
import {RootState} from '../../reducers/index';
import {HomesState}from '../../reducers/homesReducer'
import {fetchHomes} from '../../actions/homeAction'
import {Community}from '../../reducers/communitiesReducer';
import { useDispatch, useSelector } from "react-redux";
import {averageHomePrice} from '../../utils/averageHomePrice';
import Loader from '../shared/Loader';
import styles from "./Community.module.css"

type Props = {
  community: Community;
};

const CommunityComponent : React.FC<Props>= ({community}) => {
  const dispatch = useDispatch();
  const {loading,data,errors} = useSelector<RootState,HomesState>(state=>state.homesList);
  const homeListInThisCommunity = data.filter(home=>home.communityId===community.id);
  useEffect(()=>{
    dispatch(fetchHomes());
  },[])
  return (
    <>
    {loading?(<Loader/>):(<Card className="my-3">
         
           <Card.Img className={styles.cardImage} src={community.imgUrl} variant="top" onError={(e:any)=>{e.target.src="./img/image-not-found.jpg"}}/>
        
      
      <Card.Body>
        
          <Card.Title>{community.name}</Card.Title>
        
          <Card.Title>Average Price: {averageHomePrice(homeListInThisCommunity)==="N/A"?"N/A":formatPriceNumber(averageHomePrice(homeListInThisCommunity))}</Card.Title>
      </Card.Body>
    </Card>)}
      
    </>
  );
};

export default CommunityComponent;