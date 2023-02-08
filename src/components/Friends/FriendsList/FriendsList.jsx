import React, { useEffect, useState } from 'react';

import BASE_URL from '../../../servises/api';
import FriendsItem from '../FriendsItem/FriendsItem';
import Spinner from '../../Spinner/Spinner';

const FriendsList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [friendsItems, setFriendsItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchFriends();
  }, []);

  const fetchFriends = async () => {
    try {
      const res = await fetch(`${BASE_URL}/sponsors`);
      const result = await res.json();
      if (result.data.sponsors) {
        setIsLoading(false);
        setFriendsItems(result.data.sponsors);
      }
      return result;
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <>
      {isLoading ? <Spinner /> : <FriendsItem items={friendsItems} />}
      {error && <p>{error}</p>}
    </>
  );
};

export default FriendsList;
