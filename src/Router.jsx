import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import Subscribe from './pages/Subscribe/Subscribe';
import Detail from './pages/Detail/Detail';
import Payment from './pages/Payment/Payment';
import MyPage from './pages/MyPage/MyPage';
import LectureVideo from './pages/LectureVideo/LectureVideo';
import CreatorCenter from './pages/CreatorCenter/CreatorCenter';
import Main from './pages/Main/Main';

const Router = () => {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/creatorcenter" element={<CreatorCenter />} />
        <Route path="/lecturevideo" element={<LectureVideo />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default Router;
