import React from "react";
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

class NavbarDropdownMenu extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return(
            <a className="desktopDropdownLink">
                {this.props.title}
                <MenuList>
                    {this.props.menuItems.map(item => {
                        <MenuItem>
                            {item.icon ? <ListItemIcon>{item.icon}</ListItemIcon>
                                : <></>}
                            <ListItemText>{item.text}</ListItemText>
                        </MenuItem>
                    })}
                </MenuList>
            </a>
            
        );
    }

} export default NavbarDropdownMenu;