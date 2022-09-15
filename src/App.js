import './scss/app.scss';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import MainLayout from './layouts/MainLayout';
import { Suspense } from 'react';
const Cart = React.lazy(() => import(/*webpackChunkName:"Cart"*/ './components/Pages/Cart'));
const NotFound = React.lazy(() =>
  import(/*webpackChunkName:"NotFound"*/ './components/Pages/NotFound'),
);
const AboutPizza = React.lazy(() =>
  import(/*webpackChunkName:"AboutPizza"*/ './components/Pages/AboutPizza'),
);
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="cart/*"
          element={
            <Suspense fallback={<div>Загрузка...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Загрузка...</div>}>
              <NotFound />
            </Suspense>
          }
        />
        <Route
          path="pizza/:id"
          element={
            <Suspense fallback={<div>Загрузка...</div>}>
              <AboutPizza />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
