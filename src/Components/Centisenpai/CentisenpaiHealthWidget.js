import React from "react";

import './CentisenpaiStyle.css';

class CentisenpaiHealthWidget extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = "healthWidgetContainer">
                <div className = "pokemonNameContainer">
                    <div>
                        Centisenpai
                    </div>
                    <div>
                        Lv100
                    </div>
                </div>
                <div className = "healthWidget">
                    <div className ="hp">HP</div>
                    <div className = "healthContainer">
                        <div className = "health" style={{width: this.props.health + "%"}}></div>
                    </div>
                 </div>
            </div>
            
        );
    }
} export default CentisenpaiHealthWidget;