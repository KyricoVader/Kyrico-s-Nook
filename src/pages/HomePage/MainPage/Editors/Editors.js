import React from 'react';
import './Editors.css';
import MarkdownEditor from "./Markdown";
import TitleInput from "./TitleInput";

function Editors() {
    return (
        <div className="editors">
            <TitleInput/>
            <MarkdownEditor/>
        </div>
    );
}

export default Editors;
