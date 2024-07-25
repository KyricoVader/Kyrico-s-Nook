import React, {useState} from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import hljs from 'highlight.js';
import 'react-markdown-editor-lite/lib/index.css';
import 'highlight.js/styles/github.css';
import './Markdown.css'

const mdParser = new MarkdownIt({
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return '<pre class="hljs"><code>' +
                    hljs.highlight(lang, str, true).value +
                    '</code></pre>';
            } catch (__) {}
        }
        return '<pre class="hljs"><code>' + mdParser.utils.escapeHtml(str) + '</code></pre>';
    }
});

const MarkdownEditor = ({ TextChange }) => {

    const [value, setValue] = useState('');
    const handleEditorChange = ({ text }) => {
        setValue(text);

        const preview = mdParser.render(text)
        TextChange(preview);
    };

    return (
        <div className="md-editor">
            <MdEditor
                value={value}
                className="md-editor"
                renderHTML={(text) => mdParser.render(text)}
                onChange={handleEditorChange}
                customRenderers={{
                    code: (props) => {
                        return (
                            <pre>
                                <code
                                    className={`language-${props.language}`}
                                    dangerouslySetInnerHTML={{ __html: props.value }}
                                />
                            </pre>
                        );
                    }
                }}
            />
        </div>
    );
}

export default MarkdownEditor;
