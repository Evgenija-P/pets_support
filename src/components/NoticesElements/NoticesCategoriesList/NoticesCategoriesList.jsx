import {
  NoticesList,
  NoticesItem,
  NoticesTop,
  NoticesImage,
  NoticesBadge,
  NoticesButtonFavorite,
  NoticesDescription,
  NoticesTitle,
  NoticesTags,
  NoticesTag,
  NoticesButton,
} from './NoticesCategoriesList.styled';

import notFoundNoticesImage from '../../../img/notFoundNoticesImage.jpg';

const NoticesCategoriesList = ({ notices }) => {
  return (
    <NoticesList>
      {notices.map(
        ({
          _id,
          categoryName,
          petImageURL,
          title,
          breed,
          location,
          age,
          price,
        }) => (
          <NoticesItem key={_id}>
            <NoticesTop>
              <NoticesBadge>
                <span>{categoryName}</span>
              </NoticesBadge>
              <NoticesImage
                src={petImageURL ? petImageURL : notFoundNoticesImage}
                alt={title}
              />

              <NoticesButtonFavorite></NoticesButtonFavorite>
            </NoticesTop>

            <NoticesDescription>
              <NoticesTitle>{title}</NoticesTitle>

              <NoticesTags>
                <NoticesTag>Breed: {breed}</NoticesTag>
                <NoticesTag>Place: {location}</NoticesTag>
                <NoticesTag>Age: {age}</NoticesTag>

                {categoryName === 'sell' && (
                  <NoticesTag>Price: {price}$</NoticesTag>
                )}
              </NoticesTags>

              <NoticesButton>Learn More</NoticesButton>
            </NoticesDescription>
          </NoticesItem>
        )
      )}
    </NoticesList>
  );
};

export default NoticesCategoriesList;
