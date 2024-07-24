import './Position.css'


const title = ["Theme", "Theme", "Theme"];
const filePath = ["disk", "/", "folder", "/", "file"];

function Position(){
    return(
            <div className="position">
                <p className="title">
                    {title.map((word, index) => (
                        <span key={index}>
                {word}
                            {index < title.length - 1 && " "}
              </span>
                    ))}
                </p>
                <p className="file-path">
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