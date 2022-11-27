function minSize(x, y, z){
    if(x>=y)return 1; 
    return 0; 
}

function notNextTo(x, y, z){
    if(!(z.includes(y)))return 1;
    return 0;  
}

function notNextToList(x, y, z){
    for(let i=0;i<y.length;++i){
        if(z.includes(y[i]))return 0; 
    }
    return 1; 
}

function nextTo(x, y, z){
    //We keep track of empty tiles and edges in our adjacency list, so factor for this. 
    let temp = []; 
    for(let i=0;i<z.length;++i){
        if(!temp.includes(z[i]))temp.push(z[i]%10); 
    }
    let len=temp.length; 
    if(temp.includes(0))len--; 
    if(temp.includes(-1))len--; 
    if(y<=len)return 1; 
}


//Takes in the array, the tile type it is searching for, and a minimum cluster size. 
function countClusters(skyMap, type, evaluationFunction, evalCriteria, clusterSizes, adjacentMountains) {
    if (skyMap[0]==null) {
      return 0;
    }
    if(adjacentMountains==null)
        adjacentMountains = []; 
    let height = skyMap.length;
    let width = skyMap[0].length;
    let clouds = 0;
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        if (skyMap[i][j]%10 == type) {
          let adjacentTextures = []; 
          adjacentMountains.push([]); 
          let retVal = Math.max(1, walkInClouds(i, j, skyMap, type, adjacentTextures, adjacentMountains[adjacentMountains.length-1]));
          let retEval = evaluationFunction(retVal, evalCriteria, adjacentTextures);
          if(retEval > 0) 
          {
              clouds+=retEval;
              if(clusterSizes!=null)clusterSizes.push(retVal); 
          }
        }
      }
    }
  
    return clouds;
  }
  
  //Computes adjacent tiles
  //
  // i = row index
  // j = column index
  // sky = 2D array of tile object parameters
  // min = minimum cluster size
  // curr = current cluster size
  function walkInClouds(i, j, sky, type, adjacentTextures, adjacentMountains) {
    let ret = 0//curr; 
    //Sky [i-1] is the previous row. Sky[i-1][j] is the above tile. 
   
    if (+(sky[i - 1] && sky[i - 1][j]%10==type)) {
      sky[i - 1][j]=0;
      ret+=walkInClouds(i - 1, j, sky, type, adjacentTextures, adjacentMountains);
      ++ret; 
    }
    else if(sky[i-1]/* && !adjacentTextures.includes(sky[i-1][j]%10)*/)
    {
        adjacentTextures.push(sky[i-1][j]%10); 
        if(sky[i-1][j]%10==9){
            if(!adjacentMountains.includes(parseInt(i-1)+","+parseInt(j)))adjacentMountains.push(parseInt(i-1)+","+parseInt(j)); 
        }
    }
    else if(sky[i-1]==null && !adjacentTextures.includes(-1))adjacentTextures.push(-1); 
  
    if (+(sky[i][j + 1] && sky[i][j+1]%10==type)) {
      sky[i][j + 1]=0;
      ret+=walkInClouds(i, j + 1, sky, type, adjacentTextures, adjacentMountains);
      ++ret;  
    }else if(sky[i][j+1]/* && !adjacentTextures.includes(sky[i][j+1]%10)*/)
    {
        adjacentTextures.push(sky[i][j+1]%10);
        if(sky[i][j+1]%10==9){
            if(!adjacentMountains.includes(parseInt(i)+","+parseInt(j+1)))adjacentMountains.push(parseInt(i)+","+parseInt(j+1)); 
        }
    }
    else if(sky[i][j+1]==null && !adjacentTextures.includes(-1))adjacentTextures.push(-1);  
  
    if (+(sky[i + 1] && sky[i + 1][j]%10==type)) {
      sky[i + 1][j]=0;
      ret+=walkInClouds(i + 1, j, sky, type, adjacentTextures, adjacentMountains);
      ++ret; 
    }else if(sky[i+1]/* && !adjacentTextures.includes(sky[i+1][j]%10)*/)
    {
        adjacentTextures.push(sky[i+1][j]%10); 
        if(sky[i+1][j]%10==9){
            if(!adjacentMountains.includes(parseInt(i+1)+","+parseInt(j)))adjacentMountains.push(parseInt(i+1)+","+parseInt(j)); 
        }
    }
    else if(sky[i+1]==null && !adjacentTextures.includes(-1))adjacentTextures.push(-1); 
  
    if (+(sky[i][j - 1] && sky[i][j-1]%10==type)) {
      sky[i][j - 1]=0;
      ret+=walkInClouds(i, j - 1, sky, type, adjacentTextures, adjacentMountains);
      ++ret; 
    }else if(sky[i][j-1]/* && !adjacentTextures.includes(sky[i][j-1]%10)*/)
    {
        adjacentTextures.push(sky[i][j-1]%10);
        if(sky[i][j-1]%10==9){
            if(!adjacentMountains.includes(parseInt(i)+","+parseInt(j-1)))adjacentMountains.push(parseInt(i)+","+parseInt(j-1)); 
        }
    }
    else if(sky[i][j-1]==null && !adjacentTextures.includes(-1))adjacentTextures.push(-1); 
    //if(!+left && !+up && !+right && !+down)++ret; 
    return ret;
}

