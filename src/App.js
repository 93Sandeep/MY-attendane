import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HomePage from "./pages/Home";
import Employees from "./pages/Employees";
import PrivateComponenet from "./components/PrivateComponent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
        <Routes>
        <Route path="/" element={<HomePage/>} />
          <Route element={<PrivateComponenet/>}>
            <Route path="/employee" element={<Employees />} />
          </Route>
          
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />

      </Routes>
      </BrowserRouter>
      <Footer/>
      
    </div>
  );
}

export default App;
