import "./reset.scss";
import "./App.scss";

import { Route, Routes } from "react-router-dom";
import React from "react";

import { Layout } from "./components/Layout/Layout";
import { About } from "./pages/About-us";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Category } from "./pages/Category";
import { Recipe } from "./pages/Recipe";
import { Error } from "./pages/Error";




function App() {
  
  return (
    <React.Fragment>
      <Routes basename="/food">
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":name" element={<Category/>}/>
          <Route path="meal/:id" element={<Recipe/>}/>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
