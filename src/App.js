import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddBlog from "./components/AddBlog/AddBlog";
import CreateBlogForm from "./components/CreateBlogForm/CreateBlogForm";
import Navbar from "./components/NavBar/Navbar";
import BlogPage from "./pages/BlogPage";

import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs/:id" element={<BlogPage/>}/>
        </Routes>
        <AddBlog/>
        <CreateBlogForm/>
      </BrowserRouter>
    </div>
  );
}

export default App;
