import React from 'react';
import readed from '../../assets/checked.svg';
import noreaded from '../../assets/Checkone.svg';

const CheckIcon = ({ isMe, isRead }) =>
  isMe && isRead ? (
    <img key={Date.now()} className="message__icon-readed" src={readed} alt="Checked icon" />
  ) : isMe && !isRead ? (
    <img key={Date.now()} className="message__icon-readed" src={noreaded} alt="Checked icon" />
  ) : (
    ''
  );

export default CheckIcon;
