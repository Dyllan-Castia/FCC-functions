let email = "shmokashmoy@gmail.com";

//Gets the domain and returns it as a string.
function getDomain(email) {
  const atIndex = email.indexOf("@");
  const domain = email.slice(atIndex + 1);
  return domain;
}

console.log(getDomain(email));
//"gmail.com"

//Gets the username and domain and returns both as an array.
function manualSplit(email) {
  const atIndex = email.indexOf("@");
  const user = email.slice(0, atIndex);
  const domain = email.slice(atIndex + 1);
  return [user, domain];
}

console.log(manualSplit(email));
//["shmokashmoy", "gmail.com"]

//Gets the username and returns it as a string.
function getUserName(email) {
  const [name, domain] = email.split("@");
  const user = name.slice(0);
  return user;
}
console.log(getUserName(email));
//"shmokashmoy"

//Does the same thing as getUserName(email)
function getNameAlt(email) {
  const atIndex = email.indexOf("@");
  const user = email.slice(0, atIndex);
  return user;
}
console.log(getNameAlt(email));
//"shmokashmoy"
