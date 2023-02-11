import React, { useEffect, useState } from 'react';

import BASE_URL from '../../../../servises/api';
import Spinner from '../../../Spinner/Spinner';

import NoticeInfoCard from '../NoticeInfoCard/NoticeInfoCard';

const NoticesDetailsCard = noticeId => {
  const [isLoading, setIsLoading] = useState(false);
  const [noticeCard, setNoticeCard] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchNoticesDetails();
  }, []);

  const fetchNoticesDetails = async noticeId => {
    try {
      const res = await fetch(`${BASE_URL}/notices/sell/${noticeId}`);
      const result = await res.json();
      if (result) {
        setIsLoading(false);
        setNoticeCard(result);
      }
      return result;
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <>
      {isLoading ? <Spinner /> : <NoticeInfoCard item={noticeCard} />}
      {error && <p>{error}</p>}
    </>
  );
};

export default NoticesDetailsCard;
