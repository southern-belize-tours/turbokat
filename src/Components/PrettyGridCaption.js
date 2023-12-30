
//Import Components
import React from 'react';


class PrettyGridCaption extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <h1 className={`prettyGridCaption ${this.props.chrimbus && "chrimbus"}`}>
                {this.props.gridCaption}
            </h1>
        );
    }
}

export default PrettyGridCaption;