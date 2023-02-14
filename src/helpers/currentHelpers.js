const getIsOwnNotice = (_id, notice) => {
  // console.log('getOwn', _id, notice);
  if (_id === notice.owner) {
    return { ...notice, own: true };
  }

  return { ...notice, own: false };
};

const getIsFavoriteNotice = (favoriteList, notice) => {
  // console.log('favoriteList', favoriteList);
  // console.log('notice', favoriteList);
  if (favoriteList.findIndex(favorite => favorite._id === notice._id) === -1) {
    // console.log('getIsFavoriteNotice', { ...notice, favorite: true });
    return { ...notice, favorite: false };
  }
  // console.log('getIsFavoriteNotice', { ...notice, favorite: false });
  return { ...notice, favorite: true };
};

export { getIsOwnNotice, getIsFavoriteNotice };
