let email = "shmokashmoy@gmail.com";

function getDomain(email) {
  const atIndex = email.indexOf("@");
  const domain = email.slice(atIndex + 1);
  return domain;
}

console.log(getDomain(email));
//"gmail.com"

//gets username and domain and returns both as an array.
function manualSplit(email) {
  const atIndex = email.indexOf("@");
  const user = email.slice(0, atIndex);
  const domain = email.slice(atIndex + 1);
  return [user, domain];
}

console.log(manualSplit(email));
//["shmokashmoy", "gmail.com"]
