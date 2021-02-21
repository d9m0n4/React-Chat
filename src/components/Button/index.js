import React from 'react';
import { Button as BaseButton } from 'antd';
import classnames from 'classnames';
import './button.scss';

export const Button = (props) => {
  return (
    <BaseButton
      {...props}
      className={classnames('button', props.className, { button__large: props.size === 'large' })}
    />
  );
};
