import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import AdminApp from './admin/AdminApp';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/root/*" element={<AdminApp />} />
      </Routes>
    </BrowserRouter>
  );
}
