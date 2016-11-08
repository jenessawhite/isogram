/**
An isogram is a word that has no repeating letters, consecutive or
non-consecutive. Implement a function that determines whether a
string that contains only letters is an isogram. Assume the empty
string is an isogram. Ignore letter case.

isIsogram( "Dermatoglyphics" ) == true
isIsogram( "aba" ) == false
isIsogram( "moOse" ) == false // -- ignore letter case
**/

function isIsogram(str){
  if (typeof str === 'undefined') {
    return {};
  } else {
    var chars = str.toLowerCase().split('');
    var found = {};
    console.log(found);
    for (var i = 0; i < chars.length; i++) {
        var currentLetter = chars[i];
        if (found [currentLetter]) { //if seen before
            return found = false
        } else { //seen for first time
            return found = true;
        }
      }
    }
    return found;
}

console.assert( isIsogram("Dermatoglyphics") );
console.assert( isIsogram("isogram") );
console.assert( isIsogram("aba") === false );
console.assert( isIsogram("moOse") === false );
console.assert( isIsogram("isIsogram") === false );
console.assert( isIsogram("") );
