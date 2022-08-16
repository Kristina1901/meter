import { lazy, Suspense, useState } from 'react';
import cn from 'classnames'
import s from './App.module.css'
import { Routes, Route,  useNavigate, NavLink, Navigate } from 'react-router-dom';
const PeoplePage = lazy(() => import('./PeoplePage/PeoplePage'));
const HomePage = lazy(() => import('./HomePage/HomePage'));

function App() {
  return (
   <div className={s.main}>
   
    <Suspense>
    <div className={s.linkContainer}>
    <div className={s.links}>
    <NavLink
      to="/"
      
    >
      Home
    </NavLink>

    <NavLink
      to="/people"
      
    >
      People
      </NavLink>
      </div>
      </div>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/people" element={<PeoplePage />} />
    <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    </Suspense>
   </div>
  );
}

export default App;
