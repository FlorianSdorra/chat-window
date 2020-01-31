import React from 'react';
import {connect} from 'react-redux';
import Message from './Message';


const MessagesContainer = props => {
    const {messages} = props;

    const messagesList = messages.map(message=>{
        return <Message key={message.timestamp} message={message}></Message>
    });

    return (
        <div className="messages">
            <h2>Messages</h2>
            {messagesList}
        </div>
    )
}

const mapStateToProps = state => {
    return {messages: state.messages}
};

export default connect(mapStateToProps)(MessagesContainer)
