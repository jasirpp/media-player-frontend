import LandingPages from "./pages/LandingPages";
import Home from "./pages/Home";
import WatchHistory from "./pages/WatchHistory";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<LandingPages/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/history" element={<WatchHistory/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
