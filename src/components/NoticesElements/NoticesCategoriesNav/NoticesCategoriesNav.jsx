// import {
//   NoticesCategoriesList,
//   NoticesCategoriesButton,
// } from './NoticesCategoriesNav.styled';

// const NoticesCategoriesNav = ({ categories }) => {
//   return (
//     <NoticesCategoriesList>
//       {categories.map(category => (
//         <li key={category}>
//           <NoticesCategoriesButton category={category} name={category}>
//             {category}
//           </NoticesCategoriesButton>
//         </li>
//       ))}
//     </NoticesCategoriesList>
//   );
// };

// export default NoticesCategoriesNav;

import { NavLink } from 'react-router-dom';

const NoticesCategoriesNav = () => {
  return (
    <>
      <div>
        <NavLink to="/notices/sell">
          <p>sell</p>
        </NavLink>
      </div>
      <div>
        <NavLink to="/notices/lost-found">
          <p>lost/found</p>
        </NavLink>
      </div>
      <div>
        <NavLink to="/notices/for-free">
          <p>in good hands</p>
        </NavLink>
      </div>
    </>
  );
};

export default NoticesCategoriesNav;
