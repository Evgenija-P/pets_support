import { NavLinkNotice } from './NoticesCategoriesNav.styled';

const NoticesCategoriesNav = () => {
  return (
    <>
      <div>
        <NavLinkNotice to="/notices/sell">
          <p>sell</p>
        </NavLinkNotice>
      </div>
      <div>
        <NavLinkNotice to="/notices/lost-found">
          <p>lost/found</p>
        </NavLinkNotice>
      </div>
      <div>
        <NavLinkNotice to="/notices/for-free">
          <p>in good hands</p>
        </NavLinkNotice>
      </div>
    </>
  );
};

export default NoticesCategoriesNav;
