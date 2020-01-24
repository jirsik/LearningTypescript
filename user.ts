const user: {
  firstName: string;
  lastName: string;
  age: number;
  cars: string[];
  score: [number, string]; // this is declaration of Tuple (array with specific types and length)
} = {
  firstName: "John",
  lastName: "Smith",
  age: 19,
  cars: ["Skoda", "Ford"],
  score: [954, "champ"]
};

user.score.push(2); // push is the only way how to extend Tuple
console.log(user);
