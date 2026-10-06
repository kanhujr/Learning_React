import { useState } from "react";

export default function Skills() {
  const [skills, setSkills] = useState(["React"]);

  const addJavascript = () => {
    setSkills([...skills, "Javascript"]);
  };

  const removeReact = () => {
    setSkills(skills.filter((skill) => skill !== "React"));
  };

  return (
    <div>
      <h1>My Skills</h1>
      <p>{skills.join(", ")}</p>
      <button onClick={addJavascript}>Add</button>
      <button onClick={removeReact}>Remove</button>
    </div>
  );
}
