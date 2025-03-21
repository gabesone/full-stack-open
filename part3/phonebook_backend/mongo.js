const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log(
    "Required: node mongo.js password name number to insert a new person"
  );
  return process.exit(1);
}

const password = process.argv[2];
const name = process.argv[3];
const number = process.argv[4];

const url = `mongodb+srv://sena6gabriel:${password}@cluster0.e18ka.mongodb.net/personApp?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.set("strictQuery", false);

mongoose.connect(url);

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model("persons", personSchema);

if (process.argv.length <= 3) {
  Person.find({}).then((persons) => {
    console.log("phonebook:");

    persons.forEach((person) => console.log(person.name, person.number));
    mongoose.connection.close();
  });
}

if (!name && !number) {
  //   mongoose.connection.close();
  return;
}

const person = new Person({
  name,
  number,
});

person.save().then((result) => {
  console.log(`added ${name} number ${number} to phonebook`);
  mongoose.connection.close();
});
