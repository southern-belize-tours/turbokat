// React Core
import React from 'react';

// Custom Components
import HawaiiCarousel from './HawaiiCarousel';

// Styles
import "./Hawaii.css";

class Hawaii extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return(
            <div class="hawaiiContainer">
                <HawaiiCarousel/>
            </div>
        )
    }
} export default Hawaii;