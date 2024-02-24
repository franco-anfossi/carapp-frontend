import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { createProject, deleteProject, updateProject, getProject } from "../api/projects.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-hot-toast';

export function ProjectFormPage() {

  const {register, handleSubmit, formState: { errors }, setValue } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async data => {
    if (params.id) {
      await updateProject(params.id, data);
      toast.success('Project updated');
    }
    else {
      await createProject(data);
      toast.success('Project created');
    }
    navigate('/projects');
  });

  useEffect(() => {
    async function loadProject() {
      if (params.id) {
        const {data} = await getProject(params.id);
        setValue('title', data.title);
        setValue('description', data.description);
        setValue('technology', data.technology);
      }
    }
    loadProject();
  }, []);

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit}>
        <input className="bg-zinc-700 p-3 rounded-lg block w-full mb-3" type="text" placeholder="Title" {...register("title", { required: true })} />
        {errors.title && <span>This field is required</span>}
        <textarea className="bg-zinc-700 p-3 rounded-lg block w-full mb-3" rows="3" placeholder="Decription" {...register("description", { required: true })}></textarea>
        {errors.description && <span>This field is required</span>}
        <input className="bg-zinc-700 p-3 rounded-lg block w-full mb-3" type="text" placeholder="Technology" {...register("technology", { required: true })} />
        {errors.technology && <span>This field is required</span>}
        <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">Save</button>
      </form>
      { params.id && (
        <div className="flex justify-end">
          <button className="bg-red-500 p-3 rounded-lg w-48 mt-3" onClick={async () => {
            const accepted = window.confirm("Are you sure?");
            if (accepted) {
              await deleteProject(params.id);
              toast.success('Project deleted');
              navigate('/projects');
            }
          }}>Delete</button> 
        </div>
      )}
    </div>
  );
}