import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/images/icon/Test_logo-01.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Main */}
      <div className="container ps-re">
        <div className="col-6 mx-auto y-pad">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <div>
              <Link to="/" >
                <img src={logo} className="logo" alt="Vite logo" />
              </Link>
            </div>
            <h1>Here is Testing site</h1>
            <p>please count / Click from the given counter</p>
            <div className="count_btn">
              <button onClick={() => setCount((count) => count===0?count:count-1)}>
                 -
              </button>
              <button onClick={() => setCount((count) => count + 1)}>
                 +
              </button>
            </div>
          </div>
        </div>
        <div className="background_count">
          <h1>{count}</h1>
        </div>
      </div>
      {/* Footer */}
    </>
  );
}

export default App;
