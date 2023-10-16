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
import TestMain from './pages/TestMain';
import TestDetail from './pages/TestDetail';
import TestResult from './pages/TestResult';
import RecPlacePage from './pages/RecPlacePage';
import MyPosts from './pages/MyPosts';
import Notice from './pages/Notice';

import Place1 from './pages/Place1';
import Place2 from './pages/Place2';
import Place3 from './pages/Place3';
import Place4 from './pages/Place4';
import Place5 from './pages/Place5';
import Place6 from './pages/Place6';
import Place7 from './pages/Place7';
import Place8 from './pages/Place8';
import Place9 from './pages/Place9';
import Place10 from './pages/Place10';
import Place11 from './pages/Place11';

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
                <Route path="testMain" element={<TestMain />} />
                <Route path="testDetail" element={<TestDetail />} />
                <Route path="testResult" element={<TestResult />} />
                <Route path="recommendPlace" element={<RecPlacePage />} />
                <Route path="myPosts" element={<MyPosts />} />
                <Route path="notice" element={<Notice />} />
                <Route path="detailPetAPI" element={<DetailPetAPI />} />
                <Route path="photoAPI" element={<PhotoAPI />} />
                <Route path="place1" element={<Place1 />} />
                <Route path="place2" element={<Place2 />} />
                <Route path="place3" element={<Place3 />} />
                <Route path="place4" element={<Place4 />} />
                <Route path="place5" element={<Place5 />} />
                <Route path="place6" element={<Place6 />} />
                <Route path="place7" element={<Place7 />} />
                <Route path="place8" element={<Place8 />} />
                <Route path="place9" element={<Place9 />} />
                <Route path="place10" element={<Place10 />} />
                <Route path="place11" element={<Place11 />} />
                <Route path="*" element={<NoPage />} />
                <Route path="/auth/kakao/callback" element={<KakaoRedirectHandler />} />
              </Route>
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </BrowserRouter>
    </div>
  );
}

export default App;