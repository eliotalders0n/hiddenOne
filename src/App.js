import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Details from './pages/details';
import Home from './pages/home';
import Layout from './pages/layout';
import Profile from './pages/profile';
import Projects from './pages/file';

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="Profile" element={<Profile />} />
          <Route path="Details" element={<Details />} />
          <Route path="Projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}