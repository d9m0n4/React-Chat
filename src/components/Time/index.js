import React, { Fragment } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import ru from 'date-fns/locale/ru/index';

const Time = ({ date }) => (
  <Fragment>{formatDistanceToNow(date, { locale: ru, addSuffix: true })}</Fragment>
);

export default Time;
