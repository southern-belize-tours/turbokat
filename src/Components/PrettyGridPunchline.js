
//Import Components
import React from 'react';


class PrettyGridPunchline extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="prettyGridPunchline">
                {this.props.gridPunchline}
            </div>
        );
    }
}

export default PrettyGridPunchline;