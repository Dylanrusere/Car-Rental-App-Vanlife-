import "./App.css";
import { Route, Routes} from "react-router-dom";
import { Navbar } from "./components/navbar";
import { About, Home, Vans, Signup, Profile, Vandetails } from "./components/pages";
import { HostDashboard } from "./components/pages/Host/HostDashboard";
import { HostVans } from "./components/pages/Host/HostVans";
import { HostReviews } from "./components/pages/Host/HostReviews";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Vandetails" element={<Vandetails />} />
        <Route path="/HostDashboard" element={<HostDashboard />} />
        <Route path="/HostVans" element={<HostVans />} />
        <Route path="/HostReviews" element={<HostReviews />} />
      </Routes>
    </div>
  );
}

export default App;