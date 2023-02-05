import {
  NoticesList,
  NoticesItem,
  NoticesTop,
  NoticesBadge,
  NoticesDescription,
  NoticesTitle,
  NoticesTags,
  NoticesTag,
  NoticesButton,
} from './NoticesCategoriesList.styled';

const NoticesCategoriesList = ({ notices }) => {
  return (
    <NoticesList>
      {notices.map(({ _id, title, breed, location, age, price }) => (
        <NoticesItem key={_id}>
          <NoticesTop>
            <NoticesBadge>In good hands</NoticesBadge>
          </NoticesTop>

          <NoticesDescription>
            <NoticesTitle>{title}</NoticesTitle>

            <NoticesTags>
              <NoticesTag>Breed: {breed}</NoticesTag>
              <NoticesTag>Place: {location}</NoticesTag>
              <NoticesTag>Age: {age}</NoticesTag>
              <NoticesTag>Price: {price}$</NoticesTag>
            </NoticesTags>

            <NoticesButton>Learn More</NoticesButton>
          </NoticesDescription>
        </NoticesItem>
      ))}
    </NoticesList>
  );
};

export default NoticesCategoriesList;
