import "swiper/css";
import "swiper/css/free-mode";

import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import DetailPopular from "./components/Detaill/DetailPopular";
import DetailContinue from "./components/Detaill/DetailContinue";
import DetailAllMovies from "./components/Detaill/DetailAllmovies";
import { useEffect } from "react";
import Search from "./components/pages/Search";
export default function App() {
  useEffect(()=>{

  })
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route  path="/register" element={<Register />}></Route>

        <Route path="/home" element={<Home />}></Route>
        <Route path="/popular/:popularId" element={<DetailPopular/>}></Route>
        <Route path="/continue/:continueId" element={<DetailContinue/>}></Route>
        <Route path="/allmovie/:allmovieId" element={<DetailAllMovies/>}></Route>
        <Route path="/search" element={<Search/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
