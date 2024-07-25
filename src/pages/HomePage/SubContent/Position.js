import './Position.css'

const filePath = ["disk", "/", "folder", "/", "file", "/", "在React中使用CSS的7种方式"];

function Position(){
    return(
            <div className="position">
                <p className="title">
                    <span>在React中使用CSS的7种方式</span>
                </p>
                <p/> {/*增加间距*/}
                <p className="web-page-path">
                    {filePath.map((word, index) => (
                        <span key={index}>
                {word}
                            {index < filePath.length - 1 && " "}
              </span>
                    ))}
                </p>
            </div>
    );
}

export default Position;