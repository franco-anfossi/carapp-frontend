import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ProjectPage } from './pages/ProjectPage';
import { ProjectFormPage } from './pages/ProjectFormPage';
import { Navegation } from './components/Navegation';
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navegation />
        <Routes>
            <Route path="/" element={<Navigate to="/projects" />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/projects/new" element={<ProjectFormPage />} />
            <Route path="/projects/:id" element={<ProjectFormPage />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App
