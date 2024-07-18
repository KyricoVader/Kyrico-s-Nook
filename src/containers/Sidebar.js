function Sidebar(){
    return(
        <div style={sidebar}>
            <div style={brand}></div>
            <div style={user}></div>
        </div>
    );
}

export default Sidebar;

const sidebar = {
    width: "250px",
    minHeight: "100vh",
    background: "pink",
    overflowY: "auto",
    position: "relative",
    wordWrap: "break-word", // 文字自动换行
};
const brand = {
    height: "64px",
    background: "#531ba8",
};
const user = {
    height: "157px",
    background: "#80ee5e"
}