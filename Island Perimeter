/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let perimeter =0;
    for(let r =0;r<rows;r++){
        for(let c=0;c<cols;c++){
            let cell = grid[r][c];
            if(cell===1){
                if(r-1<0 || grid[r-1][c]===0){
                    perimeter++;
                }
                if(r+1===rows|| grid[r+1][c]===0){
                    perimeter++;
                }
                if(c-1<0 || grid[r][c-1]===0){
                    perimeter++;
                }
                if(c+1===cols || grid[r][c+1]===0){
                    perimeter++;
                }
            }
        }
    }
    return perimeter;
};
