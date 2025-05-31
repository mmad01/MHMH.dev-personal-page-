import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import Test from "./components/Test/Test";

function App() {
  return (
    <div className="h-screen overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test"element={<Test/>} />
      </Routes>
    </div>
  );
}

export default App;
