import React from "react";
import { Tooltip } from "@mui/material";

class CartographerToolbar extends React.Component {
    constructor(props) {
        super();
    }

    render() {

        return (
            <div className="flex row max">
                <div className="flex row max width-150">
                    {this.props.icons.map(icon => 
                        <Tooltip title = {icon.label}>
                            <div className="cartographerToolbarIcon flex max centered"
                                onClick = {() => {this.props.clickFunction(icon.key);}}>
                                {icon.component}
                            </div>
                        </Tooltip>
                    )}
                </div>
            </div>
        );
    }

} export default CartographerToolbar;