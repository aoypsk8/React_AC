import "swiper/css";
import "swiper/css/free-mode";
import Banner from "./components/Banner";
import Navbar from "./components/pages/Navbar";
import Category from "./components/Category";
import PopularMovie from "./components/PopularMovie";
import ContinueMovie from "./components/Continue";
import AllMovies from "./components/AllMovies";
import Footer from "./components/pages/Footer";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import DetailPopular from "./components/Detaill/DetailPopular";
import DetailContinue from "./components/Detaill/DetailContinue";
import DetailAllMovies from "./components/Detaill/DetailAllmovies";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route  path="/register" element={<Register />}></Route>

        <Route path="/home" element={<Home />}></Route>
        <Route path="/popular/:popularId" element={<DetailPopular/>}></Route>
        <Route path="/continue/:continueId" element={<DetailContinue/>}></Route>
        <Route path="/allmovie/:allmovieId" element={<DetailAllMovies/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
