function maskMiddle(str) {
  const first = str[0];
  const last = str[str.length - 1];
  const stars = "*".repeat(str.length -2);
  return first + stars + last;
}
console.log(maskMiddle("Grognak"));
                           
