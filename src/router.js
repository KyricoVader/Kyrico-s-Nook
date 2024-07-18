import React from 'react';
import {BrowserRouter, Routes, Route,} from 'react-router-dom';        //导入路由的库元素组件
import HomePage from "./pages/HomePage";

function RouterView() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}>
            {/*        <Route path="list" element={<ArticleLists />} />*/}
            {/*        <Route path="body" element={<ArticleBody />} />*/}
                </Route>
            {/*    <Route path="/editor" element={<ArticleEditor />} />*/}
            </Routes>
        </BrowserRouter>
    );
}



export default RouterView;