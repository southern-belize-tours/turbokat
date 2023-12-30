import './cat.css';

function Cat (props) {

    let size = 200;
    if (props && props.size) {
        size = props.size;
    }
    const borderWidth = Math.max(2, size/100 * 3);

    // Compute background color - defaults to red, prioritize props, else default for spooky is orange
    let bgColor = "red";
    if (props && props.backgroundColor) {
        bgColor = props.backgroundColor;
    } else if (props && props.spooky && (!props.backgroundColor)) {
        bgColor = "#ff7002";
    } else if (props && props.chrimbus && (!props.backgroundColor)) {
        bgColor = "var(--chrimbus-red)";
    }

    // Compute filling color - defaults to withTheme, prioritize props, else default for spooky is yellow
    let color = "white";
    if (props && props.color) {
        color = props.color;
    } else if (props && props.spooky && (!props.color)) {
        color = "yellow";
    }

    const dynamicStyles = {
        '--cat-color-background': `${bgColor}`,
        '--cat-color': `${color}`, // Define a custom CSS variable
        '--cat-border-width': `${borderWidth}px`,
        height: `${size}px`,
        width: `${size}px`
      };

    return (
        <div className="catContainer"
            style={dynamicStyles}>
                {props.chrimbus && <div className="ornamentTop"></div>}
            <div className="catEars"></div>
            <div className="catLeftSide"></div>
            <div className="catRightSide"></div>
            <div className="catTail"></div>
            <div className="catLeftArm"></div>
            <div className="catRightArm"></div>
            <div className="catCenterArm"></div>
            <div className="catLeftHand"></div>
            <div className="catRightHand"></div>
            {props && props.spooky && 
            <>
                <div className="catSpookyRightEye"></div>
                <div className="catSpookyLeftEye"></div>
                <div className="catSpookyNose"></div>
            </>
            }
        </div>
    );

} export default Cat;