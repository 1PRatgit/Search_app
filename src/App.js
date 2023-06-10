import './App.css';
import Home from './components/HomePage/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductShow from './components/Products/ProductShow';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Search_app" element={<Home />} />
        <Route path="/About" element={<Home />} />
        <Route path="/productShow" element={<ProductShow />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

