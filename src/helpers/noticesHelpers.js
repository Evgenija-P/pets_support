import moment from 'moment';
import { toast } from 'react-toastify';
import { optionsToast } from '../styles/stylesLayout';
const getOwnerNotices = (notices, user) => {
  const noticesOwn = notices.map(notice => {
    if (notice.owner === user) {
      return { ...notice, isOwner: true };
    }
    return { ...notice, isOwner: false };
  });

  return noticesOwn;
};

const getPetAge = notices => {
  const noticeWithPetAge = notices.map(notice => {
    if (!notice.birthdate) {
      return { ...notice, age: 'not specified' };
    }
    const petAge = moment(notice.birthdate, 'DD-MM-YYYY')
      .fromNow()
      .split(' ')
      .slice(0, 2)
      .join(' ');
    return { ...notice, age: petAge };
  });
  // console.log('age', noticeWithPetAge);
  return noticeWithPetAge;
};

const getUserFavoriteNotices = (notices, favorite) => {
  // console.log('getUserFavoriteNotices', { notices, favorite });
  const noticesWithFavorite = notices.map(notice => {
    if (favorite.find(fav => fav._id === notice._id)) {
      // console.log('getUserFavoriteNotices', { ...notice, favorite: true });

      return { ...notice, favorite: true };
    }
    return { ...notice, favorite: false };
  });

  return noticesWithFavorite;
};
const onFavoriteNotAuth = () => {
  toast.warning('You need Login first....', optionsToast);
};

const labelNotices = notices => {
  // console.log('getUserFavoriteNotices', { notices, favorite });
  const noticesWithLabel = notices.map(notice => {
    let category = '';
    switch (notice.categoryName) {
      case 'for-free':
        category = 'In good hands';
        break;

      case 'lost-found':
        category = 'lost/found';
        break;
      case 'sell':
        category = 'sell';
        break;

      default:
        category = '';
    }
    return { ...notice, categoryName: category };
  });
  return noticesWithLabel;
};
const labelNotice = notice => {
  let category = '';
  switch (notice.categoryName) {
    case 'for-free':
      category = 'In good hands';
      break;

    case 'lost-found':
      category = 'lost/found';
      break;
    case 'sell':
      category = 'sell';
      break;

    default:
      category = '';
  }
  return { ...notice, categoryName: category };
};
export {
  getOwnerNotices,
  getPetAge,
  getUserFavoriteNotices,
  onFavoriteNotAuth,
  labelNotices,
  labelNotice,
};
