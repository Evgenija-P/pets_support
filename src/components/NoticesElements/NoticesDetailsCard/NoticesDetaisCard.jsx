import React, { useEffect, useState } from 'react';

import BASE_URL from '../../../servises/api';
import Spinner from '../../Spinner/Spinner';

import NoticeDetailsCard from './NoticeDetailsCard';

const NoticesDetailsCard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [notices, setNotices] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchNoticesDetails();
  }, []);

  const fetchNoticesDetails = async () => {
    try {
      const res = await fetch(`${BASE_URL}/notices`);
      const result = await res.json();
      if (result) {
        setIsLoading(false);
        setNotices(result);
      }
      return result;
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <>
      {isLoading ? <Spinner /> : <NoticeDetailsCard items={notices} />}
      {error && <p>{error}</p>}
    </>
  );
};

export default NoticesDetailsCard;
