import FriendsAbout from '../FriendsAbout/FriendsAbout';
import { nanoid } from 'nanoid';
import {
  FriendsItemWrapper,
  FriendsWrapper,
  FriendsImgWrapper,
  FriendsImg,
  FriendsItemTitle,
  FriendsURL,
} from './FriendsItem.styles';

import datas from '../../../data/sponsors.json';

const data = {
  title: "Притулок для бездомних тварин 'Сіріус'",
  url: 'https://dogcat.com.ua',
  addressUrl: 'https://goo.gl/maps/iq8NXEUf31EAQCzc6',
  imageUrl:
    'https://storage.googleapis.com/kidslikev2_bucket/pets-support/images/sponsors/frame_287.png',
  address: 'Fedorivka, Kyiv Oblast, Ukraine, 07372',
  workDays: [
    { isOpen: false },
    { isOpen: false },
    { isOpen: false },
    { isOpen: false },
    { isOpen: false },
    { isOpen: true, from: '11:00', to: '16:00' },
    { isOpen: true, from: '11:00', to: '16:00' },
  ],
  phone: '+380931934069',
  email: null,
};

console.log(datas);
const FriendsItem = () => {
  const items = datas;

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
              workDays={item.workDays}
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
