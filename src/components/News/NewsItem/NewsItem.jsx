import React from 'react';
import {
  CardNews,
  DescriptionCardNews,
  TitleCardNews,
  DateCardNews,
  UrlCardNews,
  CardButtonNews,
  BoxBand,
} from './NewsItem.styled';

const NewsItem = ({ title, description, date, url }) => {
  return (
    <CardNews>
      <BoxBand>
        <TitleCardNews>{title}</TitleCardNews>
      </BoxBand>

      <DescriptionCardNews>{description}</DescriptionCardNews>
      <CardButtonNews>
        <DateCardNews>{date}</DateCardNews>
        <UrlCardNews href={url} target="_blank">
          Read more
        </UrlCardNews>
      </CardButtonNews>
    </CardNews>
  );
};

export default NewsItem;
