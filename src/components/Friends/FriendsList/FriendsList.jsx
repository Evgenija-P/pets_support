import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { optionsToast } from '../../../styles/stylesLayout';

import BASE_URL from '../../../servises/api';
// import FriendsItem from '../FriendsItem/FriendsItem';
import {
  FriendsContainer,
  FriendsTitle,
  FriendsError,
  FriendsItemWrapper,
  FriendsWrapper,
  FriendsImgWrapper,
  FriendsImg,
  FriendsItemTitle,
  FriendsURL,
} from './FriendsList.styles';
import { nanoid } from 'nanoid';
import FriendsAbout from '../FriendsAbout/FriendsAbout';
import defaultImage from '../../../img/default.jpg';

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
              <FriendsItemWrapper key={nanoid()}>
                <FriendsURL href={`${item.url}`} target="_blank">
                  <FriendsItemTitle>{item.title}</FriendsItemTitle>
                </FriendsURL>
                <FriendsWrapper>
                  <FriendsImgWrapper>
                    <FriendsImg
                      src={item.imageUrl ? `${item.imageUrl}` : defaultImage}
                      alt={item.title}
                    />
                  </FriendsImgWrapper>
                  <FriendsAbout item={item} />
                </FriendsWrapper>
              </FriendsItemWrapper>
            ))}
          </FriendsContainer>
        </>
      )}
      {error && <FriendsError>{error}</FriendsError>}
    </>
  );
};

export default FriendsList;
