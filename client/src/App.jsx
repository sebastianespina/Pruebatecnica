import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; 
import {BlogsPage} from './pages/BlogsPage'
import {BlogFormPage} from './pages/BlogFormPage'
import { Navigation } from "./components/Navigation";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
    <div className="container mx-auto">
    <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to={"/blog"}/>}/>
        <Route path="/blog" element={<BlogsPage />}/>
        <Route path="/blog-create" element={<BlogFormPage/>}/>
        <Route path="/blog/:id" element={<BlogFormPage/>}/>


      </Routes>
      <Toaster/>
    </div>
    </BrowserRouter>
  )
}

export default App;