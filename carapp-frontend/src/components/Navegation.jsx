import { Link } from 'react-router-dom';

export function Navegation() {
  return (
    <div className='flex justify-between py-3'>
      <Link to="/projects"><h1 className='font-bold text-3xl mb-4'>Project App</h1></Link>
      <button className='bg-indigo-500 px-3 py-2 rounded-lg'>
        <Link to="/projects/new">Create Project</Link>
      </button>
    </div>
  );
}