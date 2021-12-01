import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:projectId" element={<ProjectDetails />} />

          <Route path="*" element={<main style={{ padding: "1rem" }}><p>404 Nothing Found</p></main>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
