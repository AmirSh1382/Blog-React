import React from 'react';

// Components
import Layout from "./components/layout/Layout"
import HomePage from "./components/home/HomePage"
import Author from './components/author/Author';
import Blog from "./components/blog/Blog"

// React-router-dom
import { Routes, Route, Navigate } from 'react-router-dom';

const App = () => {

  return (
    <Layout>
      <Routes>
        <Route path='/blogs/:blogSlug' element={<Blog /> } />
        <Route path='/authors/:authorSlug' element={<Author />} />
        <Route path='/' element={<HomePage /> } />
        <Route path='/*' element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );

};

export default App;