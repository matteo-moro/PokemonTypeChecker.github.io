const NORMAL_INDEX = 0;
const FIRE_INDEX = 1;
const WATER_INDEX = 2;
const ELECTRIC_INDEX = 3;
const GRASS_INDEX = 4;
const ICE_INDEX = 5;
const FIGHTING_INDEX = 6;
const POISON_INDEX = 7;
const GROUND_INDEX = 8;
const FLYING_INDEX = 9;
const PSYCHIC_INDEX = 10;
const BUG_INDEX = 11;
const ROCK_INDEX = 12;
const GHOST_INDEX = 13;
const DRAGON_INDEX = 14;
const DARK_INDEX = 15;
const STEEL_INDEX = 16;
const FAIRY_INDEX = 17;

function getWeaknessArray(pokemon)
{
    const weaknessArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    type1 = pokemon.type1;
    type2 = pokemon.type2;

    if (type1 === "normal" || type2 === "normal")
    {
        weaknessArray[FIGHTING_INDEX] = weaknessArray[FIGHTING_INDEX] / 2;
        weaknessArray[GHOST_INDEX] = 0;
    }
    if (type1 === "fire" || type2 === "fire")
    {
        weaknessArray[GROUND_INDEX] = weaknessArray[GROUND_INDEX] * 2;
        weaknessArray[ROCK_INDEX] = weaknessArray[ROCK_INDEX] * 2;
        weaknessArray[WATER_INDEX] = weaknessArray[WATER_INDEX] * 2;
        weaknessArray[BUG_INDEX] = weaknessArray[BUG_INDEX] / 2;
        weaknessArray[FIRE_INDEX] = weaknessArray[FIRE_INDEX] / 2;
        weaknessArray[GRASS_INDEX] = weaknessArray[GRASS_INDEX] / 2;
        weaknessArray[STEEL_INDEX] = weaknessArray[STEEL_INDEX] / 2;
        weaknessArray[ICE_INDEX] = weaknessArray[ICE_INDEX] / 2;
        weaknessArray[FAIRY_INDEX] = weaknessArray[FAIRY_INDEX] / 2;
    }
    if (type1 === "water" || type2 === "water")
    {
        weaknessArray[GRASS_INDEX] = weaknessArray[GRASS_INDEX] * 2;
        weaknessArray[ELECTRIC_INDEX] = weaknessArray[ELECTRIC_INDEX] * 2;
        weaknessArray[FIRE_INDEX] = weaknessArray[FIRE_INDEX] / 2;
        weaknessArray[WATER_INDEX] = weaknessArray[WATER_INDEX] / 2;
        weaknessArray[ICE_INDEX] = weaknessArray[ICE_INDEX] / 2;
        weaknessArray[STEEL_INDEX] = weaknessArray[STEEL_INDEX] / 2;
    }
    if (type1 === "electric" || type2 === "electric")
    {
        weaknessArray[GROUND_INDEX] = weaknessArray[GROUND_INDEX] * 2;
        weaknessArray[FLYING_INDEX] = weaknessArray[FLYING_INDEX] / 2;
        weaknessArray[ELECTRIC_INDEX] = weaknessArray[ELECTRIC_INDEX] / 2;
        weaknessArray[STEEL_INDEX] = weaknessArray[STEEL_INDEX] / 2;
    }
    if (type1 === "grass" || type2 === "grass")
    {
        weaknessArray[FLYING_INDEX] = weaknessArray[FLYING_INDEX] * 2;
        weaknessArray[POISON_INDEX] = weaknessArray[POISON_INDEX] * 2;
        weaknessArray[BUG_INDEX] = weaknessArray[BUG_INDEX] * 2;
        weaknessArray[FIRE_INDEX] = weaknessArray[FIRE_INDEX] * 2;
        weaknessArray[ICE_INDEX] = weaknessArray[ICE_INDEX] * 2;
        weaknessArray[GROUND_INDEX] = weaknessArray[GROUND_INDEX] / 2;
        weaknessArray[WATER_INDEX] = weaknessArray[WATER_INDEX] / 2;
        weaknessArray[GRASS_INDEX] = weaknessArray[GRASS_INDEX] / 2;
        weaknessArray[ELECTRIC_INDEX] = weaknessArray[ELECTRIC_INDEX] / 2;
    }
    if (type1 === "ice" || type2 === "ice")
    {
        weaknessArray[FIGHTING_INDEX] = weaknessArray[FIGHTING_INDEX] * 2;
        weaknessArray[ROCK_INDEX] = weaknessArray[ROCK_INDEX] * 2;
        weaknessArray[FIRE_INDEX] = weaknessArray[FIRE_INDEX] * 2;
    }

    return weaknessArray;

}

//returns an array of numbers indicating the multiplier for weaknesses of the given pokemon
//the format of the array is:
//[normal, fire, water, electric, grass, ice, fighting, poison, ground, flying, psychic, bug, rock, ghost, dragon, dark, steel, fairy]

//on a side note this is ugly and could be done in a much more elegant way, maybe one day i will update this part