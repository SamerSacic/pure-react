import FileListItem from "./file-list-item/FileListItem";

const FileList = ({ files }) => {
  const fileListItems = files.map((file, index) => (
    <FileListItem key={index} file={file} />
  ));

  return <ul className="list-group">{fileListItems}</ul>;
};

export default FileList;
