import { useNavigate} from 'react-router-dom'

export function BlogCard({blog}) {

  const navigate = useNavigate()

  return (
    <div className="bg-zinc-200 p-3 hover:bg-zinc-400 hover:cursor-pointer"
    
      onClick={() => {
        navigate(`/blog/${blog.id}`)
      }}

    >
         <h1 className="font-bold uppercase">Titulo: {blog.title}</h1>
         <p className='text-slate-900'>Contenido: {blog.content}</p>
         <p>Autor: {blog.author}</p>
         <hr />
     </div>
  ); 
  
}
