import React from "react";
import { Paper, Button } from '@mui/material'

class HawaiiCarouselSlide extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return(
            <div>
                <Paper>
                    <h2>{this.props.item.name}</h2>
                    <img src={this.props.item.img}></img>
                    <p>{this.props.item.description}</p>

                    <Button className="CheckButton">
                        Check it out!
                    </Button>
                </Paper>
            </div>
        )
    }
} export default HawaiiCarouselSlide;