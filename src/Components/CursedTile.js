//Import Components
import React from 'react';

class CursedTile extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div className={this.props.toggled ? "cursedTile clicked" : "cursedTile"}
                onClick={() => {
                    this.props.clickFunction(this.props.id); 
                }}>
                <img alt="cursed captcha tile" src = {this.props.img}></img>
            </div>
        );
    }
}

export default CursedTile;