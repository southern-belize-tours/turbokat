//Import Components 
import React from 'react';   
import PumpkinLogo from './pumpkin/pumpkinLogo';
import Bone from './pumpkin/bone';

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
            <nav className={`footer ${this.props.spooky && "spooky"}`}>
                <div className="ratingContent">
                    {this.props.spooky ? spookyFooterTitle: this.props.footerTitle}
                </div> 
                <div className="ratingMessage">
                    {this.props.spooky ? "Undead" : "Customers"} rate Turbokat a {this.currStars ? this.currStars : 0} out of {this.maxStars ? this.maxStars : 0} {this.props.spooky ? "bones" : "stars"}
                </div> 
                <div className="ratingContainer">
                    {/* {this.state.starList}  */}
                    {this.state && this.state.starList ? this.state.starList.map((star, idx) => 
                        idx < this.currStars ?
                            this.props.spooky ? <Bone></Bone>
                            : <div className="star good"></div>
                        :
                        this.props.spooky ? 
                            <PumpkinLogo color={"#ff7002"}></PumpkinLogo>
                        :
                            <div className="star bad"></div>
                    ) : <></>}
                </div>
            </nav>
            );
    }
}

export default Footer;