import './App.css'
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <div className="content">
        <Header />
      </div>
      <div className="footer mt-3">
        <Footer />
      </div>
    </>
  );
}

export default App;
