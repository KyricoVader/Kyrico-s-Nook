function Content(){
    return(
        <div style={content}>

        </div>
    );
}

export default Content;

const content = {
    // wordWrap: "break-word", // 文字自动换行
    // height: "calc(100vh - 264px - 64px - 16px)", // 确保content的初始高度符合要求
    flex: 1,
    overflowY: "auto",
    background: "#ffffff",
    margin: "0px 64px 24px 64px",       //上右下左，顺时针
    padding: "16px",
    boxSizing: "border-box",
    zIndex: 1,
    boxShadow: "2px 2px 15px 5px rgba(21, 61, 119, 0.07)",//水平偏移量 垂直偏移量 模糊半径 扩散半径 颜色
};