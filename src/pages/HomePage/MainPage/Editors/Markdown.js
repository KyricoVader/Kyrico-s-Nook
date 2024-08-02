// MarkdownEditor.js
import React, { useState } from 'react';
import MarkdownIt from 'markdown-it';
import './Markdown.css'
import 'highlight.js/styles/github.css'; // 选择你喜欢的样式
import 'react-markdown-editor-lite/lib/index.css';
import MdEditor from 'react-markdown-editor-lite';

import markdownItHighlightjs from 'markdown-it-highlightjs';
import label from "../../../../assets/下_down.svg";

const mdParser = new MarkdownIt().use(markdownItHighlightjs);

const MarkdownEditor = () => {
    const [value, setValue] = useState('');

    const handleEditorChange = ({ text }) => {
        setValue(text);
    };

    return (
        <div className="md-editor">
            <MdEditor
                value={value}
                className="md-editor"
                renderHTML={(text) => mdParser.render(text)}
                onChange={handleEditorChange}
            />
            <div className='article-label'>
                <img src={label} alt="sending" className="label-icon-editor" />
                <span>标签：</span>
                <div className="label-list">
                    <span className="label-item">#开源</span>
                    <span className="label-item">#技术</span>
                    <span className="label-item">#学习</span>
                </div>
            </div>
        </div>
    );
};

export default MarkdownEditor;