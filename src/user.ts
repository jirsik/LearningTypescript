enum Role {
  ADMIN,
  PLAYER,
  VIP
}

const user: {
  firstName: string;
  lastName: string;
  age: number;
  cars: string[];
  score: [number, string]; // this is declaration of Tuple (array with specific types and length)
  role: number;
} = {
  firstName: "John",
  lastName: "Smith",
  age: 19,
  cars: ["Skoda", "Ford"],
  score: [954, "champ"],
  role: 3 // can assign number or something from enum Role
};

user.score.push(2); // push is the only way how to extend Tuple
console.log(user);

let r: string;
switch (user.role) {
  case Role.ADMIN:
    r = "admin";
    break;
  case Role.VIP:
    r = "V.I.P.";
    break;
  case Role.PLAYER:
  default:
    r = "player";
}

console.log("Hi, you are " + r);
