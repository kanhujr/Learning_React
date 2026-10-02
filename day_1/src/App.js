// import logo from "./logo.svg";
import "./App.css";
// import { text } from "node:stream/consumers";

// const name = "Kanhu";

// Functional Component

// const MyButton = () => (
//   <button
//
//   >
//     Submit Button
//   </button>
// );
// const Search = () => (
//   <input
//     placeholder="Search your fav product"
//     style={{ marginTop: "18px", padding: "12px 20px", color: "white" }}
//   />
// );
// function App() {
//   return (
//     <div className="App">
//       <h1>My Name is {name}</h1>
//       <MyButton />
//       <div>
//         <Search />
//       </div>
//     </div>
//   );
// }
const Search = () => <input placeholder="Search.." />;

const Header = () => {
  return (
    <div className="header">
      <h1>Amazon App</h1>
      <Search />
      <ul className="list-box">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

function App() {
  return <Header />;
}

export default App;
