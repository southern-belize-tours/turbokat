//Import Components 
import React from 'react';

// MUI Components
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import lionheadImage from '../Images/Fans_Only/highlight_reel/lionhead_art.png'
import grapefruitImage from '../Images/Fans_Only/highlight_reel/grapefruit.png'


function importAll(r) {
    let ret = [];
    let i = 0;
    r.keys().map((item, index) => { ret[item.replace('./', '')] = r(item); ++i });
    ret["numKeys"] = i;
    return ret;
}
let images = importAll(require.context('../Images/Fans_Only', false, /\.(jpg)$/)); 

class FansOnly extends React.Component {

    constructor(props) {
        super();
        this.images = [];
        for (const [key,] of Object.entries(images)) {
           this.images.push(key);
        }
    }

    render() {
        return (
            <div className="homeBody">
                <h1 className="prettyGridCaption">
                    Parsley Hasslehopper Fan Page
                </h1>
                <div className="fansContainer">
                  <img src={lionheadImage}></img>
                  <img src={grapefruitImage}></img>
                </div>
                <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
                  <ImageList variant="masonry" cols={3} gap={8}>
                    {this.images.map((item) => (
                      <ImageListItem key={item}>
                        <img
                          alt="The beautiful bunnuy Parsley Psychomantis Hasslehopper"
                          src={`${images[item]}?w=248&fit=crop&auto=format`}
                          loading="lazy"
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                </Box>
                <div>
                </div>
            </div> 
        );
    }
}

export default FansOnly;