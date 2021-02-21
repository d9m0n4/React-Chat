import React from 'react';
import { Empty } from 'antd';
import { Message } from '../../components';

import './Messages.scss';

const Messages = ({ items }) => {
  return items ? (
    <div>
      <Message
        avatar="https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        date="Sun Apr 21 2020 21:55:32"
        audio="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
      />
      <Message
        avatar="https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        date="Sun Apr 21 2020 21:55:32"
        text="Дратути"
      />
      <Message
        avatar="https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        date="Sun Apr 21 2020 21:55:32"
        text="Дратути"
      />
      <Message
        avatar="https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        date="Sun Apr 21 2020 21:55:32"
        text="Дратути"
      />
      <Message
        avatar="https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        date="Sun Apr 21 2020 21:55:32"
        text="Дратути"
      />

      <Message
        avatar="https://images.unsplash.com/photo-1546753051-f9cbab09c91b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        text="Салам, брат Цезарь!"
        isMe={true}
        isReaded={false}
      />
      <Message
        avatar="https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        date="Sun Apr 21 2020 21:55:32"
        text="Дратути"
      />
      <Message
        avatar="https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        date="Sun Apr 21 2020 21:55:32"
        text="Дратути"
      />
      <Message
        avatar="https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        date="Sun Apr 21 2020 21:55:32"
        text="Дратути"
      />
      <Message
        avatar="https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        date="Sun Apr 21 2020 21:55:32"
        text="Дратути"
      />

      <Message
        date="Sun Apr 22 2020 21:55:32"
        avatar="https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        attachments={[
          {
            filename: 'attachment',
            url: 'https://source.unsplash.com/100x100/?random=1&nature,water',
          },
        ]}
      />
    </div>
  ) : (
    <Empty description="Откройте диалог" />
  );
};

export default Messages;
