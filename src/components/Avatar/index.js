import React from 'react';
import avatarFromHash from '../../utils/helpers/generateAvatarFromHash';

import './avatar.scss';

const Avatar = ({ user }) => {
  if (user.avatar) {
    return <img className="avatar" src={user.avatar} alt="" />;
  } else {
    const { color, colorLighten } = avatarFromHash(user._id);
    const avatarFirstChar = user.fullname[0].toUpperCase();
    return (
      <div
        style={{ background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96.57%)` }}
        className="avatar avatar--symbol">
        {avatarFirstChar}
      </div>
    );
  }
};

export default Avatar;
