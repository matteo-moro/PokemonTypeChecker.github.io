// base idea:
// get all the rows as objects (ugly but functional)
// iterate the weakness of every pokemon inside the team array and update the table accordingly
// the cells of the table should be in their HTMLCollection so i can access them

// the function made here should be called in check-input-valid.js after the team array is updated

const normal_row_cells = document.getElementById("normal-row").cells;
const fire_row_cells = document.getElementById("fire-row").cells;
const water_row_cells = document.getElementById("water-row").cells;
const electric_row_cells = document.getElementById("electric-row").cells;
const grass_row_cells = document.getElementById("grass-row").cells;
const ice_row_cells = document.getElementById("ice-row").cells;
const fighting_row_cells = document.getElementById("fighting-row").cells;
const poison_row_cells = document.getElementById("poison-row").cells;
const ground_row_cells = document.getElementById("ground-row").cells;
const flying_row_cells = document.getElementById("flying-row").cells;
const psychic_row_cells = document.getElementById("psychic-row").cells;
const bug_row_cells = document.getElementById("bug-row").cells;
const rock_row_cells = document.getElementById("rock-row").cells;
const ghost_row_cells = document.getElementById("ghost-row").cells;
const dragon_row_cells = document.getElementById("dragon-row").cells;
const dark_row_cells = document.getElementById("dark-row").cells;
const steel_row_cells = document.getElementById("steel-row").cells;
const fairy_row_cells = document.getElementById("fairy-row").cells;
const weakness_array = [null, null, null, null, null, null];

