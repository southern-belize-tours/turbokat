const shapes = [
    {
        name: "Battery Relay", 
        /*
         * 3 = cloud computing 
         * 4 = data analytics 
         * 5 = IO Systems
         * 6 = Power Supplies
         * 7 = Defects 
         * 8 = Contractor
         * 10 = Feature 
         */ 
        availableTextures: [6],
        //Let 1 represent a typical tile the shape occupies and 2 represent the cursor vertex.
        //The grid is an array of 2D arrays giving shape options.
        //@TODO possibly implement a 3rd grid option where the Project Manager picks and it is suboptimal
        grid: [[
            [0, 0, 2, 0],
            [0, 1, 2, 0],
            [0, 2, 2, 0],
            [0, 0, 0, 0],
        ],
        [
            [0, 0, 2, 0],
            [0, 1, 2, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ]],
        gridRewards: [0, 1], 
        storyPoints: 2
    },    
    {
        name: "Cyber Attack", 
        availableTextures: [7],
        grid: [[
            [0, 1, 0, 2],
            [0, 2, 0, 2],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ]],
        gridRewards: [0,0], 
        storyPoints: 0
    },
    {
        name: "Model Training Lab", 
        /*
         * 3 = cloud computing = yellow
         * 4 = data analytics = blue
         * 5 = IO Systems = green
         * 6 = Power Supplies = brown
         * 7 = Defects = purple 
         * 8 = Contractor
         * 10 = Feature 
         */ 
        availableTextures: [6, 4],
        //Let 1 represent a typical tile the shape occupies and 2 represent the cursor vertex.
        //The grid is an array of 2D arrays giving shape options.
        //@TODO possibly implement a 3rd grid option where the Project Manager picks and it is suboptimal
        grid: [[
            [0, 0, 2, 0],
            [0, 0, 1, 0],
            [0, 0, 2, 0],
            [0, 0, 2, 0],
        ]],
        gridRewards: [0,0], 
        storyPoints: 2
    },
    {
        name: "Electrical Propulsion System", 
        /*
         * 3 = cloud computing = yellow
         * 4 = data analytics = blue
         * 5 = IO Systems = green
         * 6 = Power Supplies = brown
         * 7 = Defects = purple 
         * 8 = Contractor
         * 10 = Feature 
         */ 
        availableTextures: [6, 5],
        //Let 1 represent a typical tile the shape occupies and 2 represent the cursor vertex.
        //The grid is an array of 2D arrays giving shape options.
        //@TODO possibly implement a 3rd grid option where the Project Manager picks and it is suboptimal
        grid: [[
            [0, 2, 0, 0],
            [0, 1, 2, 0],
            [0, 0, 2, 0],
            [0, 0, 2, 0],
        ]],
        gridRewards: [0,0], 
        storyPoints: 2
    },
    {
        name: "Model Processing Output", 
        /*
         * 3 = cloud computing = yellow
         * 4 = data analytics = blue
         * 5 = IO Systems = green
         * 6 = Power Supplies = brown
         * 7 = Defects = purple 
         * 8 = Contractor
         * 10 = Feature 
         */ 
        availableTextures: [4, 5],
        //Let 1 represent a typical tile the shape occupies and 2 represent the cursor vertex.
        //The grid is an array of 2D arrays giving shape options.
        //@TODO possibly implement a 3rd grid option where the Project Manager picks and it is suboptimal
        grid: [[
            [0, 0, 2, 0],
            [2, 1, 2, 0],
            [0, 0, 2, 0],
            [0, 0, 0, 0],
        ]],
        gridRewards: [0,0], 
        storyPoints: 2
    },
    {
                name: "CCC", 
        /*
         * 3 = cloud computing 
         * 4 = data analytics 
         * 5 = IO Systems
         * 6 = Power Supplies
         * 7 = Defects 
         * 8 = Contractor
         * 10 = Feature 
         */ 
        availableTextures: [3,6],
        //Let 1 represent a typical tile the shape occupies and 2 represent the cursor vertex.
        //The grid is an array of 2D arrays giving shape options.
        //@TODO possibly implement a 3rd grid option where the Project Manager picks and it is suboptimal
        grid: [[
            [0, 2, 0, 0],
            [0, 2, 1, 0],
            [0, 2, 0, 0],
            [0, 0, 0, 0],
        ]],
        gridRewards: [0,0], 
        storyPoints: 2
    },
    {
        name: "Data Lake", 
        /*
         * 3 = cloud computing 
         * 4 = data analytics 
         * 5 = IO Systems
         * 6 = Power Supplies
         * 7 = Defects 
         * 8 = Contractor
         * 10 = Feature 
         */ 
        availableTextures: [4],
        //Let 1 represent a typical tile the shape occupies and 2 represent the cursor vertex.
        //The grid is an array of 2D arrays giving shape options.
        //@TODO possibly implement a 3rd grid option where the Project Manager picks and it is suboptimal
        grid: [[
            [0, 2, 0, 0],
            [0, 1, 0, 0],
            [0, 2, 0, 0],
            [0, 0, 0, 0],
        ],[
            [0, 2, 0, 0],
            [0, 2, 1, 0],
            [0, 0, 2, 2],
            [0, 0, 0, 0],
        ]],
        gridRewards: [1,0], 
        storyPoints: 1
    },
    {
        name: "CC Server", 
        /*
         * 3 = cloud computing = yellow
         * 4 = data analytics = blue
         * 5 = IO Systems = green
         * 6 = Power Supplies = brown
         * 7 = Defects = purple 
         * 8 = Contractor
         * 10 = Feature 
         */ 
        availableTextures: [3],
        //Let 1 represent a typical tile the shape occupies and 2 represent the cursor vertex.
        //The grid is an array of 2D arrays giving shape options.
        //@TODO possibly implement a 3rd grid option where the Project Manager picks and it is suboptimal
        grid: [[
            [0, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 2, 0, 0],
            [0, 0, 0, 0],
        ],[
            [0, 2, 0, 0],
            [2, 1, 2, 0],
            [0, 2, 0, 0],
            [0, 0, 0, 0],
        ]],
        gridRewards: [1,0], 
        storyPoints: 1
    }, 
    {
               name: "RF Inputs", 
        /*
         * 3 = cloud computing = yellow
         * 4 = data analytics = blue
         * 5 = IO Systems = green
         * 6 = Power Supplies = brown
         * 7 = Defects = purple 
         * 8 = Contractor
         * 10 = Feature 
         */ 
        availableTextures: [5],
        //Let 1 represent a typical tile the shape occupies and 2 represent the cursor vertex.
        //The grid is an array of 2D arrays giving shape options.
        //@TODO possibly implement a 3rd grid option where the Project Manager picks and it is suboptimal
        grid: [[
            [0, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 2, 0],
            [0, 0, 0, 0],
        ],[
            [0, 2, 0, 0],
            [0, 1, 2, 0],
            [0, 0, 2, 0],
            [0, 0, 0, 0],
        ]],
        gridRewards: [1,0], 
        storyPoints: 1
    },  
    {
        name: "Agile Engineering", 
        /*
         * 3 = cloud computing = yellow
         * 4 = data analytics = blue
         * 5 = IO Systems = green
         * 6 = Power Supplies = brown
         * 7 = Defects = purple 
         * 8 = Contractor
         * 10 = Feature 
         */ 
        availableTextures: [3,4,5,6,7],
        //Let 1 represent a typical tile the shape occupies and 2 represent the cursor vertex.
        //The grid is an array of 2D arrays giving shape options.
        //@TODO possibly implement a 3rd grid option where the Project Manager picks and it is suboptimal
        grid: [[
            [0, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ]],
        gridRewards: [0,0], 
        storyPoints: 0
    }, 
    {
        name: "Computational IO", 
        /*
         * 3 = cloud computing = yellow
         * 4 = data analytics = blue
         * 5 = IO Systems = green
         * 6 = Power Supplies = brown
         * 7 = Defects = purple 
         * 8 = Contractor
         * 10 = Feature 
         */ 
        availableTextures: [5,3],
        //Let 1 represent a typical tile the shape occupies and 2 represent the cursor vertex.
        //The grid is an array of 2D arrays giving shape options.
        //@TODO possibly implement a 3rd grid option where the Project Manager picks and it is suboptimal
        grid: [[
            [0, 2, 1, 0],
            [0, 0, 2, 0],
            [0, 0, 2, 0],
            [0, 0, 0, 0],
        ]],
        gridRewards: [0,0], 
        storyPoints: 2
    },
    {
        name: "Analytics Center", 
        /*
         * 3 = cloud computing = yellow
         * 4 = data analytics = blue
         * 5 = IO Systems = green
         * 6 = Power Supplies = brown
         * 7 = Defects = purple 
         * 8 = Contractor
         * 10 = Feature 
         */ 
        availableTextures: [3,4],
        //Let 1 represent a typical tile the shape occupies and 2 represent the cursor vertex.
        //The grid is an array of 2D arrays giving shape options.
        //@TODO possibly implement a 3rd grid option where the Project Manager picks and it is suboptimal
        grid: [[
            [0, 2, 2, 1],
            [0, 0, 0, 2],
            [0, 0, 0, 2],
            [0, 0, 0, 0],
        ]],
        gridRewards: [0,0], 
        storyPoints: 2
    },
    {
        name: "Backwards Incompatability", 
        availableTextures: [7],
        grid: [[
            [0, 2, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 2],
            [0, 0, 0, 0],
        ]],
        gridRewards: [0,0], 
        storyPoints: 0
    },
    {
        name: "Audit", 
        availableTextures: [7],
        grid: [[
            [0, 2, 2, 0],
            [0, 0, 1, 0],
            [0, 2, 2, 0],
            [0, 0, 0, 0],
        ]],
        gridRewards: [0,0], 
        storyPoints: 0
    },/*
    {
        availableTextures: [],
        grid: [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ]
    },
    {
        availableTextures: [],
        grid: [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ]
    },*/ 
];
export default shapes; 
