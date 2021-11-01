import FileIcon from "./FileIcon";
import FileName from "./FileName";
import CommitMessage from "./CommitMessage";
import Time from "./Time";

const FileListItem = ({ file }) => {
  return (
    <li className="list-group-item row d-flex align-items-center justify-content-between">
      <div className="col d-flex">
        <FileIcon file={file} />
        <FileName file={file} />
      </div>
      <div className="col-lg-7">
        <CommitMessage message={file.commit.message} />
      </div>
      <div className="col">
        <Time time={file.time} />
      </div>
    </li>
  );
};

export default FileListItem;
