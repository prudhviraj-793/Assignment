import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Result from "./Components/Result";
import SpinWheel from "./Components/SpinWheel";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/spinWheel" element={<SpinWheel />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;
