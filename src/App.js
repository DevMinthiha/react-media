import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./Admin/Admin";
import AddCat from "./Admin/category/AddCat";
import AllCat from "./Admin/category/AllCat";
import EditCat from "./Admin/category/EditCat";
import AddPost from "./Admin/post/AddPost";
import AllPost from "./Admin/post/AllPost";
import EditPost from "./Admin/post/EditPost";
import AddTag from "./Admin/tag/AddTag";
import AllTag from "./Admin/tag/AllTag";
import EditTag from "./Admin/tag/EditTag";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RouteGuard from "./components/RouteGuard";
import CatPage from "./pages/CatPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import PostDetail from "./pages/PostDetail";
import Register from "./pages/Register";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/catpage" element={<CatPage />} />
        <Route path="/detail/:id" element={<PostDetail />} />
        <Route
          path="/admin"
          element={
            <RouteGuard>
              <Admin />
            </RouteGuard>
          }
        >
          <Route path="cats">
            <Route path="all" element={<AllCat />} />
            <Route path="add" element={<AddCat />} />
            <Route path="edit/:id" element={<EditCat />} />
          </Route>
          <Route path="tags">
            <Route path="all" element={<AllTag />} />
            <Route path="add" element={<AddTag />} />
            <Route path="edit/:id" element={<EditTag />} />
          </Route>
          <Route path="posts">
            <Route path="all" element={<AllPost />} />
            <Route path="add" element={<AddPost />} />
            <Route path="edit/:id" element={<EditPost />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
