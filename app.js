const Student = {
  name: "sahil",

  age: 12,
  class: 9,
  username: "sahil@123",
  password: 123544,
};
// let { username, password } = Student;

let { username: user, password: secret, cityt: place = "mumbai" } = Student;
