import { useEffect, useState } from 'react';
import { getAllProjects } from '../api/projects.api.js'
import { ProjectCard } from './ProjectCard.jsx';

export function ProjectList() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function loadProjects() {
      const response = await getAllProjects();
      setProjects(response.data);
    }
    loadProjects();
  }, []);

  return <div className='grid grid-cols-3 gap-3'>
    {projects.map(project => (
      <ProjectCard key={project.id} project={project} />
    ))}
  </div>;
}