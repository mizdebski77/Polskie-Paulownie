import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "../common/Navbar/navbar";
import { Footer } from "../common/Footer/footer";
import { Home } from "../features/Home/home";
import { About } from "../features/About/about";
import { Contact } from "../features/Contact/contact";
import { Gallery } from "../features/Gallery/gallery";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Strona-Główna" element={<Home />} />
        <Route path="/O-nas" element={<About />} />
        <Route path="/Kontakt" element={<Contact />} />
        <Route path="/Galeria" element={<Gallery />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
