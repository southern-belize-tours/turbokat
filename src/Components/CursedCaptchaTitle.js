
//Import Components
import React from 'react';

class CursedCaptchaTitle extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="cursedCaptchaTitle">
                <div>Select all images with a</div> 
                <div>{this.props.title}</div>
                <div>Click verify once there are none left.</div>
            </div>
        );
    }
}

export default CursedCaptchaTitle;