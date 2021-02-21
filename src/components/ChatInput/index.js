import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { SmileOutlined, CameraOutlined, SendOutlined, AudioOutlined } from '@ant-design/icons';
// import classnames from 'classnames';
import './ChatInput.scss';

const ChatInput = (props) => {
  const [value, setValue] = useState('');
  return (
    <div className="chat-input">
      <div className="chat-input__smile-btn">
        <Button icon={<SmileOutlined />} />
      </div>
      <Input
        onChange={(e) => setValue(e.target.value)}
        size="large"
        placeholder="Введите текст сообщения..."
      />
      <div className="chat-input__actions">
        <Button icon={<CameraOutlined />} />
        {value ? <Button icon={<SendOutlined />} /> : <Button icon={<AudioOutlined />} />}
      </div>
    </div>
  );
};

export default ChatInput;
