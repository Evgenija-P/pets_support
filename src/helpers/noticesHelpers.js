import moment from 'moment';
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
  const noticesWithFavorite = notices.map(notice => {
    if (favorite.find(fav => fav === notice._id)) {
      return { ...notice, favorite: true };
    }
    return { ...notice, favorite: false };
  });

  return noticesWithFavorite;
};
export { getOwnerNotices, getPetAge, getUserFavoriteNotices };
