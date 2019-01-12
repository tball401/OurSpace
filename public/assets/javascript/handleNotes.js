/**
 * Handles Note Funcionality
 */
function makeNewNote(parentGridElement){
    var note = new makeNote(parentGridElement);
    structureNewNote(note);
    console.log(parentGridElement.children);
    adjustGrid(parentGridElement, 2, 4);
}
function structureNewNote(note){
    note.field.style.width = '200px';
    note.field.style.height = '100px';
    note.field.gridRow = '1/4';
    note.field.gridColumn = '1/3';
}
function makeNewIcons(noteGrid){
    var submit = document.createElement("i");
    var cancel = document.createElement("i");
    submit.setAttribute("class", "fa fa-check-square");
    cancel.setAttribute("class", "fa fa-trash");
    noteGrid.appendChild(submit);
    noteGrid.appendChild(cancel);
    styleSubmitCancel(submit, cancel);
    submit.addEventListener('click', );
    cancel.addEventListener('click', );
}
function styleSubmitCancel(submitIcon, cancelIcon){
    submitIcon.style.gridRow = '3/4';
    submitIcon.style.gridColumn = '2/3';
    cancelIcon.style.gridRow = '4/5';
    cancelIcon.style.gridColumn = '2/3';
}
function deleteNewIcons(submit, cancel){
}
function onSubmit(uid){

}
function makeNote(mainGridElement){
    this.field = document.createElement("TEXTAREA");
    this.noteGrid = new constructGrid(mainGridElement, Date.now());
    this.noteGrid.appendChild(this.field);
    this.mode = 'normal';
    this.field.addEventListener('click', function(event){
        if (this.mode == 'normal'){
            edit(this);
        }
    });
}
function constructGrid(appendTo, id){
    var grid = document.createElement('div');
    grid.setAttribute("id", id);
    document.getElementById(appendTo).appendChild(grid);
    return grid;
}
/**
 * Formats currentRow or currentColumn
 * value to string, and adds one to value 
 * for end of row or column segment
 * @param {int} currentValue current value of Row or Column
 * Returns string in css format, i.e. "start/end"
 */
function helpAdjustGrid(currentValue){
  return String(currentValue) + "/" + String(currentValue + 1);
}
/**
 * Creates a dynamic grid with unknown number of elements
 * @param {HTML Grid Element} grid 
 * @param {int} maxRow max number of rows in grid
 * @param {int} maxColumn max number of columns in grid
 */
function adjustGrid(grid, maxRow, maxColumn){
  var currentRow = 1;
  var currentColumn = 1;
  var gridChildren = grid.children;
  console.log(gridChildren);
  for (var i = 0; i < gridChildren.length; i++){
    if (currentColumn == maxColumn+1){
      return false;
    }
    gridChildren[i].style.gridColumn = helpAdjustGrid(currentColumn);
    gridChildren[i].style.gridRow = helpAdjustGrid(currentRow);
    if (currentRow == maxRow){
      currentColumn++;
      currentRow = 1;
    } else{
      currentRow++;
    }
  }
  return true;
}