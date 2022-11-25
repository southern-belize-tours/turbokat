//Import Components 
import React from 'react';

// MUI Components
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

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
        for (const [key, value] of Object.entries(images)) {
           // console.log(key, value);
           this.images.push(key);
        }
    }

    render() {
        return (
            <div className="homeBody">
                <h1 className="prettyGridCaption">
                    Parsley Hasslehopper Fan Page
                </h1>
                <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
                  <ImageList variant="masonry" cols={3} gap={8}>
                    {this.images.map((item) => (
                      <ImageListItem key={item}>
                        <img
                          src={`${images[item].default}?w=248&fit=crop&auto=format`}
                        //   srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        //   alt={item.title}
                          loading="lazy"
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                </Box>
                <div>
                    {/* {this.images.map(image => (
                        <div className="parsleyPic"> 
                            <img src={images[image].default}
                                height="200px"
                                width="200px"
                                loading="lazy"/> 
                        </div> ))} */}
                </div>
            </div> 
        );
    }
}

export default FansOnly;