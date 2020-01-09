import React from 'react';
import InputBar from './InputBar';
import ActivityBar from './ActivityBar';

class ChatContainer extends React.Component{
    render(){
        return(
        <div className="chat_container">
            <InputBar />
            <ActivityBar />
        </div>
        )
    }
}

export default ChatContainer;