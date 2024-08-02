import './TitleInput.css';
import writing from "../../../../assets/编辑撰写_writing-fluently.svg";
import React, { useState } from "react";

function TitleInput() {
    const [selectedMain, setSelectedMain] = useState("");
    const [selectedSub, setSelectedSub] = useState("");
    const [placeholder, setPlaceholder] = useState("请输入标题...");

    //这个数组要从后台获得，不能在前端定义，这里需要修改
    const menu = [
        { title: "Option 1", submenu: [{ title: "SubOption 1-1" }, { title: "SubOption 1-2" }] },
        { title: "Option 2", submenu: [{ title: "SubOption 2-1" }, { title: "SubOption 2-2" }] },
        { title: "Option 3" }
    ];

    const handleMainChange = (event) => {
        setSelectedMain(event.target.value);
        setSelectedSub("");
    };

    const handleSubChange = (event) => {
        setSelectedSub(event.target.value);
    };

    const addNewArticle = () => {
        // 在此处添加处理逻辑
        console.log("Add new article clicked");
    };

    const selectedMainMenuItem = menu.find(item => item.title === selectedMain);

    return (
        <div className="title-input">
            <input
                className='title'
                placeholder={placeholder}
                onFocus={() => setPlaceholder('')}
                onBlur={() => setPlaceholder('请输入标题...')}
            />
            <p/> {/* 增加间距 */}
            <div className='article-class-fiction'>
                <select value={selectedMain} onChange={handleMainChange}>
                    <option value="" disabled>Select Main Option</option>
                    {menu.map((item, index) => (
                        <option key={index} value={item.title}>{item.title}</option>
                    ))}
                </select>
                {selectedMainMenuItem && selectedMainMenuItem.submenu && (
                    <select value={selectedSub} onChange={handleSubChange}>
                        <option value="" disabled>Select Sub Option</option>
                        {selectedMainMenuItem.submenu.map((subItem, index) => (
                            <option key={index} value={subItem.title}>{subItem.title}</option>
                        ))}
                    </select>
                )}
            </div>
            <div className="sending-container" onClick={addNewArticle}>
                <img src={writing} alt="sending" className="send-new-article" />
            </div>
        </div>
    );
}

export default TitleInput;
