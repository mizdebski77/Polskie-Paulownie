import { BrowserRouter } from "react-router-dom";
import { Navbar } from "../common/Navbar/navbar";
import { Footer } from "../common/Footer/footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
