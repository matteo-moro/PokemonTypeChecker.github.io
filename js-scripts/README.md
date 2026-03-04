## Folder and its files

The name is pretty self explanatory. It's probably not the best practice to have files that load jsons, files that do tests and files that modify the DOM in the same folder but whatever.  
All the files in this folder *should* be included in ```index.html``` unless i forgot to update the README or forgot something (in which case it shouldn't even deploy correctly).  

### bad-tests.js
contains the extremely poorly written tests used in the ```TEST()``` command (more info in the main folder README).
### check-input-valid.js
handles the input elements and defines the array that contains their values.  
### fill-table
that.  
### get-weakness
defines the ```PokemonWeakness``` class, used to represent the multiplier of the damage taken from a specific type, and returns an instance of it containing a given Pokemon's types.  
### load-list
gets ```json-files/svlist.json``` and loads it as a JSON object to construct the list of options for the inputs
