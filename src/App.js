import Header from "./Components/Header";
import Home from "./Components/Home";
import Kontak from "./Components/Kontak";
import Tentang from "./Components/Tentang";
import Gallery from "./Components/Gallery";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/tentang' element={<Tentang/>} />
          <Route path='/kontak' element={<Kontak/>} />
          <Route path='/galeri' element={<Gallery/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;