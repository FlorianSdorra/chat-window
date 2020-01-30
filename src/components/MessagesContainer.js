import React from 'react';
import {connect} from 'react-redux'

const MessagesContainer = props => {
    return <h2>{props.message}</h2>
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps)(MessagesContainer)
