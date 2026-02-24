class PokemonWeakness 
{
    constructor () 
    {
        this.normal_mult = 1;
        this.fire_mult = 1;
        this.water_mult = 1;
        this.electric_mult = 1;
        this.grass_mult = 1;
        this.ice_mult = 1;
        this.fighting_mult = 1;
        this.poison_mult = 1;
        this.ground_mult = 1;
        this.flying_mult = 1;
        this.psychic_mult = 1;
        this.bug_mult = 1;
        this.rock_mult = 1;
        this.ghost_mult = 1;
        this.dragon_mult = 1;
        this.dark_mult = 1;
        this.steel_mult = 1;
        this.fairy_mult = 1;
    }
}

function getTypeMult(pokemon)
{
    if(pokemon === null){return null};
    const mult = new PokemonWeakness();
    const type1 = pokemon.type1;
    const type2 = pokemon.type2;
    if (type1 === "normal" || type2 === "normal")
    {
        mult.fighting_mult *= 2;
        mult.ghost_mult = 0;
    }
    if (type1 === "fire" || type2 === "fire")
    {
        mult.ground_mult *= 2;
        mult.rock_mult *= 2;
        mult.water_mult *= 2;
        mult.bug_mult /= 2;
        mult.fire_mult /= 2;
        mult.grass_mult /= 2;
        mult.steel_mult /= 2;
        mult.ice_mult /= 2;
        mult.fairy_mult /= 2;
    }
    if (type1 === "water" || type2 === "water")
    {
        mult.grass_mult *= 2;
        mult.electric_mult *= 2;
        mult.fire_mult /= 2;
        mult.water_mult /= 2;
        mult.ice_mult /= 2;
        mult.steel_mult /= 2;
    }
    if (type1 === "electric" || type2 === "electric")
    {
        mult.ground_mult *= 2;
        mult.flying_mult /= 2;
        mult.electric_mult /= 2;
        mult.steel_mult /= 2;
    }
    if (type1 === "grass" || type2 === "grass")
    {
        mult.flying_mult *= 2;
        mult.poison_mult *= 2;
        mult.bug_mult *= 2;
        mult.fire_mult *= 2;
        mult.ice_mult *= 2;
        mult.ground_mult /= 2;
        mult.water_mult /= 2;
        mult.grass_mult /= 2;
        mult.electric_mult /= 2;
    }
    if (type1 === "ice" || type2 === "ice")
    {
        mult.fighting_mult *= 2;
        mult.rock_mult *= 2;
        mult.fire_mult *= 2;
        mult.steel_mult *= 2;
        mult.ice_mult *= 2;
    }
    if (type1 === "fighting" || type2 === "fighting")
    {
        mult.flying_mult *= 2;
        mult.psychic_mult *= 2;
        mult.fairy_mult *= 2;
        mult.rock_mult /= 2;
        mult.bug_mult /= 2;
        mult.dark_mult /= 2;
    }
    if (type1 === "poison" || type2 === "poison")
    {
        mult.ground_mult *= 2;
        mult.psychic_mult *= 2;
        mult.fighting_mult /= 2;
        mult.poison_mult /= 2;
        mult.grass_mult /= 2;
        mult.bug_mult /= 2;
        mult.fairy_mult /= 2;
    }
    if (type1 === "ground" || type2 === "ground")
    {
        mult.water_mult *= 2;
        mult.grass_mult *= 2;
        mult.ice_mult *= 2;
        mult.poison_mult /= 2;
        mult.rock_mult /= 2;
        mult.electric_mult = 0;
    }
    if (type1 === "flying" || type2 === "flying")
    {
        mult.rock_mult *= 2;
        mult.electric_mult *= 2;
        mult.ice_mult *= 2;
        mult.fighting_mult /= 2;
        mult.bug_mult /= 2;
        mult.grass_mult /= 2;
        mult.ground_mult /= 2;
    }
    if (type1 === "psychic" || type2 === "psychic")
    {
        mult.bug_mult *= 2;
        mult.ghost_mult *= 2;
        mult.dark_mult *= 2;
        mult.fighting_mult /= 2;
        mult.psychic_mult /= 2;
    }
    if (type1 === "bug" || type2 === "bug")
    {
        mult.flying_mult *= 2;
        mult.rock_mult *= 2;
        mult.fire_mult *= 2;
        mult.fighting_mult /= 2;
        mult.ground_mult /= 2;
        mult.grass_mult /= 2;
    }
    if (type1 === "rock" || type2 === "rock")
    {
        mult.fighting_mult *= 2;
        mult.ground_mult *= 2;
        mult.water_mult *= 2;
        mult.grass_mult *= 2;
        mult.steel_mult *= 2;
        mult.normal_mult /= 2;
        mult.flying_mult /= 2;
        mult.poison_mult /= 2;
        mult.fire_mult /= 2;
    }
    if (type1 === "ghost" || type2 === "ghost")
    {
        mult.ghost_mult *= 2;
        mult.dark_mult *= 2;
        mult.poison_mult /= 2;
        mult.bug_mult /= 2;
        mult.normal_mult = 0;
        mult.fighting_mult = 0;
    }
    if (type1 === "dragon" || type2 === "dragon")
    {
        mult.ice_mult *= 2;
        mult.dragon_mult *= 2;
        mult.fairy_mult *= 2;
        mult.fire_mult /= 2;
        mult.water_mult /= 2;
        mult.grass_mult /= 2;
        mult.electric_mult /= 2;
    }
    if (type1 === "dark" || type2 === "dark")
    {
        mult.fighting_mult *= 2;
        mult.bug_mult *= 2;
        mult.fairy_mult *= 2;
        mult.dark_mult /= 2;
        mult.psychic_mult = 0;
    }
    if (type1 === "steel" || type2 === "steel")
    {
        mult.fighting_mult *= 2;
        mult.ground_mult *= 2;
        mult.fire_mult *= 2;
        mult.normal_mult /= 2;
        mult.flying_mult /= 2;
        mult.rock_mult /= 2;
        mult.bug_mult /= 2;
        mult.steel_mult /= 2;
        mult.grass_mult /= 2;
        mult.psychic_mult /= 2;
        mult.ice_mult /= 2;
        mult.dragon_mult /= 2;
        mult.fairy_mult /= 2;
        mult.poison_mult = 0;
    }
    if (type1 === "fairy" || type2 === "fairy")
    {
        mult.poison_mult *= 2;
        mult.steel_mult *= 2;
        mult.fighting_mult /= 2;
        mult.dark_mult /= 2;
        mult.dragon_mult = 0;
    }
    return mult;
}