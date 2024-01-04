import { useState } from "react";

function MobileSubDropdown (props) {
    const [show, setShow] = useState(false);

    return(
        <div>
            <div className="desktopDropdownLink"
                onClick = {(e) => {setShow(!show)}}>
                <div className="mobileSubDropdownText">{props.option.text}</div>
                <div className="hamburgerContainer">
                    <div className={`hamburger ${show ? "toggled" : ""}`}>
                        <div className="left"></div>
                        <div className="mid"></div>
                        <div className="right"></div> 
                    </div>
                </div>
                {/* Mobile Sub Dropdown Works! */}
                {/* {show && props.option.items.map(item =>
                    <a href={item.url}>
                        {item.text}
                    </a>
                )} */}
                {/* {props.option.items ? <span>{props.option.items.map(item => item.text)}</span> : <></>} */}
            </div>
            <div className={`mobileSubDropdown ${show ? "show" : ""}`}>
                {props.option.items.map(item =>
                    <a href={item.url}
                        className="mobileSubDropdownItem">
                        {item.text}
                    </a>
                )}
            </div>
        </div>
    )
}
export default MobileSubDropdown;