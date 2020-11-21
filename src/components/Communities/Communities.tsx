import React, { useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../../reducers/index';
import { CommunitiesState, Community } from '../../reducers/communitiesReducer'
import { fetchCommunities } from '../../actions/communityActions';
import Loader from '../shared/Loader'
import { sortingCommunities } from '../../utils/sortingCommunities';
import CommunityComponent from '../Community/Community';

const Communities = () =>
{
    const dispatch = useDispatch();
    const { data, loading, errors } = useSelector<RootState, CommunitiesState>(state => state.communitiesList);

    useEffect(() =>
    {
        dispatch(fetchCommunities());
    }, [dispatch])

    return (
        <>
            { loading ? (<Loader />) : (<Container>
                <Row>
                    {
                        sortingCommunities(data).map((community, index) => (
                            <Col sm={12} md={6} lg={4} xl={3} key={index} >
                                <CommunityComponent community={community} />
                            </Col>
                        ))
                    }
                </Row>
            </Container>)}
        </>
    )
}

export default Communities;