const getIsOwnNotice = (_id, notice) => {
  console.log('getOwn', _id, notice);
  if (_id === notice.owner) {
    // console.log('owner true', { ...currentNotices, own: true });
    return { ...notice, own: true };
  }
  //   console.log('owner false', { ...currentNotices, own: false });
  return { ...notice, own: false };
};

const getIsFavoriteNotice = (favoriteList, notice) => {
  //   console.log(
  //     'getIsFavoriteNotice',
  //     favoriteList,
  //     favoriteList.findIndex(notice._id)
  //   );

  if (favoriteList.findIndex(favorite => favorite === notice._id)) {
    return { ...notice, favorite: true };
  }
  return { ...notice, favorite: false };
};

export { getIsOwnNotice, getIsFavoriteNotice };
