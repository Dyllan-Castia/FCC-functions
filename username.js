let email = "kingkoopa@gmail.com";

function getUserName(email) {
  const [name, domain] = email.split("@");
  const user = name.slice(0);
  return user;
}
console.log(getUserName(email));

function getNameAlt(email) {
  const atIndex = email.indexOf("@");
  const user = email.slice(0, atIndex);
  return user;
}
console.log(getNameAlt(email));
