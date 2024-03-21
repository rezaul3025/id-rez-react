import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './sections/Header';
import Home from './pages/Home';
import Album from './pages/Album';
import MyFavourites from './pages/MyFavourites';


function App() {
  return (
    <div className="md:container md:mx-auto items-center space-x-1 bg-slate-50">
      <BrowserRouter >
        <Header />
        <main className="px-6 py-4 h-screen">
          <Routes>
            <Route index element={<Home />} />
            <Route path="album" element={<Album />} />
            <Route path="my-fav" element={<MyFavourites />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
