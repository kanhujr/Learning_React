function App() {
  const name = "Kanhu";
  const skills = ["React", "Javascript", "TailwindCSS"];

  return (
    <>
      <h1>My name is {name}</h1>
      <p>
        Frontend Developer, passionate about. building clean and user friendly
        web-apps
      </p>
      <h2>Skills</h2>
      <p>{skills[0]}</p>
      <p>{skills[1]}</p>
      <p>{skills[2]}</p>
    </>
  );
}

export default App;
