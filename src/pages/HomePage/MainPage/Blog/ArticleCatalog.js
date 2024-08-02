import React, {useState, useEffect} from 'react';
import './ArticleCatalog.css';
import {useNavigate} from "react-router-dom";
import {articleFooter, articles} from "../../../../config/Mock";
import more from "../../../../assets/更多_more.svg";

function ArticleCatalog() {
    const navigate = useNavigate();
    const [activeItemId, setActiveItemId] = useState(null);

    const handleClick = () => {
        navigate('/reading');
    };

    const handleIconClick = (e, id) => {
        e.stopPropagation();
        setActiveItemId(activeItemId === id ? null : id);
    };

    const handleButtonClick = (functionName) => {
        switch(functionName) {
            case 'deleted':
                deleted();
                break;
            case 'edit':
                edit();
                break;
            default:
                console.log('Unknown function');
        }
    };

    const deleted = () => {
        console.log('delete called');
    };

    const edit = () => {
        console.log('edit called');
    };

    useEffect(() => {
        const handleOutsideClick = () => {
            setActiveItemId(null);
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <div className="article-catalog">
            <div className="article-list">
                {articles.map(article => (
                    <div key={article.id} className="list-item">
                        <div className="list-item-title">
                            <h3 onClick={handleClick}>{article.title}</h3>
                            <div className="more-action-container">
                                <div className="more-action" onClick={(e) => handleIconClick(e, article.id)}>
                                    <img src={more} alt="More" className="more-action-icon" />
                                </div>
                                {activeItemId === article.id && (
                                    <div className="action-menu">
                                        <a href="#" onClick={() => handleButtonClick('editArticle')}>编辑</a>
                                        <a href="#" onClick={() => handleButtonClick('deleteArticle')}>删除</a>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="list-item-content">
                            <div className="summary-text" onClick={handleClick}>
                                {article.image && <img src={article.image} alt="article" className="list-item-image" />}
                            </div>
                            <div className="summary">
                                <div className="summary-text">
                                    <span onClick={handleClick}>{article.author + '：' + article.summary}</span>
                                </div>
                                <div className='article-action-bar'>
                                    {articleFooter.map((item, index) => (
                                        <div className="article-footer-link" key={index} onClick={() => handleButtonClick(item.function)}>
                                            <img src={item.icon} alt={`Article ${index + 1}`} className="article-footer-icon" />
                                            <span className="article-footer-title">{item.title}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="label">
                <h2>标签</h2>
                {/* 标签功能实现 */}
            </div>
        </div>
    );
}

export default ArticleCatalog;
