import React from 'react';

class ActivityBar extends React.Component {
    render(){
        return (
            <div className="activity_bar">
                <button className="you">YOU</button>
                <button className="friend">YOUR IMAGINARY FRIEND</button>
            </div>
        )
    }
}

export default ActivityBar;