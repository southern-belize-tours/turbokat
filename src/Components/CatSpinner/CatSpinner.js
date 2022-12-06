import React from "react";
import './CatSpinner.css';

class CatSpinner extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return(
            <div className="loading-cat">
                <div className="cat-body"></div>
                <div className="cat-animation-mask"></div>
                <div className="cat-head">
                    <div className="cat-face"></div>
                    <div className="cat-ear"></div>
                    <div className="cat-hand"></div>
                    <div className="cat-eye"></div>
                    <div className="cat-eye-light"></div>
                    <div className="cat-mouth"></div>
                    <div className="cat-beard left"></div>
                    <div className="cat-beard right"></div>
                </div>
                <div className = "cat-foot">
                    <div className="cat-belly"></div>
                    <div className="cat-leg"></div>
                    <div className="cat-tail"></div>
                </div>
            </div>
        );
    }
} export default CatSpinner;

// .loading-cat
//   .cat-body
//   .cat-animation-mask
//   .cat-head
    // .cat-face
    // .cat-ear
    // .cat-hand
    // .cat-eye
    // .cat-eye-light
    // .cat-mouth
    // .cat-beard.left
    // .cat-beard.right
//   .cat-foot
    // .cat-belly
    // .cat-leg
    // .cat-tail