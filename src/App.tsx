import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TodoApp from "./pages/TodoApp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<TodoApp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
