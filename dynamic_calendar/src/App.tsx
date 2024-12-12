import Calendar from './components/Calendar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<Calendar />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
