//Evaluates two strings and checks if the end of string1 ends in string2

function confirmEnding(str1, str2) {
  const check = str2.slice(0, str2.lenth);
  const arg1 = str1.slice(0 - check.length);
  return check === arg1;
}
console.log(confirmEnding("He has to give me a new name", "name"));
//true
