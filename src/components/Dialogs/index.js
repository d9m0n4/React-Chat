import React from 'react';
import { DialogItem } from '../DialogItem';
import { Input, Empty } from 'antd';

import './Dialogs.scss';
import orderBy from 'lodash/orderBy';

const Dialogs = ({ items, userId, onSearch, inputValue }) => (
  <div className="dialogs">
    <div className="dialogs__search">
      <Input.Search
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Поиск среди контактов"
        value={inputValue}
      />
    </div>
    {items.length ? (
      orderBy(items, ['created_at'], ['desc']).map((item) => (
        <DialogItem
          key={item._id}
          user={item.message.user}
          message={item.message}
          unread={0}
          isMe={item.message.user._id === userId}
          isRead={item.message.isRead}
        />
      ))
    ) : (
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Ни чего не найдено" />
    )}
  </div>
);

export default Dialogs;
