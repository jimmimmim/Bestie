import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import NavBar from "./components/NavBar";

import Main from "./pages/Main";
import NoPage from "./pages/NoPage";
import About from './pages/About';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TransitionGroup>
          <CSSTransition timeout={300} classNames="fade">
            <Routes>
              <Route path="/" element={<NavBar />}>
                <Route index element={<Main />} />
                <Route path="main" element={<Main />} />
                <Route path="about" element={<About />} />
                <Route path="*" element={<NoPage />} />
              </Route>
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </BrowserRouter>
    </div>
  );
}

export default App;