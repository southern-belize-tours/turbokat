import './pumpkinLogo.css';

function PumpkinLogo(props) {
    const dynamicStyles = {
        '--pumpkin-color': `${props && props.color ? props.color : "#ae04ff"}`, // Define a custom CSS variable
      };

    return(
        <div className="pumpkinBody" style={dynamicStyles}>
            <div className ="pumpkinLeftEye"></div>
            <div className = "pumpkinRightEye"></div>
            <div className = "pumpkinNose"></div>
            <div className="pumpkinMouth"></div>
            <div className="pumpkinTopLeftTooth"></div>
            <div className="pumpkinTopRightTooth"></div>
            <div className="pumpkinBottomTooth"></div>
        </div>
    );
} export default PumpkinLogo;