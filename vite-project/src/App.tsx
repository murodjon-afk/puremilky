import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Routes>
            <Route path="/" element={<About />} />
      <Route path="/about" element={<Home />} />
    </Routes>
  );
}

export default App;
