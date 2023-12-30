import { useEffect, useState } from "react";
import './FancyPhoto.css';

import bunnyImage from '../../Images/CursedCaptcha/Parsley/20210130_100243.jpg'

import chrimbusImage1 from '../../Images/FancyGrid/20231118_195532.jpg';
import chrimbusImage2 from '../../Images/FancyGrid/20231124_211028.jpg';
import chrimbusImage3 from '../../Images/FancyGrid/gold_tree.jpg';
import chrimbusImage4 from '../../Images/FancyGrid/check_square.jpg';
import chrimbusImage5 from '../../Images/FancyGrid/pink_disco.jpg';


function FancyPhoto (props) {

    const [transitioned, setTransitioned] = useState(false);
    const [images, setImages] = useState([bunnyImage, bunnyImage, bunnyImage, bunnyImage, bunnyImage, bunnyImage]);

    let height = 200;
    if (props && props.height) {
        height = props.height;
    }
    const width = height * 1.6; //golden ratio
    const borderWidth = Math.max(2, height/100 * 3);

    // Compute background color - defaults to white, prioritize props, else default for spooky is orange, christmas is red
    let bgColor = "white";
    if (props && props.backgroundColor) {
        bgColor = props.backgroundColor;
    } else if (props && props.spooky && (!props.backgroundColor)) {
        bgColor = "#ff7002";
    } else if (props && props.chrimbus && (!props.backgroundColor)) {
        bgColor = "var(--chrimbus-green)";
    }

    // Compute filling color - defaults to withTheme, prioritize props, else default for spooky is yellow
    let color = "red";
    if (props && props.color) {
        color = props.color;
    } else if (props && props.spooky && (!props.color)) {
        color = "yellow";
    } else if (props && props.chrimbus && (!props.color)) {
        color = "var(--chrimbus-red)";
    }

    // Compute accent color
    let colorSecondary = "blue";
    if (props && props.colorSecondary) {
        colorSecondary = props.colorSecondary;
    } else if (props && props.spooky && (!props.colorSecondary)) {
        colorSecondary = "orange";
    } else if (props && props.chrimbus && (!props.colorSecondary)) {
        colorSecondary = "var(--chrimbus-gold)";
    }

    const dynamicStyles = {
        '--fancy-photo-color-background': `${bgColor}`,
        '--fancy-photo-color': `${color}`,
        '--fancy-photo-color-secondary': `${colorSecondary}`,
        '--fancy-photo-border-width': `${borderWidth}px`,
        '--fancy-photo-gap': `${height/50}px`,
        height: `${height}px`,
        width: `${width}px`,
        backgroundColor: "var(--fancy-photo-color-background)",
      };

    //   let style = { backgroundImage: `url(${props.images[key].default})` };

    useEffect((props) => {
        setTimeout(() => {setTransitioned(true)}, 500);
        if (!props || !props.images) {
            setImages([chrimbusImage1, chrimbusImage2, chrimbusImage3, chrimbusImage4, chrimbusImage5, bunnyImage]);
        } else if (props && props.chrimbus) {

        }
    }, [])

    return (
        <div style={dynamicStyles}
            className={`fancyPhotoContainer ${transitioned ? "transitioned" : ""}`}>
            <div className = "fancyPhotoSquare">
            </div>
            <div className = "fancyPhotoTopBorder">
                <div className="fancyPhotoTopBorderLeft"></div>
                <div className="fancyPhotoTopBorderRight"></div>
            </div>
            <div className = "fancyPhotoPictureArea">
                <div className = "fancyPhotoPictureAreaLeftBlock">
                    <div>
                        <div className="fancyImage" style={{background: `url(${images[0]}) no-repeat`, backgroundSize: "cover", backgroundPosition: 'center'}}></div>
                        <div className="fancyImage" style={{background: `url(${images[1]}) no-repeat`, backgroundSize: "cover", backgroundPosition: 'center'}}></div>
                    </div>
                    <div>
                        <div className="fancyImage" style={{background: `url(${images[2]}) no-repeat`, backgroundSize: "cover", backgroundPosition: 'center'}}></div>
                        <div className="fancyImage" style={{background: `url(${images[3]}) no-repeat`, backgroundSize: "cover", backgroundPosition: 'center'}}></div>
                    </div>
                </div>
                <div className = "fancyPhotoPictureAreaRightBlock">
                    <div className="fancyImage" style={{background: `url(${images[3]}) no-repeat`, backgroundSize: "cover", backgroundPosition: 'center'}}></div>
                    <div>
                        <div className="fancyImage" style={{background: `url(${images[4]}) no-repeat`, backgroundSize: "cover", backgroundPosition: 'center'}}></div>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fancyPhotoBottomBorder">
                <div className="fancyPhotoBottomBorderRight"></div>
            </div>
            {/* <h1>Fancy Photo Works!</h1> */}
        </div>
    );
} 

export default FancyPhoto;