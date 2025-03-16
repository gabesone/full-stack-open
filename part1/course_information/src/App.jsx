const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Part = ({ name, exercise }) => {
  return (
    <p>
      {name}: {exercise} exercises
    </p>
  );
};

const Content = ({ course }) => {
  return (
    <div>
      <Part name={course.parts[0].name} exercise={course.parts[0].exercises} />
      <Part name={course.parts[1].name} exercise={course.parts[1].exercises} />
      <Part name={course.parts[2].name} exercise={course.parts[2].exercises} />
    </div>
  );
};

const Total = ({ course }) => {
  const total =
    course.parts[0].exercises +
    course.parts[1].exercises +
    course.parts[2].exercises;

  return <strong>Total of {total} exercises</strong>;
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  return (
    <div>
      <Course course={course} />
    </div>
  );
};

export default App;
