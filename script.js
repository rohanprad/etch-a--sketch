function makeGrid(gridSize){


    const container = document.querySelector("#container");
    container.style.setProperty('--gridSize', gridSize);

    for(let i = 0; i < gridSize; i++)
    {
        for(let j = 0; j < gridSize; j++)
        {
            let grid = document.createElement('div');
            grid.classList.add('grid');
            grid.style.cssText = "border: solid 1px black;";

            container.appendChild(grid);

            grid.addEventListener('mouseover', function(e){
                e.target.style.background = 'black';
            });
        }
    }
}

makeGrid(16);

const button = document.querySelector('#reset');
button.addEventListener('click', function(){
    let size = parseInt(prompt("Enter new grid size: "));
    if(isNaN(size))
    {
        size = 16;
    }
    /*The following code clears all the grids that have been set before
      Not doing so results in an abnormal behaviour of the grid when calling makeGrid()
      again
    */
    /*-------------------------------------------------------------------------------*/
        const drawnSquares = document.querySelectorAll(".grid");
        drawnSquares.forEach((item) => container.removeChild(item))
        makeGrid(size);
    /*-------------------------------------------------------------------------------*/
});

