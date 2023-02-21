// Core Components
import React from "react";
import Carousel from 'react-material-ui-carousel'

// Custom Components
import HawaiiCarouselSlide from "./HawaiiCarouselSlide";

// Images
import rockImg from '../../Images/Hawaii/the_rock.webp';
import mauiImg from '../../Images/Hawaii/moana.jpg';

class HawaiiCarousel extends React.Component {

    constructor(props) {
        super();
        this.items = [
            {
                name: "The Rock is from Hawaii",
                description: "THe first weight he ever benched was a 10 rep of 135 pounds",
                img: rockImg
            },
            {
                name: "Random Name #2",
                description: "Hello World!",
                img: mauiImg
            }
        ];
    }

    render() {
        return(
            <div>
                <Carousel>
                {
                    this.items.map( (item, i) => <HawaiiCarouselSlide key={i} item={item} /> )
                }
                </Carousel>
            </div>
        )
    }
} export default HawaiiCarousel;