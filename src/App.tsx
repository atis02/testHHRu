import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home/Home";
import Results from "./Components/Results/Results";
import Finalize from "./Components/Finalize/Finalize";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results/:id" element={<Results />} />
          <Route path="/finalize/:id" element={<Finalize />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
