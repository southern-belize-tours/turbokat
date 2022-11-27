import {secondLargestCluster,
    hasHoles, 
    clustersNextToThreeTerrains,
    clustersOfFour,
    largestCluster,
    outputSystems,
    columnsContainingIOSystems,
    connectContractorSystems, 
    surrounded, 
    notAdjacencyNorEdge, 
    nearContractorSystems, 
    adjacency,
    nearFeatures,
    squareEdge, 
    rowsAndColumns,
    bottomAndLeftDiagonals} from './cartographerUtils.js';

const availableContracts = [
    [   //Positioning Requirements  each complete diagonal 
        {exampleGrid: [
            [0,2,0,0,0,0,0],
            [2,0,0,0,0,0,0],
            [0,0,0,0,0,0,2],
            [0,0,2,0,0,1,0],
            [0,2,0,2,0,0,2],
            [0,0,2,0,0,0,0],
            [0,0,0,0,0,0,0] //TODO: COTS chassis has a bad example grid. 
        ],value: 6,id: 0, name: "COTS Chassis", description: "Earn 2 points for each empty space surrounded on all four sides by filled spaces or the edge of the system", criteria: hasHoles},
        {exampleGrid: [
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [2,0,0,0,0,0,0],
            [0,2,0,0,0,0,0],
            [2,0,2,0,0,0,0],
            [2,2,2,2,0,0,0],
            [2,0,2,0,2,0,0]
        ],value: 9, id: 1, name: "Waterfall Design", description: "Earn 3 points for each complete diagonal line of filled spaces that touches the left and bottom edges of the system", criteria: bottomAndLeftDiagonals},
        {exampleGrid: [
            [0,0,0,2,0,0,0],
            [0,0,0,2,0,0,0],
            [0,0,0,2,0,0,0],
            [0,0,0,1,0,0,0],
            [2,2,2,2,2,2,2],
            [0,0,0,2,0,0,0],
            [0,0,0,2,0,0,0]
        ], value: 6,id: 2, name: "System Arrays", description: "Earn 3 points for each complete column of filled spaces, and 3 points for each complete row of filled spaces. Contractor black boxes are included as filled spaces.", criteria: rowsAndColumns},
        {exampleGrid: [
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [2,1,2,2,0,0,0],
            [2,2,2,2,2,0,0],
            [2,2,2,2,2,2,0],
            [2,2,2,2,0,0,0]
        ],value: 8, id: 3, name: "Compact Chassis", description: "Earn 2 points for each filled space along the edge of the largest square", criteria: squareEdge}
    ],
    [   //Water and Farmland aka data analytics and CC servers
       /* {exampleGrid: [
            [0,0,0,0,0,0,0],
            [0,10,4,3,0,0,0],
            [0,4,4,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,13,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0]
        ],/*\\
        id: 0, 
        name: "Cloud Analytics Feature", 
        description: <div>Earn 3 points for each Cloud Computing server 
                    on a feature tile 
                        <div className = "blankExampleTile ccServerTile featureTile inline" style={{margin: "0px .5rem"}}></div>
                    and 1 point for each tile adjacent to a feature tile occupied by data analytics systems
                        <div className = "blankExampleTile featureTile inline" style={{marginLeft: ".5rem"}}></div>
                        <div className = "blankExampleTile dataAnalyticsTile inline" style={{marginRight: ".5rem"}}></div>
                     </div>, 
        criteria: nearFeatures},*/
        {exampleGrid: [
            [0,3,3,3,4,0,0],
            [0,0,4,4,4,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0]
        ],value:5,id: 0, name: "Proximate Computing", description: <div>Earn 1 point for each Cloud Computing Server
            <div className = "blankExampleTile ccServerTile inline" style={{margin: "0px .5rem"}}></div>
         adjacent to a Data Analytics tile <div className = "blankExampleTile dataAnalyticsTile inline" style={{marginRight: ".5rem"}}></div>
         , and earn 1 point for each Data Analytics tile adjacent to a Cloud Computing Server</div>
         , criteria: adjacency},
        {exampleGrid: [
            [0,0,0,0,0,0,0],
            [0,0,0,0,3,3,0],
            [0,4,0,0,1,3,0],
            [4,4,4,0,0,0,0],
            [0,1,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0]
        ],value:6,id: 1, name: "Contractor Analytics", 
        description: 
            <div>
                Earn 2 points for each tile occupied by a Cloud Computing Server
                <div className = "blankExampleTile ccServerTile inline" style={{margin: "0px .5rem"}}></div>
                or a Data Analytics tile
                <div className = "blankExampleTile dataAnalyticsTile inline" style={{margin: "0px .5rem"}}></div>
                adjacent to a contractor black box
                <div className = "blankExampleTile contractorTile inline" style={{margin: "0px .5rem"}}></div>
            </div>,
        criteria: nearContractorSystems},
        {exampleGrid: [
            [0,0,0,0,0,0,0],
            [0,1,3,0,0,0,0],
            [0,3,3,0,0,0,0],
            [0,0,0,0,0,0,4],
            [0,4,4,4,0,0,4],
            [0,0,0,0,0,0,4],
            [0,0,0,0,0,0,0]
        ],value:6,id: 2, name: "Multiple Sources of Truth", 
        description: 
            <div>
                Earn 2 points for each cluster of Cloud Computing Server tiles 
                <div className = "blankExampleTile ccServerTile inline" style={{margin: "0px .5rem"}}></div>
                not adjacent to Data Analytics tiles 
                <div className = "blankExampleTile dataAnalyticsTile inline" style={{margin: "0px .5rem"}}></div>, 
                nor an edge and for each cluster of Data Analytics System tiles not adjacent to Cloud Computing Server tiles, nor an edge
            </div>,
            criteria: notAdjacencyNorEdge}
    ],
    [   //Forest aka I/O systems 
        {exampleGrid: [
            [5,2,0,0,0,0,0],
            [2,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,2,2,0,0],
            [0,0,1,5,5,2,0],
            [0,0,0,2,2,0,0]
        ], value:3,id: 0, name: "IO Proximity", 
        description: 
            <div>Earn 1 point for each I/O system 
                <div className = "blankExampleTile ioSystemTile inline" style={{margin: "0 .5rem"}}></div>
                with all 4 edges surrounded by occuppied tiles, contractor black boxes, or edges.
            </div>,
         criteria: surrounded},
        {exampleGrid: [
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,5,1],
            [0,0,0,0,0,5,0],
            [0,0,0,0,1,5,0],
            [0,0,0,0,5,5,0]
        ],
        value: 5,
        id: 1,
        name: "Contractor IO Interface", 
        description: 
            <div>
                Earn 5 points for each contractor black box 
                <div className = "blankExampleTile contractorTile inline" style={{margin: "0 .5rem"}}></div>
                connected to another black box by an I/O system
                <div className = "blankExampleTile ioSystemTile inline" style={{margin: "0 .5rem"}}></div>
            </div>,
        criteria: connectContractorSystems},
        {exampleGrid: [
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,5,0,0,0,0],
            [0,0,5,0,0,0,0],
            [0,0,5,5,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0]
        ],value: 5, id: 2, name: "Sensor Fusion Distribution",
        description: 
            <div>
                Earn 1 point for each column occupied by an I/O system
                <div className = "blankExampleTile ioSystemTile inline" style={{margin: "0 .5rem"}}></div>
                1 point for each row occupied by an I/O system
            </div>, 
        criteria: columnsContainingIOSystems},
        {exampleGrid: [
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,5],
            [0,0,0,0,5,5,5]
        ], value: 4, 
        id: 3, name: "Outward-Facing IO", 
        description: 
        <div>
            Earn 1 point for each tile space along the edges occuppied by an I/O system
            <div className = "blankExampleTile ioSystemTile inline" style={{margin: "0 .5rem"}}></div>
        </div>,
         criteria: outputSystems},
    ],
    [
        //Village aka power supply systems 
        {exampleGrid: [
            [0,0,0,0,0,0,0],
            [0,0,0,0,6,0,0],
            [0,0,0,6,6,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,6,6,0,0],
            [0,0,6,6,6,0,0],
            [0,0,0,0,0,0,0]
        ],
        value: 5,
        id: 0,
        name: "Grand Power Grid",
        description: 
            <div>
                Earn 1 point for each Power Supply System
                <div className = "blankExampleTile powerSupply inline" style={{margin: "0 .5rem"}}></div>
                in the largest cluster of tiles occuppied by Power Supply Systems 
                which is non-adjacent to contractor black boxes
                <div className = "blankExampleTile contractorTile inline" style={{margin: "0 .5rem"}}></div>
            </div>,
        criteria: largestCluster},
        {exampleGrid: [
            [0,0,0,0,0,0,0],
            [0,0,0,0,6,0,0],
            [0,6,0,6,6,0,0],
            [6,6,0,0,0,0,0],
            [6,6,0,0,6,0,0],
            [0,0,0,6,6,0,0],
            [0,0,0,6,6,0,0]
        ],value: 6, id: 1, name: "Distributed Power System", 
        description: 
            <div>
                Earn 3 points for each cluster of Four or more tiles occuppied by Power Supply Systems
                <div className = "blankExampleTile powerSupply inline" style={{margin: "0 .5rem"}}></div>   
            </div>, criteria: clustersOfFour},
        {exampleGrid: [
            [4,0,0,4,6,6,5],
            [4,0,0,4,1,6,5],
            [4,0,0,4,0,5,5],
            [6,6,0,4,0,0,0],
            [3,6,5,5,5,0,0],
            [3,3,0,0,5,0,0],
            [3,0,0,0,0,0,0]
        ],value: 8, id: 2, name: "Compartmentailzed Power System", 
        description: 
            <div>
                Earn 4 points for each cluster of Power Supply Systems
                <div className = "blankExampleTile powerSupply inline" style={{margin: "0 .5rem"}}></div>
                adjacent to 3 or more different Systems,
                including Contractor Black Boxes
                <div className = "blankExampleTile contractorTile inline" style={{margin: "0 .5rem"}}></div>
            </div>,
            criteria: clustersNextToThreeTerrains},
        {exampleGrid: [
            [0,0,0,0,0,0,0],
            [0,0,0,0,6,0,0],
            [0,0,0,6,6,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,6,6,0,0],
            [0,0,6,6,6,0,0],
            [0,0,0,0,0,0,0]
        ],value: 6, id: 3, name: "Backup Generator", 
        description: 
            <div>
                Earn 2 points for each Power Supply System 
                    <div className = "blankExampleTile powerSupply inline" style={{margin: "0 .5rem"}}></div> 
                in the second largest cluster of tiles occuppied by Power Supply Systems
            </div>,
         criteria: secondLargestCluster}
    ]
]; export default availableContracts; 