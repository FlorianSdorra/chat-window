/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import noodle from '../assets/images/Come-and-See-Poster-janus.png';
import sad from '../assets/images/1edfbf9af969d9d0cfd09e863b795b1f.png';

const Message = props => {
    return(
        <div className={'message ' + (props.message.user ==='user-1' ? '' : 'received')}>
            <div className="avatar">{props.message.user === 'user-1' ? (<img src={noodle}></img>) : (<img src={sad}></img>)}
            </div>
      <div className="text">
        <p>{props.message.text}</p>
      </div>
      <div className="time">
        <p>{props.message.timestamp}</p>
      </div>
        </div>
    );
};

export default Message;