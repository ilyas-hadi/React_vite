import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Heading from "../components/Heading";

const Error: React.FC = () => {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    if (counter === 0) {
      clearInterval(timer);
      navigate("/");
    }

    return () => {
      clearInterval(timer);
    };
  }, [counter, navigate]);

  return (
    <div className="container mt-auto">
      <div className="Main">
        <div className="test-content">
         <Heading upperHd='URL CHECKER'  innerHd='PAGE 404'  />
          <p>Redirecting to home in {counter} seconds...</p>
        </div>
      </div>
    </div>
  );
};

Error.propTypes = {};

export default Error;
