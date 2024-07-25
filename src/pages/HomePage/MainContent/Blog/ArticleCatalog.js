import React, { useState } from 'react';
import './ArticleCatalog.css';
import avatar from '../../../../assets/avatar.jpg';
import hamburgerIcon from '../../../../assets/汉堡图标_hamburger-button.svg';
import { Link } from "react-router-dom";

function ArticleCatalog() {
    const [articles] = useState([
        {
            id: 1,
            title: "UIC怎么样？这所学校出国留学人多不多？",
            author: "作者A",
            summary: "之前首次介绍神经网络时，我们关注的是具有单一输出的线性模型。在这里，整个模型只有一个输出。注意，单个神经网络（1）接受一些输" +
                "入；（2）生成相应的标量输出；（3）具有一组相关参数，更新这些参数可以优化某目标函数。之前首次介绍神经网络时，我们" +
                "关注的是具有单一输出的线性模型。在这里，整个模型只有一个输出。注意，单个神经网络（1）接受一些输入；（2）生成相应的标量输出；（3）" +
                "具有一组相关参数（parameters），更新这些参数可以优化某目标函数。",
            content: "然后，当考虑具有多个输出的网络时，我们利用矢量化算法来描述整层神经元...",
            image: avatar,
            likes: 10,
            comments: 5,
        },
        {
            id: 2,
            title: "多层感知机",
            author: "作者B",
            summary: "之前首次介绍神经网络时，我们关注的是具有单一输出的线性模型。在这里，整个模型只有一个输出。注意，单个神经网络（1）接受一些输" +
                "入；（2）生成相应的标量输出；（3）具有一组相关参数，更新这些参数可以优化某目标函数。之前首次介绍神经网络时，我们" +
                "关注的是具有单一输出的线性模型。在这里，整个模型只有一个输出。注意，单个神经网络（1）接受一些输入；（2）生成相应的标量输出；（3）" +
                "具有一组相关参数（parameters），更新这些参数可以优化某目标函数。",
            content: "然后，当考虑具有多个输出的网络时，我们利用矢量化算法来描述整层神经元...",
            image: "",
            likes: 20,
            comments: 3,
        },
        {
            id: 3,
            title: "多层感知机",
            author: "作者B",
            summary: "之前首次介绍神经网络时，我们关注的是具有单一输出的线性模型。在这里，整个模型只有一个输出。注意，单个神经网络（1）接受一些输" +
                "入；（2）生成相应的标量输出；（3）具有一组相关参数，更新这些参数可以优化某目标函数。之前首次介绍神经网络时，我们" +
                "关注的是具有单一输出的线性模型。在这里，整个模型只有一个输出。注意，单个神经网络（1）接受一些输入；（2）生成相应的标量输出；（3）" +
                "具有一组相关参数（parameters），更新这些参数可以优化某目标函数。",
            content: "然后，当考虑具有多个输出的网络时，我们利用矢量化算法来描述整层神经元...",
            image: avatar,
            likes: 20,
            comments: 8,
        },
        {
            id: 4,
            title: "多层感知机",
            author: "作者B",
            summary: "之前首次介绍神经网络时，我们关注的是具有单一输出的线性模型。在这里，整个模型只有一个输出。注意，单个神经网络（1）接受一些输" +
                "入；（2）生成相应的标量输出；（3）具有一组相关参数，更新这些参数可以优化某目标函数。之前首次介绍神经网络时，我们" +
                "关注的是具有单一输出的线性模型。在这里，整个模型只有一个输出。注意，单个神经网络（1）接受一些输入；（2）生成相应的标量输出；（3）" +
                "具有一组相关参数（parameters），更新这些参数可以优化某目标函数。",
            content: "然后，当考虑具有多个输出的网络时，我们利用矢量化算法来描述整层神经元...",
            image: "",
            likes: 20,
            comments: 3,
        },
    ]);

    const subNavbar = [
        // { icon: hamburgerIcon, title: 'Kyrico', link: '/home-page' },
        { icon: hamburgerIcon, title: 'January 8, 2024', link: '' },
        { icon: hamburgerIcon, title: 'No comment', link: '/home-page' },
    ];

    return (
        <div className="article-catalog">
            <div className="article-catalog-container">
                {articles.map(article => (
                    <div key={article.id} className="catalog">
                        <h3>{article.title}</h3>
                        <div className="catalog-content">
                            {article.image && <img src={article.image} alt="article" className="catalog-image" />}
                            <div className="summary">
                                <div className="summary-text">
                                    <span>{article.author + '：' + article.summary}</span>
                                </div>
                                <div className='article-data'>
                                    {subNavbar.map((item, index) => (
                                        <Link to={item.link} className="article-data-link" key={index}>
                                            {/*<img src={item.icon} alt={`Article ${index + 1}`} className="article-data-icon" />*/}
                                            <span className="article-data-title">{item.title}</span>
                                        </Link>
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
