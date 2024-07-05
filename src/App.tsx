import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

//import files
import Home from "./components/CustomerDetails";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import Navbar from "./components/Navbar";
import FetchCustomer from "./components/FetchCustomer";

function App() {
  return (
    <>
      <Navbar />
      <div className="p-4 pt-20"></div>
      <Routes>
        <Route path="/save-customer" element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/fetch-customer" element={<FetchCustomer />} />
      </Routes>
    </>
  );
}

export default App;
