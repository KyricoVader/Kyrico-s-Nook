import code from "../assets/代码_code.svg";
import communication from "../assets/沟通_communication.svg";
import book from "../assets/书籍-打开_book-open.svg";
import chart from "../assets/折线图_chart-line.svg";
import document from "../assets/文档详情_doc-detail.svg";
import video from "../assets/视频_video-two.svg";
import config from "../assets/配置_config.svg";
import me from "../assets/我的_me.svg";
import avatar from "../assets/avatar.jpg";
// import hamburgerIcon from "../assets/汉堡图标_hamburger-button.svg";
import toggle from "../assets/汉堡图标_hamburger-button.svg";
import engilsh from "../assets/英文_english.svg";
import translate from "../assets/翻译_translate.svg";
import message from "../assets/已读邮件_mail-open.svg";
import create from "../assets/时间_time.svg";
import PDF from "../assets/pdf文件_file-pdf-one.svg";
// import write from "../assets/编辑撰写_writing-fluently.svg";
import share from "../assets/分享_share-one.svg";
// import more from "../assets/更多_more.svg";
import deleted from "../assets/删除5_delete-five.svg";
import lastTime from "../assets/刷新_refresh.svg";
// import view from "../assets/预览-打开_preview-open.svg";
import edit from "../assets/编辑2_edit-two.svg"

// 侧边栏菜单数组列表
export const menuList = [
    {
        icon: code,
        title: 'Informatics',
        subMenu: [
            { title: 'Tutorials' , router:'/informatics/tutorials'},
            { title: 'Bugs' , router:'/informatics/bugs'},
            { title: 'Notes' , router:'/informatics/notes'},
        ]
    },
    { icon: communication, title: 'Chatting' , router:'/chatting'},
    { icon: book, title: 'Learning' , router:'/learning'},
    { icon: chart, title: 'Data Analysis' , router:'/analysis'},
    { icon: document, title: 'Articles' , router:'/article'},
    { icon: video, title: 'Movies' , router:'/movies'},
    { icon: config, title: 'Setting' , router:'/setting'},
    { icon: me, title: 'Profile' , router:'/profile'},
];

export const articles = [
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
];

export const articleFooter = [
    { icon: create, title: 'January 8, 2024', link: '/home-page', function:'' },
    // { icon: lastTime, title: 'January 8, 2024', link: '/home-page', function: '' },
    // { icon: deleted, title: '删除', link: '/home-page', function: 'delete' },
    // { icon: edit, title: '编辑', link: '/home-page', function: 'edit' },
    { icon: PDF, title: '导出', link: '/home-page', function: 'PDF' },
    { icon: share, title: '分享', link: '/home-page', function: 'share' },
];

export const webPagePath = [
    "disk", "folder", "file", "UIC怎么样？这所学校出国留学人多不多？"
];

export const navbarMenu = [toggle,engilsh,translate,message];