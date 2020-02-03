import React from 'react';
import '../css/App.scss';
import MessagesContainer from './MessagesContainer';
import FormContainer from './FormContainer';




class App extends React.Component{
  
  render(){
    return (
      <div className="wrapper">
        <div className="app">
          <MessagesContainer></MessagesContainer>
          <FormContainer></FormContainer>
      </div>
        <div className="le-pic"></div>
      </div>
        
    );
  }

  
}

export default App;
