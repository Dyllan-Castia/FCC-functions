function truncateString (str, num) {
  const snip = str.slice(0, num);
  if (num >= str.length) {
    return str;
  } else return snip + "...";
}
console.log(truncateString("I am very happy", 14));
//I am very happ...