export function bottomAndLeftDiagonals(tiles){
    let points = 0; 
    for(let i=tiles.length-1;i>=0;--i){
        let res=true; 
        for(let j=0;j<tiles[i].length-i;++j){
            if(tiles[j][i+j].type%10==0){
                res = false; 
                break;
            }
        }
        if(res)points+=3; 
    }
    return points; 
}

export function rowsAndColumns(tiles){
    let points = 0; 
    for(let i=0;i<tiles.length;++i){
        let res = true; 
        let res2 = true; 
        for(let j=0;j<tiles[i].length;++j){
            if(tiles[i][j].type%10==0)
                res = false; 
            if(tiles[j][i].type%10==0)
                res2 = false; 
        }
        if(res)points+=3; 
        if(res2)points+=3; 
    }
    return points; 
}

//Earn 2 points for each empty space surrounded on all four sides by filled spaces or the edge of the system
export function hasHoles(tiles){
    let points = 0; 
    for(let i=0;i<tiles.length;++i){
        for(let j=0;j<tiles[i].length;++j){
            if(tiles[i][j].type%10==0)
            {
                //Note we don't mod% these because we are searching if any of the surrounding tiles are
                //empty then they get no points. Else it's an edge or SOMETHING interesting. Also 10 counts. 
                if(!((i>=1 && (tiles[i-1][j].type%10==0)) ||
                      (j>=1 && (tiles[i][j-1].type%10==0)) ||
                      (i<tiles.length-1 && (tiles[i+1][j].type%10==0)) || 
                      (j<tiles[i].length-1 && (tiles[i][j+1].type%10==0))))
                {
                    points+=2; 
                }
            }
        }
    }
    return points;
}

export function squareEdge(tiles){
    let tempArr = []; 
    for(let i=0;i<tiles.length;++i){
        tempArr.push([]); 
        for(let j=0;j<tiles[i].length;++j){
            tempArr[i].push(tiles[i][j].type%10==0? 0 : 1); 
        }
    }
    let i, j, S; 
    S = []; 
    let R = tempArr.length;
    let C = tempArr[0].length; 
    let M = tempArr; 
    for ( var y = 0; y < R; y++ ) {
        S.push([]);
        for ( var x = 0; x < C; x++ ) {
            S[ y ].push(0);
        }
    }
        let max_of_s, max_i, max_j; 
        
        /* Set first column of S[][]*/
        for(i = 0; i < R; i++) 
            S[i][0] = M[i][0]; 
        
        /* Set first row of S[][]*/
        for(j = 0; j < C; j++) 
            S[0][j] = M[0][j]; 
            
        /* Construct other entries of S[][]*/
        for(i = 1; i < R; i++) 
        { 
            for(j = 1; j < C; j++) 
            { 
                if(M[i][j] == 1) 
                    S[i][j] = Math.min(S[i][j-1],Math.min( S[i-1][j], 
                                    S[i-1][j-1])) + 1; 
                else
                    S[i][j] = 0; 
            } 
        } 

        max_of_s = S[0][0]; max_i = 0; max_j = 0; 
        for(i = 0; i < R; i++) 
        { 
            for(j = 0; j < C; j++) 
            { 
                if(max_of_s < S[i][j]) 
                { 
                    max_of_s = S[i][j]; 
                    max_i = i; 
                    max_j = j; 
                } 
            }             
        } 
        return 3*max_of_s; 

    /*for(let k=tempArr.length;k>0;--k){ 
        for(let i=0;i<tempArr.length-k+1;++i){
            for(let j=0;j<tempArr.length-k+1;++j){
                let square = true; 
                for(let l=i;l<tempArr.length-k+1;++l){
                    for(let m=j;m<tempArr.length-k+1;++m){
                        if(tempArr[l][m]%10==0){
                            square=false;
                            break;
                        } 
                    }
                }
                if(square){
                    return k; 
                }
            }

        }
    }*/ 
}

