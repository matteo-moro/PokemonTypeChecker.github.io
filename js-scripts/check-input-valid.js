window.pokemonInput1 = document.getElementById("pokemonSelect1");
window.pokemonInput2 = document.getElementById("pokemonSelect2");
window.pokemonInput3 = document.getElementById("pokemonSelect3");
window.pokemonInput4 = document.getElementById("pokemonSelect4");
window.pokemonInput5 = document.getElementById("pokemonSelect5");
window.pokemonInput6 = document.getElementById("pokemonSelect6");

const pokemonTeamArray = [null,null,null,null,null,null];

pokemonInput1.addEventListener("change", function () {validatePokemon(pokemonInput1.value, 1)});
pokemonInput2.addEventListener("change", function () {validatePokemon(pokemonInput2.value, 2)});
pokemonInput3.addEventListener("change", function () {validatePokemon(pokemonInput3.value, 3)});
pokemonInput4.addEventListener("change", function () {validatePokemon(pokemonInput4.value, 4)});
pokemonInput5.addEventListener("change", function () {validatePokemon(pokemonInput5.value, 5)});
pokemonInput6.addEventListener("change", function () {validatePokemon(pokemonInput6.value, 6)});

function validatePokemon(inputContent, slotNumber)
{
    if(inputContent.length >= 3)
    {
        for(const pokemon of data.pokemonlist)
        {
            if(pokemon.name === inputContent)
            {

                if(!pokemonTeamArray.includes(pokemon))
                {
                    pokemonTeamArray[slotNumber - 1] = pokemon;
                    break;
                }
            }
        }
    }
}