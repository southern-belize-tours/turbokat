//Import Components
import React from 'react';

import PhoneOptions from './PhoneOptions';

import './phoneWidgetStyle.css';


class PhoneWidget extends React.Component {

    constructor(props) {
        super();
    }

    render() {

        return (
            <div className="phoneWidget"> 
                <div className = "phone">
                    <div className = "phoneTop">
                        <div className = "phoneCamera">

                        </div>
                    </div>
                    <div className = "phoneBody">
                        <a className = "tlPhoneBtn"
                           href = "/secret_button">

                        </a>
                        <div className = "blPhoneBtn">

                        </div>

                        <div className = "trPhoneBtn">

                        </div>

                        <div className = "phoneScreen">
                            <img className="phoneImg"
                                 src={this.props.imgSrc}
                                 alt={this.props.imgAlt}/>
                        </div>

                        <PhoneOptions prompt = {this.props.prompt}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default PhoneWidget;
