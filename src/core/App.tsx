import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Navbar } from "../common/Navbar/navbar";
import { Footer } from "../common/Footer/footer";
import { Home } from "../features/Home/home";
import { About } from "../features/About/about";
import { Contact } from "../features/Contact/contact";
import { Gallery } from "../features/Gallery/gallery";
import { Cultivation } from "../features/Cultivation/cultivation";
import { Offer } from "../features/Offer/offer";
import { Calculator } from "../features/Offer/Calculator/calculator";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Strona-Główna" element={<Home />} />
        <Route path={"*"} element={<Navigate replace to="/Strona-Główna" />}> </Route>
        <Route path="/O-nas" element={<About />} />
        <Route path="/Oferta" element={<Offer />} />
        <Route path="/Kontakt" element={<Contact />} />
        <Route path="/Galeria" element={<Gallery />} />
        <Route path="/Uprawa-paulowni" element={<Cultivation />} />
        <Route path="Kalkulator" element={<Calculator />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
