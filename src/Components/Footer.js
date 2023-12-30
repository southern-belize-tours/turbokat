//Import Components 
import React from 'react';   
import PumpkinLogo from './pumpkin/pumpkinLogo';
import Bone from './pumpkin/bone';
import Snowflake from './Snowflake';

const spookyFooterTitle = "Join the billions of Bone Boys";

class Footer extends React.Component {

    constructor(props) {
        super();
        this.maxStars = Math.floor(Math.random() * 6) + 7;
        while (!this.maxStars % 2) this.maxStars = Math.floor(Math.random() * 6) + 7;
        this.currStars = Math.floor(Math.random() * this.maxStars) + 1;
        this.setState({maxStars: this.maxStars,
            currStars: this.currStars,
        })
    }

    createStarList(maxStars, currStars) {
        let starList = [];
        for (let i = 0; i < maxStars; ++i) {
            if (this.props.spooky) {
                if (i < currStars) {
                    starList[i] = <Bone></Bone>;
                } else {
                    starList[i] = <PumpkinLogo color={"#ff7002"}></PumpkinLogo>;
                }
            } else {
                starList[i] = <div className={i < currStars ?
                    "star good" :
                    "star bad"}>
                </div>;
            }
        }
        return starList;
    }

    componentDidMount(props) {
        this.setState({starList: this.createStarList(this.maxStars, this.currStars)})
    }

    render() {
        return (
            <nav className={`footer ${this.props.spooky ? "spooky" : ""} ${this.props.chrimbus ? "chrimbus" : ""}`}>
                <div className="ratingContent">
                    {this.props.spooky ? spookyFooterTitle: this.props.footerTitle}
                </div> 
                <div className="ratingMessage">
                    {this.props.spooky ? "Undead" : "Customers"} rate Turbokat a {this.currStars ? this.currStars : 0} out of {this.maxStars ? this.maxStars : 0} {this.props.spooky ? "bones" : this.props.chrimbus ? "snowflakes" : "stars"}
                </div> 
                <div className="ratingContainer">
                    {/* {this.state.starList}  */}
                    {this.state && this.state.starList ? this.state.starList.map((star, idx) => 
                        idx < this.currStars ?
                            this.props.spooky ? <Bone key={`bone-full-${idx}`}></Bone>
                            : this.props.chrimbus ? <Snowflake key={`snowflake-full-${idx}`} mobile={false} filled={true}></Snowflake>
                            : <div key={`star-full-${idx}`} className="star good"></div>
                        :
                        this.props.spooky ? 
                            <PumpkinLogo key={`pumpkin-empty-${idx}`} color={"#ff7002"}></PumpkinLogo>
                        : this.props.chrimbus ? <Snowflake key={`snowflake-empty-${idx}`} mobile={false}></Snowflake>
                        :
                            <div key={`star-empty-${idx}`} className="star bad"></div>
                    ) : <></>}
                </div>
            </nav>
            );
    }
}

export default Footer;