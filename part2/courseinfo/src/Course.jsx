const Header = (props) => <h2>{props.course}</h2>;

const Content = (props) => (
  <div>
    {props.parts.map((p) => (
      <Part key={p.id} part={p} />
    ))}
  </div>
);

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
);

const Total = (props) => (
  <p>
    <strong>total of {props.total} exercises</strong>
  </p>
);

const Course = ({ course }) => {
  const total = course[0].parts.reduce((sum, p) => (sum += p.exercises), 0);
  const total2 = course[1].parts.reduce((sum, p) => (sum += p.exercises), 0);

  return (
    <>
      <Header course={course[0].name} />
      <Content parts={course[0].parts} />
      <Total total={total} />
      <Header course={course[1].name} />
      <Content parts={course[1].parts} />
      <Total total={total2} />
    </>
  );
};

export default Course;
