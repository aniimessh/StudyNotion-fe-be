import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Navbar } from "./components/common/Navbar";

function App() {
  return (
    <div className="w-screen min-h-screen bg-richblack-800 flex flex-col font-inte">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
