import "./App.css";
import { Route, Routes } from "react-router-dom";
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
        <Route path="/" element={<Profile />} /> {/* Default route to Profile */}
        <Route path="/home" element={<Home />} /> {/* Home page available at /home */}
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/vandetails" element={<Vandetails />} />
        <Route path="/hostdashboard" element={<HostDashboard />} />
        <Route path="/hostvans" element={<HostVans />} />
        <Route path="/hostreviews" element={<HostReviews />} />
      </Routes>
    </div>
  );
}

export default App;
