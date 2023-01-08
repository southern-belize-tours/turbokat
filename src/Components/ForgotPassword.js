import React from 'react';

// MUI Components
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { DialogTitle, DialogActions, DialogContent, DialogContentText,
    TextField, 
    IconButton} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AddIcon from '@mui/icons-material/Add';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

// Custom Components
import CatSpinner from './CatSpinner/CatSpinner.js';
import CentisenpaiHead from './Centisenpai/CentisenpaiHead.js';
import CentisenpaiBody from './Centisenpai/CentisenpaiBody.js';

class ForgotPassword extends React.Component {


    // <LoginRightContainer userHealth={this.props.userHealth}
    //                 loseUserHealth = {this.props.loseUserHealth}
    //                 loseCentiHealth = {this.props.loseCentiHealth}
    //                 centiHealth={this.props.centiHealth}/> 
    constructor(props) {
        super();

        let passwordArray = [<div className = "formLine">
            <TextField label="Password" variant="outlined" />
            {/* <InputLabel id="demo-simple-select-label">Password Used For</InputLabel>
                <Select label="Password Used For">
                  <MenuItem>Zumiez</MenuItem>
                  <MenuItem>Wells Fargo</MenuItem>
                  <MenuItem>Roblox</MenuItem>
                  <MenuItem>Google</MenuItem>
                  <MenuItem>Competing Tax Software Sites</MenuItem>
                </Select> */}
            <TextField label="Used For" variant="outlined" />
            <IconButton>
                <RemoveRedEyeIcon/>
            </IconButton>
        </div>];

        this.state = {
            loading: false,
            authenticationFactor: 0,
            userId: null,
            forgotId: false,
            foundEmail: true,
            passwords: passwordArray,
            centisenpaiHealth: 100,
            centisenpaiActive: props.centiActive ? true : false,
        }

    }

    addPassword() {
        const newPassword = <div className = "formLine">
            <TextField label="Password" variant="outlined" />
            <TextField label="Used For" variant="outlined" />
            <IconButton>
                <RemoveRedEyeIcon/>
            </IconButton>
        </div>;
        let newPasswordArray = [...this.state.passwords, newPassword];
        this.setState({passwords: newPasswordArray});
    }

    advanceAuthentication() {
        const nextAuthentication = this.state.authenticationFactor + 1;
        // Logic to randomly fail pulling up their email
        if(this.state.authenticationFactor === 1) {
            let correctEmail = Math.floor(Math.random()*2);
            if( correctEmail === 0) {
                this.setState({authenticationFactor: nextAuthentication, foundEmail: true, loading: true})
            } else {
                this.setState({foundEmail: false, loading: true})
            }
        } else {
            this.setState({authenticationFactor: nextAuthentication,
                loading: true});
        }
        // Load for up to 2 seconds but a minimum of some constant amount of time to show the spinner
        let timeout = Math.floor(Math.random()*2000) + 3000;
        setTimeout(() => {
            this.setState({loading: false});
        }, timeout)
    } 

    componentWillUpdate(nextProps, nextState) {
        if(nextState.centisenpaiActive === false) {
            if((nextState.authenticationFactor === 1 && nextState.forgotId === false && nextState.passwords.length > 4) || (this.props.centiActive)){
                this.props.centiActiveCallback();
                this.setState({centisenpaiActive: true});
            }
        }
    }

    // componentDidUpdate() {
    //     // Activate centisenpai under certain conditions
    //     if (this.state.centisenpaiActive === false) {
    //         if(this.state.authenticationFactor === 1 && this.state.forgotId === false && this.state.passwords.length > 4) {
    //             this.setState({centisenpaiAcive: true, centisenpaiHealth: 100})
    //         }
    //     }
    // }

    render() {
        return(
            <Dialog open={this.props.openDialog}
                className = {this.state.centisenpaiActive === true ?
                    "centisenpai"
                    : ""}
                onClose={()=>{this.props.closeDialogFunctionCallback()}}>
                { this.state.centisenpaiActive === true ? <CentisenpaiHead/> : 
                    <DialogTitle>Forgot User ID/Password</DialogTitle>
                }
              <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    {this.state.loading ?
                        <CatSpinner/>
                    : this.state.authenticationFactor === 0 ?
                       <div className="dialogItems">
                            <div className="dialogTextContent">
                                Don't worry - turbokat.org uses the highest security measures to ensure your account is safe.
                            </div>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Which did you forget</InputLabel>
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  value={this.state.forgotId}
                                  label="Which did you forget"
                                  onChange={(event) => {this.setState({forgotId: event.target.value})}}
                                >
                                  <MenuItem value={true}>UserID</MenuItem>
                                  <MenuItem value={false}>Password</MenuItem>
                                </Select>
                              </FormControl>
                       </div>
                    : this.state.authenticationFactor === 1 ?
                        this.state.forgotId === true ?
                            <div className = "formFields">
                                {this.state.foundEmail === true ?
                                <div>
                                    Please enter the email address associated with your account
                                </div>
                                : <div>We were unable to validate the email address you entered. Please try again</div>}
                                <TextField id="email" label="Email" variant="outlined" />
                            </div>
                        :
                        <>
                            <div className = "formFields">
                                Please enter some of the passwords you use for your other online accounts
                                <Button variant = "outlined" onClick = {() => {this.addPassword()}}>
                                    <AddIcon></AddIcon> Add New Password
                                </Button>
                                {/* <div className = "formLine">
                                    <TextField label="Password" variant="outlined" />
                                    <TextField label="Used For" variant="outlined" />
                                </div> */}
                                <div className = "formFields">
                                    {this.state.passwords}
                                </div>
                            </div>
                            </>
                    : this.state.authenticationFactor === 2 ?
                        <div className = "formFields">
                            <div>
                                Great! We have been able to retrieve your information.
                            </div>
                            <div>
                                Just to verify it is you, please answer this security question.
                            </div>
                            <div>
                            Suppose that we have a network of k links, all in series, and that we would like to transmit a
single packet across all the links. Damage occurs with probability p, and once a
packet is damaged, it is lost along the entire network and must be retransmitted from the first
node. How many packets Nk
 should we expect to send?
                            </div>
                             <TextField id="securityAnswer" label="Answer" multiline
                                rows={4}variant="outlined" />
                        </div>
                    : <></>}
                  </DialogContentText>
                </DialogContent>
                { this.state.centisenpaiActive === true ? 
                    <></>
                : 
                    <DialogActions>
                    <Button variant = "contained" onClick={() => {this.advanceAuthentication()}}>
                    OK
                    </Button>
                    <Button variant = "contained" onClick={() => {
                    this.setState({loading: false,
                        authenticationFactor: 0});
                    this.props.closeDialogFunctionCallback()}}>
                    GIVE UP
                    </Button>
                </DialogActions>
                }
            </Dialog> 
        );
    }
} export default ForgotPassword;