import "./App.css";
// import Hello from "./component/Hello";
import Timer from "./component/Timer";

const user = {
  name: "Mike",
  age: 30,
};

function App() {
  return (
    <div className="App">
      {/* <Hello user={user} /> */}
      <Timer />
    </div>
  );
}

export default App;
