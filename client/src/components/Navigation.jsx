import {Link} from "react-router-dom"

export function Navigation() {
  return (
    <div className="flex justify-between py-3">
      <Link to="/blog">
        <h1 className="font-bold text-3x1 mb-4">blog app</h1>
      </Link>
      <button className="bg-indigo-500 px-3 py-2 rounded-lg">
      <Link to="/blog-create">Create blog</Link>
      </button>
    </div>
  )
}
