/* eslint-disable */

import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  const responseHandler = ({ data }) => {
    setMessage(data);
    return data;
  };

  const errorHandler = ({ message }) => {
    setMessage(message);
    return message;
  };
  // http://localhost:8080/backend/cors
  const onNonCorsHeaderHandler = () => {
    axios
      .get("http://localhost:8080/backend/not-cors")
      .then(responseHandler)
      .catch(errorHandler);
  };

  const onCorsHeaderHandler = () => {
    axios.get("http://localhost:8080/backend/cors").then(responseHandler);
  };

  const onNonProxyHandler = () => {
    axios.get("/backend/not-proxy").then(responseHandler).catch(errorHandler);
  };

  const onProxyHandler = () => {
    axios.get("/backend/proxy").then(responseHandler);
  };

  return (
    <div className="App">
      <p>{message}</p>
      <div>
        <button onClick={onNonCorsHeaderHandler}>non cors header</button>
        <button onClick={onCorsHeaderHandler}>cors header</button>
        <button onClick={onNonProxyHandler}>nonProxy</button>
        <button onClick={onProxyHandler}>proxy</button>
      </div>
    </div>
  );
}

export default App;
