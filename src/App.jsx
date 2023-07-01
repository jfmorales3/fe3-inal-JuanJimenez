import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// Context
import { ContextGlobal } from "./Components/utils/global.context";

// Routes
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';

// Components
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  const { state } = useContext(ContextGlobal);
  const { theme } = state;

  return (
    <Router>
      <div className={`app-container ${theme}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/dentist/:id" element={<Detail/>}/>
          <Route path="/favs" element={<Favs/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
