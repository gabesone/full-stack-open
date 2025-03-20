const express = require("express");
const app = express();
const morgan = require("morgan");

let notes = [
  {
    id: "1",
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: "2",
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: "3",
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: "4",
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.use(morgan("tiny"));
app.use(express.json());

app.get("/api/persons", (request, response) => {
  response.json(notes);
});

app.get("/info", (request, response) => {
  const notesSize = notes.length;
  const receiveRequest = new Date();
  response.send(`<div>Phonebook has info for ${notesSize} people 
                    <p>${receiveRequest}</p>
                </div>`);
});

app.get("/api/persons/:id", (request, response) => {
  const id = request.params.id;
  const person = notes.find((note) => note.id === id);
  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

app.delete("/api/persons/:id", (request, response) => {
  const id = request.params.id;
  notes = notes.filter((note) => note.id !== id);

  response.status(204).end();
});

function randomId() {
  return String(Math.floor(Math.random() * 10000));
}

app.post("/api/persons", (request, response) => {
  const note = request.body;

  console.log(note);

  if (!note.name || !note.number) {
    return response.status(400).json({ error: "name or number missing" });
  }

  const duplicateName = notes.find((person) => person.name === note.name);

  if (duplicateName) {
    return response.status(400).json({ error: "name must be unique" });
  }

  const newNote = {
    id: randomId(),
    name: note.name,
    number: note.number,
  };

  notes = notes.concat(newNote);

  response.json(newNote);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
