import { useEffect, useState } from "react"
import { getAllBlog } from '../api/blog.api'
import { BlogCard } from './BlogCard';

export function BlogList() {
  const [blog, setBlog] = useState ([]);

  useEffect(() => {    
    async function loadBlog() {
      const res = await getAllBlog()
      setBlog(res.data);
    }
    loadBlog();
 }, []);

return <div className="grid grid-cols-3 gap-3">
   {blog.map(blog => (
     <BlogCard key={blog.id} blog={blog}/>
    ))}
</div>;
  
}
