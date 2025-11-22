//Finds halfway point for any given string and masks the first half of that string.
function maskHalf(str) {
  const half = Math.floor(str.length / 2);
  const stars = "*".repeat(half);
  const last = str.slice(half);
  return stars + last;
}

console.log(maskHalf("watermelon"));
//"*****melon"

//Replaces str characters from index2-index5 inclusive without using .replace()
function replaceRange(str) {
  const first = str.slice(0, 2);
  const last = str.slice(6);
  const mask = "*".repeat(4);
  return first + mask + last;
}

console.log(replaceRange("Language"));
//"La****ge"
