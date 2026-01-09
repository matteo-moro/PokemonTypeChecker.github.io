window.pokemonInput1 = document.getElementById("pokemonSelect1");
window.pokemonInput2 = document.getElementById("pokemonSelect2");
window.pokemonInput3 = document.getElementById("pokemonSelect3");
window.pokemonInput4 = document.getElementById("pokemonSelect4");
window.pokemonInput5 = document.getElementById("pokemonSelect5");
window.pokemonInput6 = document.getElementById("pokemonSelect6");

pokemonInput1.addEventListener("change", function () {checkValidity(pokemonInput1.value)});
pokemonInput2.addEventListener("change", function () {checkValidity(pokemonInput2.value)});
pokemonInput3.addEventListener("change", function () {checkValidity(pokemonInput3.value)});
pokemonInput4.addEventListener("change", function () {checkValidity(pokemonInput4.value)});
pokemonInput5.addEventListener("change", function () {checkValidity(pokemonInput5.value)});
pokemonInput6.addEventListener("change", function () {checkValidity(pokemonInput6.value)});

function checkValidity(inputContent)
{
    console.log(inputContent);
}

//this code is supposed to eventually also do the type checking so i can avoid having to repeat parts of it somewhere else.
//current plan is to get the names and if they are valid put the types inside of an array, then feed that array to another function to check types