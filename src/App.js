import "./App.css";
import {Route, Routes} from "react-router-dom";
import {Navbar } from "./components/navbar";
import {About, Home, Vans, Signup, Profile} from "./components/pages";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/van:id" element={<VansDetails />} /> */}
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;