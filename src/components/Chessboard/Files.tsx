import './Files.css'

export default function Files() {
   let filesArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
   let newFilesArray : JSX.Element[] = [];
    
    filesArray.forEach((file) => {
        newFilesArray.push(<div key={file} className="fileTile">{file}</div>)
    }) 

    return (
        <div className="filesContainer">
            {newFilesArray}
        </div>
    )
}