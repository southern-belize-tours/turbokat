//Import Components
import React from 'react';

class CursedButtonPanel extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="cursedButton"
                onClick={this.props.clickFunction}>
                Verify</div> 
        );
    }
}

export default CursedButtonPanel;


/*                <div className="cursedTile"
                onClick={() => {}}
                                 style={style}>*/