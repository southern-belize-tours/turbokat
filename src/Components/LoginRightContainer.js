// Mui Components
import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { DialogTitle, DialogActions, DialogContent, DialogContentText } from '@mui/material';

// Custom Components
import ForgotPassword from './ForgotPassword.js';

class LoginRightContainer extends React.Component {

    constructor(props) {
        super();

        this.state = {
            dialogOpen: false,
            rememberMe: false,
            forgotPassword: false,
        };
        this.closeForgotPasswordDialog = this.closeForgotPasswordDialog.bind(this);
        this.charities = [
          {name: "Alley Cat Families", link: "https://www.alleycat.org/"},
          {name: "Friends of Animals", link: "http://www.friendsofanimals.org/"},
          {name: "House Rabbit Society", link: "https://rabbit.org/"},
          {name: "Katrinas' Choccy Chip Procurement Funds", link: "https://www.paypal.com/donate/?hosted_button_id=V3GYH73CW9HN6"},
        ];
    }

    closeForgotPasswordDialog() {
        this.setState({forgotPassword: false});
    }

    render() {
        return (
            <div className="signInForms">
                <div>
                    <input type="text"
                           name="User_ID"
                           placeholder="User ID"/> 
                </div>
                <div>
                    <input type="text"
                           name="SSN"
                           placeholder="SSN"/> 
                </div>
                <div className="signInBtnContainer">
                    <Button variant="contained"
                        color="primary"
                        className = "flex max"
                        onClick={()=>{this.setState({dialogOpen: true})}}>
                        Sign In
                    </Button>
                    <Dialog open={this.state.dialogOpen}
                        onClose={()=>this.setState({dialogOpen: false})}>
                          <DialogTitle>Set backup account</DialogTitle>
                          <DialogContent>
                              <DialogContentText id="alert-dialog-description">
                                Let Google help apps determine location. This means sending anonymous
                                location data to Google, even when no apps are running.
                              </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                              {/* <Button onClick={handleClose}>Disagree</Button>
                              <Button onClick={handleClose} autoFocus>
                                Agree
                              </Button> */}
                            </DialogActions>
                        </Dialog>
                </div>
                <div className="fullRow disclaimer">
                    By clicking Sign In, you agree to our Terms and have read and acknowledge our Global Privacy Statement.
                </div>
                <div className="fullRow">
                    <input type="checkbox"
                           onChange = {(event) => {this.setState({rememberMe: event.target.checked})}}
                           className="checkbox" /> 
                    <span className="rememberMe">Remember me</span>
                    <Dialog open={this.state.rememberMe}
                        onClose={()=>this.setState({rememberMe: false})}>
                          <DialogTitle>Being Remembered</DialogTitle>
                          <DialogContent>
                                <div>
                                The very idea of existentialism is a human crisis.
                                Everyone fears that when they're gone, their time on this world eventually will be completely forgotten.
                                </div>
                                <div>
                                This is certainly the case with this your interactions on this website, given we don't have a database connected.
                                </div>
                                <div>
                                It may be best to consider the ripples of impact that you had on this earth.
                                One way to help bring forth change is by donating to a worthy cause. Here are a few to consider.
                                </div>
                                <div>
                                <ol>
                                {this.charities.map((charity) => 
                                  <li className="charityItem">
                                    <a href={charity.link} rel="noreferrer" target="_blank">{charity.name}</a>
                                  </li>
                                )}
                                </ol>
                                </div>
                            </DialogContent>
                            <DialogActions className="centerButtons">
                              {/* <Button onClick={handleClose}>Disagree</Button>
                              <Button onClick={handleClose} autoFocus>
                                Agree
                              </Button> */}
                              <Button variant = "contained" onClick={() => {this.setState({rememberMe: false})}}>
                                OK
                              </Button>
                            </DialogActions>
                        </Dialog> 
                </div>
                <div className="fullRow rememberMe forgot">
                    <div onClick={() => this.setState({forgotPassword: true})}>Forgot user ID or password?</div>
                    <ForgotPassword openDialog = {this.state.forgotPassword || this.props.centiActive}
                      centiActiveCallback = {this.props.centiActiveCallback}
                      centiActive = {this.props.centiActive}
                      userHealth={this.props.userHealth}
                      loseUserHealth = {this.props.loseUserHealth}
                      loseCentiHealth = {this.props.loseCentiHealth}
                      centiHealth={this.props.centiHealth}
                      closeDialogFunctionCallback = {this.closeForgotPasswordDialog}/>
                    <span> | </span>
                    <div>Create an account</div>
                </div>
            </div>
        );
    }
}

export default LoginRightContainer;