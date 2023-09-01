import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import MapPage from './pages/MapPage';
import MyPlace from './pages/MyPlace';
import Profile from './pages/Profile';
import NoPage from "./pages/NoPage";
import DetailPetAPI from "./pages/DetailPetAPI";
import PhotoAPI from "./pages/PhotoAPI";

import KakaoRedirectHandler from './services/KakaoRedirectHandeler';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TransitionGroup>
          <CSSTransition timeout={300} classNames="fade">
            <Routes>
              <Route path="/" element={<NavBar />}>
                <Route index element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="mapPage" element={<MapPage />} />
                <Route path="myPlace" element={<MyPlace />} />
                <Route path="profile" element={<Profile />} />
                <Route path="detailPetAPI" element={<DetailPetAPI />} />
                <Route path="photoAPI" element={<PhotoAPI />} />
                <Route path="*" element={<NoPage />} />
                <Route path="/oauth/callback/kakao" component={KakaoRedirectHandler} />
              </Route>
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </BrowserRouter>
    </div>
  );
}

export default App;