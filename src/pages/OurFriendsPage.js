import { Helmet } from 'react-helmet';
import React from 'react';

import FriendsList from '../components/Friends/FriendsList/FriendsList';

const OurFriendsPage = () => {
  return (
    <div>
      <Helmet>
        <title>OurFriendsPage</title>
      </Helmet>
      <FriendsList />
    </div>
  );
};
export default OurFriendsPage;
