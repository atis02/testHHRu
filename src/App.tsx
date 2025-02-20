import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home/Home";
import Register from "./Components/register/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
