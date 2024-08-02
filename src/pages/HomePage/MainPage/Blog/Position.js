import './Position.css';
import { webPagePath } from "../../../../config/Mock";
import {Link, useNavigate} from "react-router-dom";
import writing from "../../../../assets/编辑撰写_writing-fluently.svg";
import React from "react";

function Position(){
    const lastPathElement = webPagePath.slice(-1)[0];
    const navigate = useNavigate();

    const addNewArticle = () => {
        // 在此处添加处理逻辑
        console.log("Add new article clicked");
        navigate("/editor")
    };

    return (
        <div className="position">
            <p className="title">
                <span>{lastPathElement}</span>
            </p>
            <p/> {/*增加间距*/}
            <p className="web-page-path">
                {webPagePath.map((word, index) => (
                    <span key={index} className="web-page-path-item">
                        {
                            index < webPagePath.length - 1
                                ? (
                                    <>
                                        <Link to={word} className="position-link">{word}</Link>
                                        <span className="separator"> / </span>
                                        {/*另一种解决方式*/}
                                        {/*<span>&nbsp;/&nbsp;</span>*/}
                                    </>
                                )
                                : (
                                    <span>{word}</span>
                                )
                        }
                    </span>
                ))}
            </p>
            <div className="writing-container" onClick={addNewArticle}>
                <img src={writing} alt="writing" className="add-new-article" />
            </div>
        </div>
    );
}

export default Position;
