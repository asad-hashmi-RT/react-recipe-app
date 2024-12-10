import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Recipes from '../components/Recipes';
import Recipe from '../components/Recipe'
import NewRecipe from '../components/NewRecipe'
import EditRecipe from '../components/EditRecipe'
import Signup from '../components/Signup';
import Login from '../components/Login';
import Logout from '../components/Logout';
import ProtectedRoute from '../components/ProtectedRoute'; // Import ProtectedRout

export default (
  <Router>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/recipes' element={<Recipes/>} />
      <Route path='/recipe/:id' element={<Recipe/>} />
      <Route path='/recipe' element={<NewRecipe/>} />
      <Route path='edit/recipe/:id' element={<EditRecipe/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/logout" element={<Logout/>} />
    </Routes>
  </Router>
);