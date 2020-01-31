// InitialState

const initialState ={
    messages: []
};

// Reducer
const chatReducer = (state = initialState, action)=>{
    if (action.type === 'SEND_MESSAGE'){
        const newMessage = {
            text: action.payload,
            timestamp: new Date().getTime()
        };

        state.messages = [...state.messages, newMessage];

        return Object.assign({}, state)
    }
    return state;
}

export default chatReducer;