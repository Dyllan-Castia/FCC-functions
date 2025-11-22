function middle(str) {
  const mid = str.slice(1, str.length - 1);
  return mid;
}
console.log(middle("Experiment"));

function middleCount(str) {
  return str.length - 2;
}
console.log(middleCount("Experiment"));
