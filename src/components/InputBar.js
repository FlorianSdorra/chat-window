import React from 'react';

class InputBar extends React.Component {
    render(){
        return(
            <div className="input_bar">
                <form className="input_form" onSubmit={this.handleSubmit}>
                <label className="input_item">
                <input className="input_text"
                type="text"
                />
                </label>
                <input className="input_button" type="submit" value="SEND" />
                </form>
            </div>
        )
    }
}

export default InputBar