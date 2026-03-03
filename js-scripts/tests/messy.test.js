import { expect, test } from "vitest"
import { TeamArray as pokemonTeamArray, validatePokemon} from "../check-input-valid.js";

test("fill-team-test-name", () => {
    pokemonTeamArray[0] = null;
    pokemonTeamArray[1] = null;
    pokemonTeamArray[2] = null;
    pokemonTeamArray[3] = null;
    pokemonTeamArray[4] = null;
    pokemonTeamArray[5] = null;
    const test1 = "Volcarona";
    const test2 = "Fuecoco";
    const test3 = "Wooper (Paldea)";
    const test4 = "Sylveon";
    const test5 = "Zoroark";
    const test6 = "Chandelure";
    validatePokemon(test1, 1);
    validatePokemon(test2, 2);
    validatePokemon(test3, 3);
    validatePokemon(test4, 4);
    validatePokemon(test5, 5);
    validatePokemon(test6, 6);
    const res1 = pokemonTeamArray[0].name === test1;
    const res2 = pokemonTeamArray[1].name === test2;
    const res3 = pokemonTeamArray[2].name === test3;
    const res4 = pokemonTeamArray[3].name === test4;
    const res5 = pokemonTeamArray[4].name === test5;
    const res6 = pokemonTeamArray[5].name === test6;
    const result = res1 && res2 && res3 && res4 && res5 && res6;
    
    expect(result).toBe(true);
});
test("fill-team-test-type", () => {
    pokemonTeamArray = [null, null, null, null, null, null];
    const test1 = "Volcarona";
    const test2 = "Fuecoco";
    const test3 = "Wooper (Paldea)";
    const test4 = "Sylveon";
    const test5 = "Zoroark";
    const test6 = "Chandelure";
    validatePokemon(test1, 1);
    validatePokemon(test2, 2);
    validatePokemon(test3, 3);
    validatePokemon(test4, 4);
    validatePokemon(test5, 5);
    validatePokemon(test6, 6);
    const res11 = pokemonTeamArray[0].type1 === "bug";
    const res12 = pokemonTeamArray[0].type2 === "fire";
    const res1 = res11 && res12;
    const res21 = pokemonTeamArray[1].type1 === "fire";
    const res22 = pokemonTeamArray[1].type2 === null;
    const res2 = res21 && res22;
    const res31 = pokemonTeamArray[2].type1 === "poison";
    const res32 = pokemonTeamArray[2].type2 === "ground";
    const res3 = res31 && res32;
    const res41 = pokemonTeamArray[3].type1 === "fairy";
    const res42 = pokemonTeamArray[3].type2 === null;
    const res4 = res41 && res42;
    const res51 = pokemonTeamArray[4].type1 === "dark";
    const res52 = pokemonTeamArray[4].type2 === null;
    const res5 = res51 && res52;
    const res61 = pokemonTeamArray[5].type1 === "ghost";
    const res62 = pokemonTeamArray[5].type2 === "fire";
    const res6 = res61 && res62;
    const result = res1 && res2 && res3 && res4 && res5 && res6;
    assert.equal(result, true, "Error in type insertion ini pokemonTeamArray");
});
test("test-duplicate-elements", () => {
    pokemonTeamArray = [null, null, null, null, null, null];
    const test1 = "Ditto";
    validatePokemon(test1, 1);
    validatePokemon(test1, 2);
    validatePokemon(test1, 3);
    validatePokemon(test1, 4);
    validatePokemon(test1, 5);
    validatePokemon(test1, 6);
    const res11 = pokemonTeamArray[0].name === "Ditto";
    const res12 = pokemonTeamArray[0].type1 === "normal";
    const res13 = pokemonTeamArray[0].type2 === null;
    const res1 = res11 && res12 && res13;
    const res2 = pokemonTeamArray[1] === null;
    const res3 = pokemonTeamArray[2] === null;
    const res4 = pokemonTeamArray[3] === null;
    const res5 = pokemonTeamArray[4] === null;
    const res6 = pokemonTeamArray[5] === null;
    const result = res1 && res2 && res3 && res4 && res5 && res6;
    assert.equal(result, true, "Error: insertion of duplicate elements in pokemonTeamArray");
    //this error message can be wrong in case what fails is the first element but if the error message gets thrown it will be checked regardless so it will be noticed
});
test("test-wrong-names", () => {
    pokemonTeamArray = [null, null, null, null, null, null];
    const test1 = "Pichaku";
    const test2 = "Puchiko";
    const test3 = "Puccia";
    const test4 = "Boccia";
    const test5 = "Pukicho";
    const test6 = "Popipo";
    validatePokemon(test1, 1);
    validatePokemon(test2, 2);
    validatePokemon(test3, 3);
    validatePokemon(test4, 4);
    validatePokemon(test5, 5);
    validatePokemon(test6, 6);
    const res1 = pokemonTeamArray[0] === null;
    const res2 = pokemonTeamArray[1] === null;
    const res3 = pokemonTeamArray[2] === null;
    const res4 = pokemonTeamArray[3] === null;
    const res5 = pokemonTeamArray[4] === null;
    const res6 = pokemonTeamArray[5] === null;
    const result = res1 & res2 & res3 & res4 & res5 & res6;
    assert.equal(result, true, "Error: insertion of wrong values");
});
//this was supposed to be misspelled names but ironically i am not sure of its spelling right now and i don't want to look it up

