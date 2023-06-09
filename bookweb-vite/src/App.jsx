import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import GenrePage from './pages/GenrePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ListCreatePage from './pages/ListCreatePage';
import BookSearch from './components/BookSearch';
import ListPage from './pages/ListPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div>
      <Sidebar />
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/fantasy" element={<GenrePage header="Fantasy"/>} />
          <Route path="/mystery" element={<GenrePage header="Mystery" />} />
          <Route path="/romance" element={<GenrePage header="Romance" />} />
          <Route path="/young-adult" element={<GenrePage header="Young-Adult"/>} />
          <Route path="/nonfiction" element={<GenrePage header="Non-Fiction" />} />
          <Route path="/childrens" element={<GenrePage header="Childrens" />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/makelist" element={<ListCreatePage />} />
          <Route path='/practice' element={<BookSearch />} />
          <Route path='/list/:argument' element={<ListPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// ignore