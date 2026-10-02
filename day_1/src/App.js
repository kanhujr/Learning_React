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
// const Search = () => <input placeholder="Search.." />;

// const Header = () => {
//   return (
//     <div className="header">
//       <h1>Amazon App</h1>
//       <Search />
//       <ul className="list-box">
//         <li>Home</li>
//         <li>About</li>
//         <li>Contact</li>
//       </ul>
//     </div>
//   );
// };

// function App() {
//   return <Header />;
// }

// export default App;

// *****************************************//
// Rendering List and Conditional Rendering //
// *****************************************//

const isAdmin = true;

const isLoading = false;

function Loader() {
  return <h3>Loading...</h3>;
}

function App() {
  return (
    <div className="App">
      <h1 style={{ backgroundColor: "orange", color: "white" }}>
        Hello and Welcome
      </h1>
      {isAdmin ? (
        <h2>This is the Admin Portal</h2>
      ) : (
        <h2>This is the User Portal</h2>
      )}

      {isLoading ? <h3>Page Loaded</h3> : <Loader />}
    </div>
  );
}

export default App;
