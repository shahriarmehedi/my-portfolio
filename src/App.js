import './App.css';
import About from './pages/About/About';
import Banner from './pages/Banner/Banner';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
import Header from './pages/shared/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default App;