test("test-types-1", () => {
    const normal = {type1: "normal", type2: null};
    const fire = {type1: "fire", type2: null};
    const water = {type1: "water", type2: null};
    const electric = {type1: "electric", type2: null};
    const grass = {type1: "grass", type2: null};
    const ice = {type1: "ice", type2: null};
    const fighting = {type1: "fighting", type2: null};
    const poison = {type1: "poison", type2: null};
    const ground = {type1: "ground", type2: null};
    const flying = {type1: "flying", type2: null};
    const psychic = {type1: "psychic", type2: null};
    const bug = {type1: "bug", type2: null};
    const rock = {type1: "rock", type2: null};
    const ghost = {type1: "ghost", type2: null};
    const dragon = {type1: "dragon", type2: null};
    const dark = {type1: "dark", type2: null};
    const steel = {type1: "steel", type2: null};
    const fairy = {type1: "fairy", type2: null};

    const normal_res = getTypeMult(normal);
    const fire_res = getTypeMult(fire);
    const water_res = getTypeMult(water);
    const electric_res = getTypeMult(electric);
    const grass_res = getTypeMult(grass);
    const ice_res = getTypeMult(ice);
    const fighting_res = getTypeMult(fighting);
    const poison_res = getTypeMult(poison);
    const ground_res = getTypeMult(ground);
    const flying_res = getTypeMult(flying);
    const psychic_res = getTypeMult(psychic);
    const bug_res = getTypeMult(bug);
    const rock_res = getTypeMult(rock);
    const ghost_res = getTypeMult(ghost);
    const dragon_res = getTypeMult(dragon);
    const dark_res = getTypeMult(dark);
    const steel_res = getTypeMult(steel);
    const fairy_res = getTypeMult(fairy);
    
    const normal_ans = (
        normal_res.normal_mult === 1 &&
        normal_res.fire_mult === 1 &&
        normal_res.water_mult === 1 &&
        normal_res.electric_mult === 1 &&
        normal_res.grass_mult === 1 &&
        normal_res.ice_mult === 1 &&
        normal_res.fighting_mult === 2 &&
        normal_res.poison_mult === 1 &&
        normal_res.ground_mult === 1 &&
        normal_res.flying_mult === 1 &&
        normal_res.psychic_mult === 1 &&
        normal_res.bug_mult === 1 &&
        normal_res.rock_mult === 1 &&
        normal_res.ghost_mult === 0 &&
        normal_res.dragon_mult === 1 &&
        normal_res.dark_mult === 1 &&
        normal_res.steel_mult === 1 &&
        normal_res.fairy_mult === 1
    );
    const fire_ans = (
        fire_res.normal_mult === 1 &&
        fire_res.fire_mult === 0.5 &&
        fire_res.water_mult === 2 &&
        fire_res.electric_mult === 1 &&
        fire_res.grass_mult === 0.5 &&
        fire_res.ice_mult === 0.5 &&
        fire_res.fighting_mult === 1 &&
        fire_res.poison_mult === 1 &&
        fire_res.ground_mult === 2 &&
        fire_res.flying_mult === 1 &&
        fire_res.psychic_mult === 1 &&
        fire_res.bug_mult === 0.5 &&
        fire_res.rock_mult === 2 &&
        fire_res.ghost_mult === 1 &&
        fire_res.dragon_mult === 1 &&
        fire_res.dark_mult === 1 &&
        fire_res.steel_mult === 0.5 &&
        fire_res.fairy_mult === 0.5
    );
    const water_ans = (
        water_res.normal_mult === 1 &&
        water_res.fire_mult === 0.5 &&
        water_res.water_mult === 0.5 &&
        water_res.electric_mult === 2 &&
        water_res.grass_mult === 2 &&
        water_res.ice_mult === 0.5 &&
        water_res.fighting_mult === 1 &&
        water_res.poison_mult === 1 &&
        water_res.bug_mult === 1 &&
        water_res.ground_mult === 1 &&
        water_res.flying_mult === 1 &&
        water_res.psychic_mult === 1 &&
        water_res.rock_mult === 1 &&
        water_res.ghost_mult === 1 &&
        water_res.dragon_mult === 1 &&
        water_res.dark_mult === 1 &&
        water_res.steel_mult === 0.5 &&
        water_res.fairy_mult === 1
    );
    const electric_ans = (
        electric_res.normal_mult === 1 &&
        electric_res.fire_mult === 1 &&
        electric_res.water_mult === 1 &&
        electric_res.electric_mult === 0.5 &&
        electric_res.grass_mult === 1 &&
        electric_res.ice_mult === 1 &&
        electric_res.fighting_mult === 1 &&
        electric_res.poison_mult === 1 &&
        electric_res.bug_mult === 1 &&
        electric_res.ground_mult === 2 &&
        electric_res.flying_mult === 0.5 &&
        electric_res.psychic_mult === 1 &&
        electric_res.rock_mult === 1 &&
        electric_res.ghost_mult === 1 &&
        electric_res.dragon_mult === 1 &&
        electric_res.dark_mult === 1 &&
        electric_res.steel_mult === 0.5 &&
        electric_res.fairy_mult === 1
    );
    const grass_ans = (
        grass_res.normal_mult === 1 &&
        grass_res.fire_mult === 2 &&
        grass_res.water_mult === 0.5 &&
        grass_res.electric_mult === 0.5 &&
        grass_res.grass_mult === 0.5 &&
        grass_res.ice_mult === 2 &&
        grass_res.fighting_mult === 1 &&
        grass_res.poison_mult === 2 &&
        grass_res.bug_mult === 2 &&
        grass_res.ground_mult === 0.5 &&
        grass_res.flying_mult === 2 &&
        grass_res.psychic_mult === 1 &&
        grass_res.rock_mult === 1 &&
        grass_res.ghost_mult === 1 &&
        grass_res.dragon_mult === 1 &&
        grass_res.dark_mult === 1 &&
        grass_res.steel_mult === 1 &&
        grass_res.fairy_mult === 1
    );
    const ice_ans = (
        ice_res.normal_mult === 1 &&
        ice_res.fire_mult === 2 &&
        ice_res.water_mult === 1 &&
        ice_res.electric_mult === 1 &&
        ice_res.grass_mult === 1 &&
        ice_res.ice_mult === 0.5 &&
        ice_res.fighting_mult === 2 &&
        ice_res.poison_mult === 1 &&
        ice_res.bug_mult === 1 &&
        ice_res.ground_mult === 1 &&
        ice_res.flying_mult === 1 &&
        ice_res.psychic_mult === 1 &&
        ice_res.rock_mult === 2 &&
        ice_res.ghost_mult === 1 &&
        ice_res.dragon_mult === 1 &&
        ice_res.dark_mult === 1 &&
        ice_res.steel_mult === 2 &&
        ice_res.fairy_mult === 1
    );
    const fighting_ans = (
        fighting_res.normal_mult === 1 &&
        fighting_res.fire_mult === 1 &&
        fighting_res.water_mult === 1 &&
        fighting_res.electric_mult === 1 &&
        fighting_res.grass_res === 1 &&
        fighting_res.ice_mult === 1 &&
        fighting_res.fighting_mult === 1 &&
        fighting_res.poison_mult === 1 &&
        fighting_res.bug_mult === 0.5 &&
        fighting_res.ground_mult === 1 &&
        fighting_res.flying_mult === 2 &&
        fighting_res.psychic_mult === 2 &&
        fighting_res.rock_mult === 0.5 &&
        fighting_res.ghost_mult === 1 &&
        fighting_res.dragon_mult === 1 &&
        fighting_res.dark_mult === 0.5 &&
        fighting_res.steel_mult === 1 &&
        fighting_res.fairy_mult === 2
    );
    const poison_ans = (
        poison_res.normal_mult === 1 &&
        poison_res.fire_mult === 1 &&
        poison_res.water_mult === 1 &&
        poison_res.electric_mult === 1 &&
        poison_res.grass_mult === 0.5 &&
        poison_res.ice_mult === 1 &&
        poison_res.fighting_mult === 0.5 &&
        poison_res.poison_mult === 0.5 &&
        poison_res.bug_mult === 0.5 &&
        poison_res.ground_mult === 2 &&
        poison_res.flying_mult === 1 &&
        poison_res.psychic_mult === 2 &&
        poison_res.rock_mult === 1 &&
        poison_res.ghost_mult === 1 &&
        poison_res.dragon_mult === 1 &&
        poison_res.dark_mult === 1 &&
        poison_res.steel_mult === 1 &&
        poison_res.fairy_mult === 0.5
    );
    const ground_ans = (
        ground_res.normal_mult === 1 &&
        ground_res.fire_mult === 1 &&
        ground_res.water_mult === 2 &&
        ground_res.electric_mult === 0 &&
        ground_res.grass_mult === 2 &&
        ground_res.ice_mult === 2 &&
        ground_res.fighting_mult === 1 &&
        ground_res.poison_mult === 0.5 &&
        ground_res.bug_mult === 1 &&
        ground_res.ground_mult === 1 &&
        ground_res.flying_mult === 1 &&
        ground_res.psychic_mult === 1 &&
        ground_res.rock_mult === 0.5 &&
        ground_res.ghost_mult === 1 &&
        ground_res.dragon_mult === 1 &&
        ground_res.dark_mult === 1 &&
        ground_res.steel_mult === 1 &&
        ground_res.fairy_mult === 1
    );
    const flying_ans = (
        flying_res.normal_mult === 1 &&
        flying_res.fire_mult === 1 &&
        flying_res.water_mult === 1 &&
        flying_res.electric_mult === 2 &&
        flying_res.grass_mult === 0.5 &&
        flying_res.ice_mult === 2 &&
        flying_res.fighting_mult === 0.5 &&
        flying_res.poison_mult === 1 &&
        flying_res.bug_mult === 0.5 &&
        flying_res.ground_mult === 0.5 &&
        flying_res.flying_mult === 1 &&
        flying_res.psychic_mult === 1 &&
        flying_res.rock_mult === 2 &&
        flying_res.ghost_mult === 1 &&
        flying_res.dragon_mult === 1 &&
        flying_res.dark_mult === 1 &&
        flying_res.steel_mult === 1 &&
        flying_res.fairy_mult === 1
    );
    const psychic_ans = (
        psychic_res.normal_mult === 1 &&
        psychic_res.fire_mult === 1 &&
        psychic_res.water_mult === 1 &&
        psychic_res.electric_mult === 1 &&
        psychic_res.grass_mult === 1 &&
        psychic_res.ice_mult === 1 &&
        psychic_res.fighting_mult === 0.5 &&
        psychic_res.poison_mult === 1 &&
        psychic_res.bug_mult === 2 &&
        psychic_res.ground_mult === 1 &&
        psychic_res.flying_mult === 1 &&
        psychic_res.psychic_mult === 0.5 &&
        psychic_res.rock_mult === 1 &&
        psychic_res.ghost_mult === 2 &&
        psychic_res.dragon_mult === 1 &&
        psychic_res.dark_mult === 2 &&
        psychic_res.steel_mult === 1 &&
        psychic_res.fairy_mult === 1
    );
    const bug_ans = (
        bug_res.normal_mult === 1 &&
        bug_res.fire_mult === 2 &&
        bug_res.water_mult === 1 &&
        bug_res.electric_mult === 1 &&
        bug_res.grass_mult === 0.5 &&
        bug_res.ice_mult === 1 &&
        bug_res.fighting_mult === 0.5 &&
        bug_res.poison_mult === 1 &&
        bug_res.bug_mult === 1 &&
        bug_res.ground_mult === 0.5 &&
        bug_res.flying_mult === 2 &&
        bug_res.psychic_mult === 1 &&
        bug_res.rock_mult === 2 &&
        bug_res.ghost_mult === 1 &&
        bug_res.dragon_mult === 1 &&
        bug_res.dark_mult === 1 &&
        bug_res.steel_mult === 1 &&
        bug_res.fairy_mult === 1
    );
    const rock_ans = (
        rock_res.normal_mult === 0.5 &&
        rock_res.fire_mult === 0.5 &&
        rock_res.water_mult === 2 &&
        rock_res.electric_mult === 1 &&
        rock_res.grass_mult === 2 &&
        rock_res.ice_mult === 1 &&
        rock_res.fighting_mult === 2 &&
        rock_res.poison_mult === 0.5 &&
        rock_res.bug_mult === 1 &&
        rock_res.ground_mult === 1 &&
        rock_res.flying_mult === 0.5 &&
        rock_res.psychic_mult === 1 &&
        rock_res.rock_mult === 1 &&
        rock_res.ghost_mult === 1 &&
        rock_res.dragon_mult === 1 &&
        rock_res.dark_mult === 1 &&
        rock_res.steel_mult === 2 &&
        rock_res.fairy_mult === 1
    );
    const ghost_ans = (
        ghost_res.normal_mult === 0 &&
        ghost_res.fire_mult === 1 &&
        ghost_res.water_mult === 1 &&
        ghost_res.electric_mult === 1 &&
        ghost_res.grass_mult === 1 &&
        ghost_res.ice_mult === 1 &&
        ghost_res.fighting_mult === 0 &&
        ghost_res.poison_mult === 0.5 &&
        ghost_res.bug_mult === 0.5 &&
        ghost_res.ground_mult === 1 &&
        ghost_res.flying_mult === 1 &&
        ghost_res.psychic_mult === 1 &&
        ghost_res.rock_mult === 1 &&
        ghost_res.ghost_mult === 2 &&
        ghost_res.dragon_mult === 1 &&
        ghost_res.dark_mult === 2 &&
        ghost_res.steel_mult === 1 &&
        ghost_res.fairy_mult === 1
    );
    const dragon_ans = (
        dragon_res.normal_mult === 1 &&
        dragon_res.fire_mult === 0.5 &&
        dragon_res.water_mult === 0.5 &&
        dragon_res.electric_mult === 0.5 &&
        dragon_res.grass_mult === 0.5 &&
        dragon_res.ice_mult === 2 &&
        dragon_res.fighting_mult === 1 &&
        dragon_res.poison_mult === 1 &&
        dragon_res.bug_mult === 1 &&
        dragon_res.ground_mult === 1 &&
        dragon_res.flying_mult === 1 &&
        dragon_res.psychic_mult === 1 &&
        dragon_res.rock_mult === 1 &&
        dragon_res.ghost_mult === 1 &&
        dragon_res.dragon_mult === 2 &&
        dragon_res.dark_mult === 1 &&
        dragon_res.steel_mult ===1 &&
        dragon_res.fairy_mult === 2
    );
    const dark_ans = (
        dark_res.normal_mult === 1 &&
        dark_res.fire_mult === 1 &&
        dark_res.water_mult === 1 &&
        dark_res.electric_mult === 1 &&
        dark_res.grass_mult === 1 &&
        dark_res.ice_mult === 1 &&
        dark_res.fighting_mult === 2 &&
        dark_res.poison_mult === 1 &&
        dark_res.bug_mult === 2 &&
        dark_res.ground_mult === 1 &&
        dark_res.flying_mult === 1 &&
        dark_res.psychic_mult === 0 &&
        dark_res.rock_mult === 0 &&
        dark_res.ghost_mult === 1 &&
        dark_res.dragon_mult === 1 &&
        dark_res.dark_mult === 0.5 &&
        dark_res.steel_mult === 1 &&
        dark_res.fairy_mult === 2
    );
    const steel_ans = (
        steel_res.normal_mult === 0.5 &&
        steel_res.fire_mult === 2 &&
        steel_res.water_mult === 1 &&
        steel_res.electric_mult === 1 &&
        steel_res.grass_mult === 0.5 &&
        steel_res.ice_mult === 0.5 &&
        steel_res.fighting_mult === 2 &&
        steel_res.poison_mult === 0 &&
        steel_res.bug_mult === 0.5 &&
        steel_res.ground_mult === 2 &&
        steel_res.flying_mult === 1 &&
        steel_res.psychic_mult === 0.5 &&
        steel_res.rock_mult === 0.5 &&
        steel_res.ghost_mult === 1 &&
        steel_res.dark_mult === 1 &&
        steel_res.dragon_mult === 0.5 &&
        steel_res.steel_mult === 0.5 &&
        steel_res.fairy_mult === 0.5
    );
    const fairy_ans = (
        fairy_res.normal_mult === 1 &&
        fairy_res.fire_mult === 1 &&
        fairy_res.water_mult === 1 &&
        fairy_res.electric_mult === 1 &&
        fairy_res.grass_mult === 1 &&
        fairy_res.ice_mult === 1 &&
        fairy_res.fighting_mult === 0.5 &&
        fairy_res.poison_mult === 2 &&
        fairy_res.bug_mult === 0.5 &&
        fairy_res.ground_mult === 1 &&
        fairy_res.flying_mult === 1 &&
        fairy_res.psychic_mult === 1 &&
        fairy_res.rock_mult === 1 &&
        fairy_res.ghost_mult === 1 &&
        fairy_res.dark_mult === 0.5 &&
        fairy_res.dragon_mult === 0 &&
        fairy_res.steel_mult === 2 &&
        fairy_res.fairy_mult === 1
    );

    const result = (normal_ans && fire_ans && water_ans && electric_ans && grass_ans && ice_ans && fighting_ans && poison_ans && ground_ans && flying_ans && psychic_ans && bug_ans && rock_ans && ghost_ans && dragon_ans && dark_ans && steel_ans && fairy_ans);
    assert.equal(result, true, "Error: wrong typechart for type 1");
})