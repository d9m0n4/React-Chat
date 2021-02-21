import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CheckIcon from '../CheckIcon';
import playSvg from '../../assets/play.svg';
import pauseSvg from '../../assets/pause.svg';
import convertToTime from '../../utils/helpers/convertCurrentTime';
import './message.scss';

import { Time } from '../';

import waveSvg from '../../assets/wave.svg';

const MessageAudio = ({ audioSrc }) => {
  const audioElem = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    audioElem.current.addEventListener(
      'playing',
      () => {
        setIsPlaying(true);
      },
      false,
    );
    audioElem.current.addEventListener(
      'ended',
      () => {
        setIsPlaying(false);
        setProgress(0);
        setCurrentTime(0);
      },
      false,
    );
    audioElem.current.addEventListener(
      'pause',
      () => {
        setIsPlaying(false);
      },
      false,
    );
    audioElem.current.addEventListener('timeupdate', () => {
      const duration = (audioElem.current && audioElem.current.duration) || 0;
      setCurrentTime(audioElem.current.currentTime);
      setProgress((audioElem.current.currentTime / duration) * 100);
    });
  }, []);

  const togglePlay = () => {
    if (!isPlaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  };

  return (
    <div className="message__audio">
      <audio ref={audioElem} src={audioSrc} preload="auto" />

      <div className="message__audio-progress" style={{ width: progress + '%' }}></div>
      <div className="message__audio-info">
        <div className="message__audio-btn">
          <button onClick={togglePlay}>
            {isPlaying ? <img src={pauseSvg} alt="pause" /> : <img src={playSvg} alt="play" />}
          </button>
        </div>
        <div className="message__audio-wave">
          <img src={waveSvg} alt="wave" />
        </div>
        <span className="message__audio-duration">{convertToTime(currentTime)}</span>
      </div>
    </div>
  );
};

const Message = ({ avatar, user, text, date, isMe, isReaded, attachments, isTyping, audio }) => {
  return (
    <div
      className={classnames('message', {
        'message--isme': isMe,
        'message--is-typing': isTyping,
        'message--image': attachments && attachments.length === 1,
        'message--is-audio': audio,
      })}>
      <div className="message__avatar">
        <img src={avatar} alt="" />
      </div>
      <div className="message__content">
        <CheckIcon isMe={isMe} isReaded={isReaded} />

        <div className="message__info">
          {(audio || text || isTyping) && (
            <div className="message__bubble">
              {text && <p className="message__text">{text}</p>}
              {isTyping && (
                <div className="message__typing">
                  <span />
                  <span />
                  <span />
                </div>
              )}
              {audio && <MessageAudio audioSrc={audio} />}
            </div>
          )}
          {attachments && (
            <div className="message__attachments">
              {attachments &&
                attachments.map((item, index) => (
                  <div key={index} className="message__attachments-item">
                    <img src={item.url} alt={item.fileName} />
                  </div>
                ))}
            </div>
          )}
          {date && (
            <span className="message__date">
              <Time date={new Date()} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

Message.defaultProps = {
  user: {},
};

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  user: PropTypes.object,
  attachments: PropTypes.array,
  isTyping: PropTypes.bool,
  audio: PropTypes.string,
};

// const Message1 = ({ avatar, user, text, date, isMe, isReaded, attachments, isTyping }) => {
//   return (
//     <div
//       className={classnames('message', {
//         'message--isme': isMe,
//         'message--is-typing': isTyping,
//         'message--image': attachments && attachments.length === 1,
//       })}>
//       <div className="message__avatar">
//         <img src={avatar} alt="" />
//       </div>
//       <div className="message__content">
//         <CheckIcon isMe={isMe} isReaded={isReaded} />

//         <div className="message__info">
//           {(text || isTyping) && (
//             <div className="message__bubble">
//               {text && <p className="message__text">{text}</p>}
//               {isTyping && (
//                 <div className="message__typing">
//                   <span />
//                   <span />
//                   <span />
//                 </div>
//               )}
//             </div>
//           )}
//           <div className="message__attachments">
//             {attachments &&
//               attachments.map((item) => (
//                 <div className="message__attachments-item">
//                   <img src={item.url} alt={item.fileName} />
//                 </div>
//               ))}
//           </div>
//           {date && (
//             <span className="message__date">
//               <Time date={new Date()} />
//             </span>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// Message1.defaultProps = {
//   user: {},
// };

// Message1.propTypes = {
//   avatar: PropTypes.string,
//   text: PropTypes.string,
//   date: PropTypes.string,
//   user: PropTypes.object,
//   attachments: PropTypes.array,
//   isTyping: PropTypes.bool,
// };

export default Message;
