//Finds halfway point for any given string and masks the first half of that string.
function maskHalf(str) {
  const half = Math.floor(str.length / 2);
  const stars = "*".repeat(half);
  const last = str.slice(half);
  return stars + last;
}

console.log(maskHalf("watermelon"));
//"*****melon"
