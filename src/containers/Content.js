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
    margin: "24px 48px 24px 48px",       //上右下左，顺时针
    padding: "16px",
    boxSizing: "border-box",
};