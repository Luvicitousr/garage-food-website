import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />
      <Hero />
      <About />
      <Menu />
      <Location />
      <Footer />
    </div>
  );
}

export default App;