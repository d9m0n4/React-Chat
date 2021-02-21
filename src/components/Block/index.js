import React from 'react';
import './block.scss';
import classnames from 'classnames';

export const Block = ({ children, className }) => {
  return <div className={classnames('block', className)}>{children}</div>;
};
