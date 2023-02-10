import React from 'react';
import {
  CardNews,
  DescriptionCardNews,
  TitleCardNews,
  DateCardNews,
  UrlCardNews,
  CardButtonNews,
  BandNews,
} from './NewsItem.styled';

const NewsItem = ({ title, description, date, url }) => {
  return (
    <CardNews>
      <BandNews>
        <TitleCardNews>{title}</TitleCardNews>
      </BandNews>

      <DescriptionCardNews>{description}</DescriptionCardNews>
      <CardButtonNews>
        <DateCardNews>{date}</DateCardNews>
        <UrlCardNews href={url}>Read more</UrlCardNews>
      </CardButtonNews>
    </CardNews>
  );
};

export default NewsItem;