function updateTable()
{
    //TODO: once the part below about updating values is finished, copy and change every true to false
    //I'll also leave this TODO here as proof of how shit this is but it is too late to make it a function so bad code it is

    for(var i = 0; i < 6; i++)
    {
        if (weakness_array[i] === null) {continue}
        const normal_cell = normal_row_cells.item(getTableCellIndex(weakness_array[i].normal_mult));
        modifyTableText(normal_cell, false);
        const fire_cell = fire_row_cells.item(getTableCellIndex(weakness_array[i].fire_mult));
        modifyTableText(fire_cell, false);
        const water_cell = water_row_cells.item(getTableCellIndex(weakness_array[i].water_mult));
        modifyTableText(water_cell, false);
        const electric_cell = electric_row_cells.item(getTableCellIndex(weakness_array[i].electric_mult));
        modifyTableText(electric_cell, false);
        const grass_cell = grass_row_cells.item(getTableCellIndex(weakness_array[i].grass_mult));
        modifyTableText(grass_cell, false);
        const ice_cell = ice_row_cells.item(getTableCellIndex(weakness_array[i].ice_mult));
        modifyTableText(ice_cell, false);
        const fighting_cell = fighting_row_cells.item(getTableCellIndex(weakness_array[i].fighting_mult));
        modifyTableText(fighting_cell, false);
        const poison_cell = poison_row_cells.item(getTableCellIndex(weakness_array[i].poison_mult));
        modifyTableText(poison_cell, false);
        const ground_cell = ground_row_cells.item(getTableCellIndex(weakness_array[i].ground_mult));
        modifyTableText(ground_cell, false);
        const flying_cell = flying_row_cells.item(getTableCellIndex(weakness_array[i].flying_mult));
        modifyTableText(flying_cell, false);
        const psychic_cell = psychic_row_cells.item(getTableCellIndex(weakness_array[i].psychic_mult));
        modifyTableText(psychic_cell, false);
        const bug_cell = bug_row_cells.item(getTableCellIndex(weakness_array[i].bug_mult));
        modifyTableText(bug_cell, false);
        const rock_cell = rock_row_cells.item(getTableCellIndex(weakness_array[i].rock_mult));
        modifyTableText(rock_cell, false);
        const ghost_cell = ghost_row_cells.item(getTableCellIndex(weakness_array[i].ghost_mult));
        modifyTableText(ghost_cell, false);
        const dragon_cell = dragon_row_cells.item(getTableCellIndex(weakness_array[i].dragon_mult));
        modifyTableText(dragon_cell, false);
        const dark_cell = dark_row_cells.item(getTableCellIndex(weakness_array[i].dark_mult));
        modifyTableText(dark_cell, false);
        const steel_cell = steel_row_cells.item(getTableCellIndex(weakness_array[i].steel_mult));
        modifyTableText(steel_cell, false);
        const fairy_cell = fairy_row_cells.item(getTableCellIndex(weakness_array[i].fairy_mult));
        modifyTableText(fairy_cell, false);
    }
    
    weakness_array[0] = getTypeMult(pokemonTeamArray[0]);
    weakness_array[1] = getTypeMult(pokemonTeamArray[1]);
    weakness_array[2] = getTypeMult(pokemonTeamArray[2]);
    weakness_array[3] = getTypeMult(pokemonTeamArray[3]);
    weakness_array[4] = getTypeMult(pokemonTeamArray[4]);
    weakness_array[5] = getTypeMult(pokemonTeamArray[5]);

    for(var i = 0; i < 6; i++)
    {
        if (weakness_array[i] === null) {continue}
        const normal_cell = normal_row_cells.item(getTableCellIndex(weakness_array[i].normal_mult));
        modifyTableText(normal_cell, true);
        const fire_cell = fire_row_cells.item(getTableCellIndex(weakness_array[i].fire_mult));
        modifyTableText(fire_cell, true);
        const water_cell = water_row_cells.item(getTableCellIndex(weakness_array[i].water_mult));
        modifyTableText(water_cell, true);
        const electric_cell = electric_row_cells.item(getTableCellIndex(weakness_array[i].electric_mult));
        modifyTableText(electric_cell, true);
        const grass_cell = grass_row_cells.item(getTableCellIndex(weakness_array[i].grass_mult));
        modifyTableText(grass_cell, true);
        const ice_cell = ice_row_cells.item(getTableCellIndex(weakness_array[i].ice_mult));
        modifyTableText(ice_cell, true);
        const fighting_cell = fighting_row_cells.item(getTableCellIndex(weakness_array[i].fighting_mult));
        modifyTableText(fighting_cell, true);
        const poison_cell = poison_row_cells.item(getTableCellIndex(weakness_array[i].poison_mult));
        modifyTableText(poison_cell, true);
        const ground_cell = ground_row_cells.item(getTableCellIndex(weakness_array[i].ground_mult));
        modifyTableText(ground_cell, true);
        const flying_cell = flying_row_cells.item(getTableCellIndex(weakness_array[i].flying_mult));
        modifyTableText(flying_cell, true);
        const psychic_cell = psychic_row_cells.item(getTableCellIndex(weakness_array[i].psychic_mult));
        modifyTableText(psychic_cell, true);
        const bug_cell = bug_row_cells.item(getTableCellIndex(weakness_array[i].bug_mult));
        modifyTableText(bug_cell, true);
        const rock_cell = rock_row_cells.item(getTableCellIndex(weakness_array[i].rock_mult));
        modifyTableText(rock_cell, true);
        const ghost_cell = ghost_row_cells.item(getTableCellIndex(weakness_array[i].ghost_mult));
        modifyTableText(ghost_cell, true);
        const dragon_cell = dragon_row_cells.item(getTableCellIndex(weakness_array[i].dragon_mult));
        modifyTableText(dragon_cell, true);
        const dark_cell = dark_row_cells.item(getTableCellIndex(weakness_array[i].dark_mult));
        modifyTableText(dark_cell, true);
        const steel_cell = steel_row_cells.item(getTableCellIndex(weakness_array[i].steel_mult));
        modifyTableText(steel_cell, true);
        const fairy_cell = fairy_row_cells.item(getTableCellIndex(weakness_array[i].fairy_mult));
        modifyTableText(fairy_cell, true);

    }   
}

//magic numbers here are the multiplier for the weakness to a type, return is the index of the cell in the HTMLCollection of the row cells.
//can't be bothered to make it readable
//i also got it wrong so oops i had to add 1
function getTableCellIndex(val)
{
    if (val < 1) {return 4 * val + 1}
    else if (val < 4) {return val + 2 + 1}
    else {return 6}
}

function modifyTableText(cell, add)
{
    let text = cell.innerHTML;
    if (add)
    {
        text = (parseInt(text) === parseInt(text)) ? (parseInt(text) + 1) : 1;
    }
    else
    {
        if (parseInt(text) === parseInt(text))
        {
            text = (parseInt(text) !== 1) ? (parseInt(text) - 1) : "";
        }
        else return;
    }
    cell.innerHTML = text.toString();
}

