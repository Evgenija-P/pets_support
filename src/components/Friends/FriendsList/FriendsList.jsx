import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import BASE_URL from '../../../servises/api';
import FriendsItem from '../FriendsItem/FriendsItem';
import { optionsToast } from '../../../styles/stylesLayout';
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
        toast.success('Congratulations!', optionsToast);
        setIsLoading(false);
        setFriendsItems(result.data.sponsors);

        console.log(toast.success);
      }
      return result;
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  console.log(friendsItems);

  return (
    <>
      {isLoading ? <Spinner /> : <FriendsItem items={friendsItems} />}
      {error && <p>{error}</p>}
    </>
  );
};

export default FriendsList;
