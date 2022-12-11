import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './component/header/Header'
import Home from './component/home/Home';
import Classes from './component/classes/Classes';
import About from './component/about/About';
import Changes from './component/ready changes/Changes';
import Footer from './component/footer/Footer';
import Signup from "./component/acount/Signup";
import Login from "./component/acount/Login";
import Priceandplans from './component/price and plans/Priceandplans'
import AllClasses from "./component/classes/AllClasses";
import Schedule from "./component/schedule/Schedule";
import { ToastContainer } from "react-toastify";
import Workout from "./component/personal workout/Workout";
import Details from "./component/detail/detail";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Classes />
              <About />
              <Changes />
            </>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/price" element={<Priceandplans />} />
          <Route path="/classes" element={<AllClasses />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/workout" element={<Workout />} />
          <Route path="/detail:matchid" element={<Details />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}
export default App;
