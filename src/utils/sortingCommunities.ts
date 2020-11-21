import { Community } from '../reducers/communitiesReducer';

export const sortingCommunities = (communities: Community[]) =>
{
    return communities.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
}