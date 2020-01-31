import React from 'react';
import {sendMessage} from '../actions';
import {connect} from 'react-redux';

class FormContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({value: event.target.value});
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.sendMessage(this.state.value);
        this.setState({value:''});
        
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                        />
                </label>
                    <input
                        type="submit"
                        value="Submit" 
                        />
            </form>
        )
    }
}
const mapStateToProps = state => {
    return state
};

export default connect(mapStateToProps, {sendMessage})(FormContainer)