import { Helmet } from 'react-helmet';
import React from 'react';
import SectionContainer from '../components/SectionContainer';

import FriendsList from '../components/Friends/FriendsList/FriendsList';

const OurFriendsPage = () => {
  return (
    <div>
      <Helmet>
        <title>OurFriendsPage</title>
      </Helmet>
      <SectionContainer title="Our friends">
        <FriendsList />
      </SectionContainer>
    </div>
  );
};
export default OurFriendsPage;
