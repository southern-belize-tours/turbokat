import React from "react";

import './CentisenpaiStyle.css';

class CentisenpaiHead extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className = "centisenpaiHead">
                <div className = "centisenpaiClaw left"></div>
                <div className = "centisenpaiClaw right"></div>
                <div className = "centisenpaiFaceContainer">
                    <div className = "centisenpaiFace">
                        <div className = "centisenpaiEye left"></div>
                        <div className = "centisenpaiEye right"></div>
                        <div className = "centisenpaiNose"></div>
                    </div>
                </div>
            </div>
        );
    }
} export default CentisenpaiHead;