/* 3 = cloud computing = yellow
* 4 = data analytics = blue
Earn 3 points for each Cloud Computing server on a feature tile 
and 1 point for each tile adjacent to a feature tile occupied by data analytics systems
*/
export function nearFeatures(tiles){
    let points = 0; 
    for(let i=0;i<tiles.length;++i){
        for(let j=0;j<tiles[i].length;++j){
            if(tiles[i][j].type>=10){
                if(tiles[i][j].type==13)points+=3; 
                if(i>=1 && tiles[i-1][j].type==4)points++; 
                if(j>=1 && tiles[i][j-1].type==4)points++; 
                if(i<tiles.length-1 && tiles[i+1][j].type==4)points++; 
                if(j<tiles[i].length-1 && tiles[i][j+1].type==4)points++; 
            }
        }
    }
    return points; 
}

export function adjacency(tiles){
    let points = 0; 
    for(let i=0;i<tiles.length;++i){
        for(let j=0;j<tiles[i].length;++j){
            if(tiles[i][j].type%10==4){
                if(i>=1 && tiles[i-1][j].type%10==3)points++; 
                else if(j>=1 && tiles[i][j-1].type%10==3)points++; 
                else if(i<tiles.length-1 && tiles[i+1][j].type%10==3)points++; 
                else if(j<tiles[i].length-1 && tiles[i][j+1].type%10==3)points++; 
            }
            else if(tiles[i][j].type%10==3){
                if(i>=1 && tiles[i-1][j].type%10==4)points++; 
                else if(j>=1 && tiles[i][j-1].type%10==4)points++; 
                else if(i<tiles.length-1 && tiles[i+1][j].type%10==4)points++; 
                else if(j<tiles[i].length-1 && tiles[i][j+1].type%10==4)points++; 
            }
        }
    }
    return points; 
}

//3 or 4 next to a 9
export function nearContractorSystems(x){
    let points = 0; 
    let tiles = []; 
    for(let i=0;i<x.length;++i){
        tiles.push([]); 
        for(let j=0;j<x[i].length;++j){
            tiles[i].push(x[i][j].type); 
        }
    }
    for(let i=0;i<tiles.length;++i){
        for(let j=0;j<tiles[i].length;++j){
            if(tiles[i][j]%10==9){
                if(i>=1 && (tiles[i-1][j]%10==3 || tiles[i-1][j]%10==4))
                {
                    points+=2; 
                    tiles[i-1][j]=0; 
                }
                if(j>=1 && (tiles[i][j-1]%10==3 || tiles[i][j-1]%10==4))
                {
                    points+=2; 
                    tiles[i][j-1]=0; 
                }
                if(i<tiles.length-1 && (tiles[i+1][j]%10==3 || tiles[i+1][j]%10==4))
                {
                    points+=2; 
                    tiles[i+1][j]=0; 
                }
                if(j<tiles[i].length-1 && (tiles[i][j+1]%10==3 || tiles[i][j+1]%10==4))
                {
                    points+=2; 
                    tiles[i][j+1]=0;
                }
            }
        }
    }
    console.log(points, tiles, x); 
    return points; 
}

//Earn 2 points for each cluster of Cloud Computing Server tiles not adjacent to Data Analytics tiles, 
//nor an edge and for each cluster of Data Analytics System tiles not adjacent to Cloud Computing Server tiles, nor an edge
export function notAdjacencyNorEdge(tiles){
    let tempArr = []; 
    for(let i=0;i<tiles.length;++i){
        tempArr.push([]); 
        for(let j=0;j<tiles[i].length;++j){
            tempArr[i].push(tiles[i][j].type); 
        }
    }
    let clusterSizes = []; 
    let temp = countClusters(tempArr, 3, notNextToList, [4,-1]);
    temp += countClusters(tempArr, 4, notNextToList, [3,-1]);
    return temp*2; 
}
//Earn 1 point for each I/O system with all 4 edges surrounded by occuppied tiles, contractor black boxes, or edges.
export function surrounded(tiles){
    let points = 0; 
    for(let i=0;i<tiles.length;++i){
        for(let j=0;j<tiles[i].length;++j){
            if(tiles[i][j].type%10==5){
                if(!((i>0 && tiles[i-1][j].type%10==0) || 
                   (i<tiles.length01 && tiles[i+1][j].type%10==0) || 
                   (j>0 && tiles[i][j-1].types%10==0) ||
                   (j<tiles[i].length-1 && tiles[i][j+1].type%10==0)))points++;
            }
        }
    }
    return points; 
}

