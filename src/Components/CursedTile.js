//Import Components
import React from 'react';

class CursedTile extends React.Component {

    constructor(props) {
        super();
        this.state = {toggled: false}
    }

    toggleTile() {
        //this.setState({toggled: !this.state.toggled})
    }

    render() {
        return (
            <div className={this.state.toggled ? "cursedTile clicked" : "cursedTile"}
                onClick={() => {
                    this.props.clickFunction(this.props.id, !this.state.toggled); 
                    this.setState({ toggled: !this.state.toggled })
                }}
                 style={this.props.style}>
                
            </div>
        );
    }
}

export default CursedTile;


/*                <div className="cursedTile"
                onClick={() => {}}
                                 style={style}>*/