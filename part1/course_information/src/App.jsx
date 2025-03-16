const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Part = ({ name, exercise }) => {
  return (
    <div>
      <p>
        {name}: {exercise} exercises
      </p>
    </div>
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
    course.parts[2].exercises +
    course.parts[2].exercises;

  return <p>Total of exercises: {total}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;
