import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { createblog, deleteblog, updateblog, getblog } from "../api/blog.api";
import { useNavigate, useParams} from 'react-router-dom';
import {toast } from "react-hot-toast";

export function BlogFormPage() {

    const {register, handleSubmit,formState: { errors }, 
    setValue
  } = useForm();
  const navigate = useNavigate()
  const params = useParams()

    const onSubmit = handleSubmit(async data => {
      if (params.id) {
        await updateblog(params.id, data)    
        toast.success('Blog actualizado', {
          position: "bottom center",
          style: {
            background: "red",
            color: "#fff"
          }
        })       
      } else {
        await createblog(data);
        toast.success('Blog creado', {
          position: "bottom center",
          style: {
            background: "red",
            color: "#fff"
          }
        })
      }
      navigate("/blog")
    });

    useEffect(() => {
      async function loadblog() {
        if(params.id) {
          const res = await getblog(params.id)
          setValue('title', res.data.title)
          setValue('content', res.data.content)
          setValue('author', res.data.author)
        }
      }
      loadblog()
    }, [])
    return (
        <div className="max-w-xl mx-auto">
          <form onSubmit={onSubmit} >
            <input
              type="text"
              placeholder="Title"
              {...register("title", { required: true })}
              className="bg-zinc-100 p-3 rounded-lg block w-full mb-3"
            />
    
            {errors.title && <span>This field is required</span>}
    
            <textarea
              placeholder="Content"
              {...register("content", { required: true })}
              className="bg-zinc-100 p-3 rounded-lg block w-full mb-3"
            />
    
            {errors.description && <span>This field is required</span>}

            <textarea
              placeholder="Author"
              {...register("author", { required: true })}
              className="bg-zinc-100 p-3 rounded-lg block w-full mb-3"
            />
    
            {errors.description && <span>This field is required</span>}
    
            <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">
              Save
            </button>
            </form>
            {params.id && (
              <div className="flex justify-end">
                <button className="bg-red-500 p-3 rounded-lg w-48 mt-3" onClick={ async () => {
              const accepted = window.confirm('estas seguro que deseas eliminar')
              if (accepted) {
                await deleteblog(params.id);
                toast.success('blog eliminado', {
                  position: "bottom center",
                  style: {
                    background: "red",
                    color: "#fff"
                  },
                });
                navigate("/blog");
              }
            }}>Delete</button>
              </div>
          )}
          
    </div>
  )
}
