// Styles
import './pumpkinLogo.css';

// Core
import React, { useState, useEffect, useRef } from 'react';

// Rate at which the pumpkin falls in pixel decceleration
const gravity = 3;

function PumpkinLogo(props) {
  // Used for component bounding box
  const pumpkinRef = useRef(null);
  let new_y_location = 0;

  // State variable for styles of pumpkin
  const [styles, setStyles] = useState({
      '--pumpkin-color': `${props && props.color ? props.color : "#ae04ff"}`, // Define a custom CSS variable
      position: `${props && props.velocity ? "absolute" : "relative"}`
  });
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [xVelo, set_x_velocity] = useState(0);
  const [yVelo, set_y_velocity] = useState(0);

    /**
     * "Tick" function to update the state variables controlling the pumpkin's position
     */
    const doGravity = () => {
      let collision = false;
      // We actually add the gravity to make it 'go down' as a css attribute
      let new_y_velocity = yVelo + gravity;

      // const parentElement = props.parentElement.current;
      let parentElement = null;
      if (props && props.parentRef && props.parentRef.current) {
        parentElement = props.parentRef.current;
      }
      let childElement = null;
      if (pumpkinRef && pumpkinRef.current) {
        childElement = pumpkinRef.current;
      }
      if (parentElement && childElement) {
        const parentRect = parentElement.getBoundingClientRect();
        const childRect = childElement.getBoundingClientRect();
  
        // Check if the child is outside of the parent element
        if (
          childRect.bottom + new_y_velocity >= parentRect.bottom
          // childRect.right < parentRect.left ||
          // childRect.left > parentRect.right ||
          // childRect.bottom < parentRect.top ||
          // childRect.top > parentRect.bottom
        ) {
          collision = true;
          new_y_location = parentRect.bottom - 170;
          new_y_velocity = Math.abs(new_y_velocity * .5) * -1;
          set_y_velocity(new_y_velocity);
        } else {
        }
      }
      set_y_velocity(new_y_velocity);
      if (collision == false) {
        new_y_location = y + new_y_velocity;
      } else {
      }
      let new_x_location = x + xVelo;
      setY(new_y_location);
      setX(new_x_location);
      setStyles({
        '--pumpkin-color': props.color || "#ae04ff",
        position: `${props && props.velocity ? "absolute" : "relative"}`,
        transform: `translate(${new_x_location}px, ${new_y_location}px)`,
      })
    }

    /**
     * Initialize velocity on creation
     */
    useEffect(() => {
      if (props.velocity) {
        let xVelocity = Math.floor(Math.random() * 6) + 1;
        let yVelocity = (Math.floor(Math.random() * 20) + 20) * -1;

        // 50% chance to make it go left, not right
        if (Math.floor(Math.random() * 2) > 0) {
          xVelocity *= -1;
        }

        // Update velocity state variables
        set_x_velocity(xVelocity);
        set_y_velocity(yVelocity);

        // Start moving the component
        setX(xVelocity);
        setY(yVelocity);
        setStyles({
          '--pumpkin-color': props.color || "#ae04ff",
          transform: `translate(${xVelocity}px, ${yVelocity}px)`,
          position: `${props && props.velocity ? "absolute" : "relative"}`
        });
      }
    }, [])

    // Update
    useEffect(() => {
      let interval = null;

      if (props.velocity) {
        interval = setInterval(doGravity, 50);
        // doGravity();
        // setTimeout(doGravity, 100);
      }

      return () => {
        if (props.velocity && interval) {
          clearInterval(interval);
        }
      }
    });

    return(
      <div className="pumpkinBody"
        ref={pumpkinRef}
        style={styles}>
        <div className = "pumpkinContainer">
          <div className ="pumpkinLeftEye"></div>
            <div className = "pumpkinRightEye"></div>
            <div className = "pumpkinNose"></div>
            <div className="pumpkinMouth"></div>
            <div className="pumpkinTopLeftTooth"></div>
            <div className="pumpkinTopRightTooth"></div>
            <div className="pumpkinBottomTooth"></div>
        </div>
      </div>
    );
} export default PumpkinLogo;