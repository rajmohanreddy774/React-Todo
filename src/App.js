import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./components/Counter";
import Home from "./components/Home";
import "./App.css";
import Todo from "./components/Todo";
import MainCounter from "./components/MainCounter";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/main_counter" element={<MainCounter />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
