import React from 'react';

import { nanoid } from 'nanoid';
import FriendsAbout from '../FriendsAbout/FriendsAbout';

import {
  FriendsItemWrapper,
  FriendsWrapper,
  FriendsImgWrapper,
  FriendsImg,
  FriendsItemTitle,
  FriendsURL,
} from './FriendsItem.styles';

const FriendsItem = ({ items }) => {
  console.log(items);
  return (
    <>
      {items.map(item => (
        <FriendsItemWrapper key={nanoid()}>
          <FriendsURL href={`${item.url}`} target="_blank">
            <FriendsItemTitle>{item.title}</FriendsItemTitle>
          </FriendsURL>
          <FriendsWrapper>
            <FriendsImgWrapper>
              <FriendsImg src={`${item.imageUrl}`} alt={item.title} />
            </FriendsImgWrapper>
            <FriendsAbout
              adress={item.address}
              // workDays={item.workDays}
              phone={item.phone}
              email={item.email}
            />
          </FriendsWrapper>
        </FriendsItemWrapper>
      ))}
    </>
    // <FriendsItemWrapper>
    //   <FriendsURL href={`${data.url}`} target="_blank">
    //     <FriendsItemTitle>{data.title}</FriendsItemTitle>
    //   </FriendsURL>
    //   <FriendsWrapper>
    //     <FriendsImgWrapper>
    //       <FriendsImg src={`${data.imageUrl}`} alt={data.title} />
    //     </FriendsImgWrapper>
    //     <FriendsAbout
    //       adress={data.address}
    //       workDays={data.workDays}
    //       phone={data.phone}
    //       email={data.email}
    //     />
    //   </FriendsWrapper>
    // </FriendsItemWrapper>
  );
};

export default FriendsItem;
