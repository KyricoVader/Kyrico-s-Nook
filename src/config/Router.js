// RouterView.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "../pages/HomePage/HomePage";
import Blog from "../pages/HomePage/MainPage/Blog/Blog";
import ArticleCatalog from "../pages/HomePage/MainPage/Blog/ArticleCatalog";
import Reading from "../pages/HomePage/MainPage/Blog/Reading";
import Editors from "../pages/HomePage/MainPage/Editors/Editors";

function RouterView() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}>
                    <Route path="" element={<Blog/>}>
                        <Route path="reading" element={<Reading/>} />

                        <Route path="article" element={<ArticleCatalog/>} />
                        <Route path="learning" element={<ArticleCatalog/>} />
                        <Route path="search" element={<ArticleCatalog/>} />
                        <Route path="informatics/*" element={<ArticleCatalog/>} />
                    </Route>
                    <Route path="editor" element={<Editors/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default RouterView;
