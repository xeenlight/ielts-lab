import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import Course from './pages/CourseAbout';
import FloatingAlert from './components/FloatingAlert/FloatingAlert';

export default function App() {
  return (
    <BrowserRouter>
          <FloatingAlert />
      <Header />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/course" element={<Course />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}