const getIsOwnNotice = (_id, notice) => {
  console.log('getOwn', _id, notice);
  if (_id === notice.owner) {
    return { ...notice, own: true };
  }

  return { ...notice, own: false };
};

const getIsFavoriteNotice = (favoriteList, notice) => {
  if (favoriteList.findIndex(favorite => favorite === notice._id)) {
    return { ...notice, favorite: true };
  }
  return { ...notice, favorite: false };
};

export { getIsOwnNotice, getIsFavoriteNotice };
