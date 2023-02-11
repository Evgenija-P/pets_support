import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { optionsToast } from '../../../styles/stylesLayout';

import BASE_URL from '../../../servises/api';
import FriendsAbout from '../FriendsAbout/FriendsAbout';
import defaultImage from '../../../img/default.jpg';
import Spinner from '../../Spinner/Spinner';
import {
  FriendsContainer,
  FriendsTitle,
  FriendsError,
  FriendsItem,
  FriendsData,
  FriendsImg,
  FriendsItemTitle,
} from './FriendsList.styles';

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
      setError('Oh! Something wrong! Please try again in a few minutes');
      toast.error('Oh! Something wrong!', optionsToast);
      console.log(e.message);
    }
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <FriendsTitle>Our friends</FriendsTitle>
          <FriendsContainer>
            {friendsItems.map(item => (
              <FriendsItem key={nanoid()}>
                <FriendsItemTitle href={`${item.url}`} target="_blank">
                  {item.title}
                </FriendsItemTitle>
                <FriendsData>
                  <a
                    href={`${item.url}`}
                    target="_blank"
                    without
                    rel="noreferrer"
                  >
                    <FriendsImg
                      src={item.imageUrl ? `${item.imageUrl}` : defaultImage}
                      alt={item.title}
                    />
                  </a>
                  <FriendsAbout item={item} />
                </FriendsData>
              </FriendsItem>
            ))}
          </FriendsContainer>
        </>
      )}
      {error && <FriendsError>{error}</FriendsError>}
    </>
  );
};

export default FriendsList;
