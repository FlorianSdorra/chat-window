import React from 'react';
import {connect} from 'react-redux';
import Message from './Message';
import store from '../store';


const MessagesContainer = props => {
    const {messages} = props;
    console.log(store)

    const messagesList = messages.map(message=>{
        return <Message key={message.timestamp} message={message}></Message>
    });

    return (
        <div className="messages">
            <h2 className="messages-header">Messages</h2>
            <div className="messages-list">{messagesList}</div>
        </div>
    )
}

const mapStateToProps = state => {
    return {messages: state.messages}
};

export default connect(mapStateToProps)(MessagesContainer)
