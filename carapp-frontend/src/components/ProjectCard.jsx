import { useNavigate } from "react-router-dom";

export function ProjectCard({ project }) {
  const navigate = useNavigate();

  return (
    <div className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer" onClick={() => {
      navigate(`/projects/${project.id}`);
    }}>
        <h1 className="font-bold uppercase">{project.title}</h1>
        <p className="text-slate-400">{project.description}</p>
        <p className="text-slate-400">{project.technology}</p>
    </div>
  );
}