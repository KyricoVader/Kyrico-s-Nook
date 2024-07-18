import Sidebar from "../containers/Sidebar";
import Navbar from "../containers/Navbar";
import Content from "../containers/Content";

function HomePage(){
    return(
        <div style={body}>
            <div style={topBar}/>
            <Sidebar/>
            <div style={main}>
                <Navbar/>
                <div style={position}></div>
                <Content/>
            </div>
        </div>
    );
}
export default HomePage;

const body = {
    width: "100vw",
    minHeight: "100vh",
    background: "#f4f7fc",
    zIndex: -1,
    position: "relative",
    display: "flex",
    // overflow: "hidden", // 确保body不出现滚动条
};

const topBar = {
    width: "100vw",
    height: "264px",
    background: "#153d77",
    zIndex: -1,
    position: "absolute",
};

const main = {
    width: "calc(100% - 250px)",
    display: "flex",
    flexDirection: "column",
};

const position = {
    height: "64px",
    background: "#8a70e8",
    margin: "48px 48px 12px 48px",      //上右下左，顺时针
    padding: "16px",
}

