import Nav from "./components/Nav";
import MainContainer from "./components/MainContainer";
import "./index.css";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div id="container">
        <Nav />

        <MainContainer />

        <Footer/>
        
      </div>
    </>
  );
}

export default App;
