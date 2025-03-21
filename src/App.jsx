import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="grid grid-cols-[4fr_1fr]">
      {/* navbar */}
      <Navbar />

      {/* main content */}
      <Main />

      {/* side bar */}
      <aside className=""></aside>
    </div>
  );
}

export default App;