//Mountains connected via one forest 
export function connectContractorSystems(tiles){
    let tempArr = []; 
    for(let i=0;i<tiles.length;++i){
        tempArr.push([]); 
        for(let j=0;j<tiles[i].length;++j){
            tempArr[i].push(tiles[i][j].type); 
        }
    }
    let adjacentMountains = []; 
    countClusters(tempArr, 5, ()=>{return true}, 9, null, adjacentMountains);
    let ret = []; 
    for(let i=0;i<adjacentMountains.length;++i){
        for(let j=0;j<adjacentMountains[i].length;++j){
            if(!ret.includes(adjacentMountains[i][j]))ret.push(adjacentMountains[i][j]); 
        }
    }
    return ret.length;  
}

//Column or a row. IO = 5
export function columnsContainingIOSystems(tiles){
    let points = 0; 
    for(let i=0;i<tiles.length;++i){
        let row = false; 
        let col = false; 
        for(let j=0;j<tiles.length;++j){
            if(tiles[i][j].type%10 == 5)row = true; 
            if(tiles[j][i].type%10 == 5)col = true; 
        }
        if(row)++points;
        if(col)++points; 
    }
    return points; 
}

//Output systems next to an edge
//"Earn 1 point for each tile space along the edges occuppied by an I/O system = 5"
export function outputSystems(tiles){
    //Add the four edges together first so that we don't double-count for the O(n) loop
    let points = (tiles[0][0].type%10==5 ? 1 : 0) + 
                 (tiles[0][tiles[0].length-1].type%10==5 ? 1 : 0) + 
                 (tiles[tiles.length-1][0].type%10==5 ? 1 : 0) + 
                 (tiles[tiles.length-1][tiles[tiles.length-1].length-1].type%10==5 ? 1 : 0); 
    for(let i=1;i<tiles.length-1;++i){
        if(tiles[i][0].type%10==5)++points;
        if(tiles[i][tiles.length-1].type%10==5)++points; 
        if(tiles[0][i].type%10==5)++points;
        if(tiles[tiles.length-1][i].type%10==5)++points; 
    }
    return points;  
}

//Largest village cluster not next to a mountain
export function largestCluster(tiles){
    let tempArr = []; 
    for(let i=0;i<tiles.length;++i){
        tempArr.push([]); 
        for(let j=0;j<tiles[i].length;++j){
            tempArr[i].push(tiles[i][j].type); 
        }
    }
    let clusterSizes = []; 
    countClusters(tempArr, 6, notNextTo, 9, clusterSizes);
    clusterSizes.sort(); 
    let temp = clusterSizes.length > 0 ? clusterSizes[clusterSizes.length-1] : 0;  
    console.log(clusterSizes, temp); 
    return temp; 
}

//Earn 3 points for each cluster of Four or more tiles occuppied by Power Supply Systems
//6 = Power Supplies = brown
export function clustersOfFour(tiles){
    let tempArr = []; 
    for(let i=0;i<tiles.length;++i){
        tempArr.push([]); 
        for(let j=0;j<tiles[i].length;++j){
            tempArr[i].push(tiles[i][j].type); 
        }
    }
    return countClusters(tempArr, 6, minSize, 4); 
}

//Each cluster next to three different types of terrain types 
//Earn 4 points for each cluster of Power Supply Systems adjacent to 3 or more different Systems, including Contractor Black Boxes
export function clustersNextToThreeTerrains(tiles){
    let tempArr = []; 
    for(let i=0;i<tiles.length;++i){
        tempArr.push([]); 
        for(let j=0;j<tiles[i].length;++j){
            tempArr[i].push(tiles[i][j].type); 
        }
    }
    return countClusters(tempArr, 6, nextTo, 3); 
}

//Second largest cluster 
export function secondLargestCluster(tiles){
    let tempArr = []; 
    for(let i=0;i<tiles.length;++i){
        tempArr.push([]); 
        for(let j=0;j<tiles[i].length;++j){
            tempArr[i].push(tiles[i][j].type); 
        }
    }
    let clusterSizes = []; 
    countClusters(tempArr, 6, ()=>{return true;}, 0, clusterSizes);
    clusterSizes.sort(); 
    return clusterSizes.length > 1 ? clusterSizes[clusterSizes.length-2] : 0; 
}
