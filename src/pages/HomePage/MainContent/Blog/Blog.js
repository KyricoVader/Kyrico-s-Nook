import React from 'react';
import './Blog.css';
// import Reading from "./Reading";
import ArticleCatalog from "./ArticleCatalog";
// import Markdown from "./Markdown";

function Blog() {
    return (
        <div className="blog">
            {/*<Reading/>*/}
            <ArticleCatalog/>
            {/*<Markdown/>*/}
        </div>
    );
}

export default Blog;
