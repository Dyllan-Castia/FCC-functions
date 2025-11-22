function convertCtoF(number) {
  return number * (9 / 5) + 32;
}
console.log(convertCtoF(40));
//104
function convertFtoC(number) {
  const far = (number - 32) * (5/9);
  return Math.round(far);
}
console.log(convertFtoC(40));
//4

//Takes Celsius or Fahrenheit and converts them to the other.
function convertTemp (value, unit) {
  if (unit === "C") {
    return value * (9 / 5) + 32;
  }else if (unit === "F") {
    return (value - 32) * (5 / 9);
  } else {
    return "Error: Invalid unit, must be \"C\" or \"F\"";
  }
}
console.log(convertTemp(100, "F"));
//~37.77777777777778
console.log(convertTemp(36, "C"));
//96.8
