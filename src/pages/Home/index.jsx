import React from 'react';
import { TeamOutlined, FormOutlined, SmileOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Input, Button } from 'antd';
import { Messages, Status, ChatInput } from '../../components';
import { Dialogs } from '../../containers/';

import dialogs from '../../dialogs.json';

import './home.scss';

export const Home = () => {
  return (
    <section className="home">
      <div className="chat">
        <div className="chat__sidebar">
          <div className="chat__sidebar-header">
            <div>
              <TeamOutlined />
              <span>Список диалогов</span>
            </div>
            <Button icon={<FormOutlined />} />
          </div>

          <div className="chat__sidebar-dialogs">
            <Dialogs userId={1} items={dialogs} />
          </div>
        </div>
        <div className="chat__dialog">
          <div className="chat__dialog-header">
            <div />
            <div className="chat__dialog-header-center">
              <b className="chat__dialog-header-username">Гай Юлий Цезарь</b>
              <div className="chat__dialog-header-status">
                <Status />
              </div>
            </div>
            <Button icon={<EllipsisOutlined />} />
          </div>
          <div className="chat__dialog-messages">
            <Messages />
          </div>
          <div className="chat__dialog-input">
            <ChatInput />
          </div>
        </div>
      </div>
    </section>
  );
};
