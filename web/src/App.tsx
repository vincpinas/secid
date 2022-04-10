import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './Scss/App.scss'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Containers/Home/Home';
import Register from './Containers/Register/Register';
import NotFound from './Containers/NotFound/NotFound';
import Login from './Containers/Login/Login';
import { checkLocation } from './Components/Helpers';

function App() {
  let location = useLocation();
  useEffect(() => {
    document.title = checkLocation(location.pathname)
  }, [location])
  const [user, setUser] = useState({
    id: null, username: '',
    email: '', profileImg: null,
    isLoggedIn: false, token: {},
    created_at: '', updated_at: '',
  });

  return (
    <>
      <Header user={user} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register user={user} setUser={setUser} />} />
        <Route path='/login' element={<Login user={user} setUser={setUser} />} />
        <Route path='/404' element={<NotFound />} />
        <Route path='*' element={<Navigate to='/404' replace />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
