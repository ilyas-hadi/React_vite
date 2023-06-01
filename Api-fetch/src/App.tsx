import { useState } from "react";
import logo from "./assets/images/icon/Test_logo-01.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Main */}
      <div className="container">
        <div className="col-6 mx-auto y-pad">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <div>
              <a href="#" target="_blank">
                <img src={logo} className="logo" alt="Vite logo" />
              </a>
            </div>
            <h1>Here is Testing site</h1>
            <p>please count / Click from the given counter</p>
            <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </button>
              <p>
                Edit <code> src/App.tsx </code> and save to test HMR
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
    </>
  );
}

export default App;
