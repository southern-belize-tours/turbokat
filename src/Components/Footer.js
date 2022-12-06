//Import Components 
import React from 'react';   


class Footer extends React.Component {

    constructor(props) {
        super();
        this.maxStars = Math.floor(Math.random() * 6) + 7;
        while (!this.maxStars % 2) this.maxStars = Math.floor(Math.random() * 6) + 7;
        this.currStars = Math.floor(Math.random() * this.maxStars) + 1;
        this.starList = [];
        for (let i = 0; i < this.maxStars; ++i) {
            this.starList[i] = <div className={i < this.currStars ?
                                              "star good" :
                                              "star bad"}>
                               </div>;
        }
    }

    render() {
        return (
            <nav className="footer">
                <div className="ratingContent">
                    {this.props.footerTitle}
                </div> 
                <div className="ratingMessage">
                    Customers rate Turbokat a {this.currStars} out of {this.maxStars} stars
                </div> 
                <div>
                    {this.starList} 
                </div>
            </nav>
            );
    }
}

export default Footer;