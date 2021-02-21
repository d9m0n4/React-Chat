import React from 'react';

import CheckIcon from '../CheckIcon';
import classNames from 'classnames';
import format from 'date-fns/format';

import parseISO from 'date-fns/parseISO';

import isToday from 'date-fns/isToday';
import './DialogItem.scss';
import { Avatar } from '..';

const getMessageTime = (created_at) => {
  const time = parseISO(created_at);

  if (isToday(time)) {
    return format(time, 'hh:mm');
  } else {
    return format(time, 'dd.MM.yyyy');
  }
};

export const DialogItem = ({ user, message, unread, isRead, isMe }) => (
  <div className={classNames('dialogs__item', { 'dialogs__item--online': user.isOnline })}>
    <div className="dialogs__item-avatar">
      <Avatar user={user} />
    </div>
    <div className="dialogs__item-info">
      <div className="dialogs__item-info-top">
        <b>{user.fullname}</b>
        <span>{getMessageTime(message.created_at)}</span>
      </div>
      <div className="dialogs__item-info-bottom">
        <p>{message.text}</p>
        {isMe && <CheckIcon isMe={true} isRead={isRead} />}
        {unread > 0 && <div className="dialogs__item-info-bottom-count">{unread}</div>}
      </div>
    </div>
  </div>
);
