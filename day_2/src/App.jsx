// import ProfileCard from "./ProfileCard";

/*
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
*/
/*
function App() {
  return (
    <>
      <ProfileCard
        name="Kanhu"
        role="Frontend Developer"
        age={21}
        isAvailable={true}
      />
      <ProfileCard name="Muntaha" role="Designing" skills={["UI", "Figma"]} />
    </>
  );
}
*/

/*
function Box({ children }) {
  return <div className="box">{children}</div>;
}

function Card({ children }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px ",
        borderRadius: "8px",
      }}
    >
      {children}
    </div>
  );
}

function App() {
  return (
    <>
      <Box>
        <h2>Hello</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
          accusamus asperiores libero.
        </p>
      </Box>

      <Card>
        <h2>Product shoes</h2>
        <p>Price: $99</p>
      </Card>

      <Card>
        <h2>Customer Review</h2>
        <p>Good Quality</p>
      </Card>
    </>
  );
}

export default App;
*/

import SkillCard from "./SkillCard";

function App() {
  return (
    <>
      <SkillCard title="Hero" level={1} />
      <SkillCard title="Hero" level={1} />
      <SkillCard title="Hero" level={1} />
    </>
  );
}

export default App;
