let email = "apple.pie@example.com";

function maskEmail(email) {
  const [name, domain] = email.split("@");
  const first = name[0];
  const last = name[name.length - 1];
  const stars = "*".repeat(name.length - 2);
  return first + stars + last + "@" + domain;
}

console.log(maskEmail(email));
