import React from 'react';
import './Reading.css';
import {articleFooter} from "../../../../config/Mock";
import {Link} from "react-router-dom";

function Reading() {
    const handleButtonClick = (functionName) => {
        switch(functionName) {
            case 'deleted':
                deleted();
                break;
            case 'edit':
                edit();
                break;
            // Add more cases as needed
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

    return (
        <div className="reading">
                <div className="article">
                     <div className="article-info">
                         <span>作者：朱七</span>
                         <span>创建时间：2012-7-12 19：53</span>
                    </div>
                    <p>之前首次介绍神经网络时，我们关注的是具有单一输出的线性模型。在这里，整个模型只有一个输出。注意，单个神经网络（1）
                        接受一些输入；（2）生成相应的标量输出；（3）具有一组相关参数（parameters），更新这些参数可以优化某目标函数。</p>
                    <p>然后，当考虑具有多个输出的网络时，我们利用矢量化算法来描述整层神经元。像单个神经元一样，层（1）接受一组输入，
                        （2）生成相应的输出，（3）由一组可调整参数描述。当我们使用softmax回归时，一个单层本身就是模型。然而，即使我们随后引
                        入了多层感知机，我们仍然可以认为该模型保留了上面所说的基本架构。</p>
                    <p>对于多层感知机而言，整个模型及其组成层都是这种架构。整个模型接受原始输入（特征），生成输出（预测），并包含一些参数
                        （所有组成层的参数集合）。同样，每个单独的层接收输入（由前一层提供），生成输出（到下一层的输入），并且具有一组可调参数，
                        这些参数根据从下一层反向传播的信号进行更新。</p>
                    <p>事实证明，研究讨论“比单个层大”但“比整个模型小”的组件更有价值。例如，在计算机视觉中广泛流行的ResNet-152架构就有数百层
                        ，这些层是由层组（groups of layers）的重复模式组成。这个ResNet架构赢得了2015年ImageNet和COCO计算机视觉比赛
                        的识别和检测任务 (He et al., 2016)。目前ResNet架构仍然是许多视觉任务的首选架构。在其他的领域，如自然语言处理和
                        语音，层组以各种重复模式排列的类似架构现在也是普遍存在。</p>
                    <p>为了实现这些复杂的网络，我们引入了神经网络块的概念。块（block）可以描述单个层、由多个层组成的组件或整个模型本身。
                        使用块进行抽象的一个好处是可以将一些块组合成更大的组件，这一过程通常是递归的，如图5.1.1所示。通过定义代码来按需生成
                        任意复杂度的块，我们可以通过简洁的代码实现复杂的神经网络。</p>
                    <p>从编程的角度来看，块由类（class）表示。它的任何子类都必须定义一个将其输入转换为输出的前向传播函数，并且必须存储任何必
                        需的参数。注意，有些块不需要任何参数。最后，为了计算梯度，块必须具有反向传播函数。在定义我们自己的块时，由于自动微分
                        （在2.5节中引入）提供了一些后端实现，我们只需要考虑前向传播函数和必需的参数。</p>
                    <div className="article-footer">
                        <div>
                            <span>修改于：2012-7-12 19：53</span>
                        </div>
                        <div className="article-action">
                            {articleFooter.map((item, index) => (
                                <Link to={item.link} className="article-footer-link" key={index} onClick={() => handleButtonClick(item.function)}>
                                    <img src={item.icon} alt={`Article ${index + 1}`} className="article-footer-icon" />
                                    <span className="article-footer-title">{item.title}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="toc">
                    <h2>目录</h2>
                    <ul>
                        <li><a href="src/containers#section1">介绍神经网络</a></li>
                        <li><a href="src/containers#section2">多层感知机</a></li>
                        <li><a href="src/containers#section3">神经网络块</a></li>
                        <li><a href="src/containers#section4">复杂的网络</a></li>
                        <li><a href="src/containers#section5">总结</a></li>
                    </ul>
                </div>
        </div>
    );
}

export default Reading;
