
//not working, need rewriting

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
    expect(result.toBe(true));
});