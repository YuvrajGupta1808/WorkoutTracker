import "./App.css";
import Descrption from "./components/description.tsx";
import Footer from "./components/footer.tsx";
import Navbar from "./components/navbar.tsx";
import Slides from "./components/slides.tsx";

function App() {
  return (
    <>
      <div className="app-container">
        <Navbar />
        <Slides />
        <Descrption />
        <Footer />
      </div>
    </>
  );
}

export default App;
