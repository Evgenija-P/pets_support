// import React from 'react';

// import { nanoid } from 'nanoid';
// import FriendsAbout from '../FriendsAbout/FriendsAbout';
// import defaultImage from '../../../img/default.jpg';

// import {
//   FriendsItemWrapper,
//   FriendsWrapper,
//   FriendsImgWrapper,
//   FriendsImg,
//   FriendsItemTitle,
//   FriendsURL,
// } from './FriendsItem.styles';

// const FriendsItem = ({ items }) => {
//   console.log(items);
//   return (
//     <ul>
//       {items.map(item => (
//         <FriendsItemWrapper key={nanoid()}>
//           <FriendsURL href={`${item.url}`} target="_blank">
//             <FriendsItemTitle>{item.title}</FriendsItemTitle>
//           </FriendsURL>
//           <FriendsWrapper>
//             <FriendsImgWrapper>
//               <FriendsImg
//                 src={item.imageUrl ? `${item.imageUrl}` : defaultImage}
//                 alt={item.title}
//               />
//             </FriendsImgWrapper>
//             <FriendsAbout item={item} />
//           </FriendsWrapper>
//         </FriendsItemWrapper>
//       ))}
//     </ul>
//   );
// };

// export default FriendsItem;
