import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ProjectDisplay from './components/Portfolio/projectDisplay';

function App() {
  return (
    <>
      <Routes>
        <Route path="/react_portfolio/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/react_portfolio/about" element={<About />} />
          <Route path="/react_portfolio/portfolio" element={<Portfolio />} />
          <Route path="/react_portfolio/project/:id" element={<ProjectDisplay />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
