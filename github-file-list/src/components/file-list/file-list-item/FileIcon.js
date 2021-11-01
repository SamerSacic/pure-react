const FileIcon = ({ file }) => {
  const iconType =
    file.type === "folder" ? "fa-folder text-primary" : "fa-file-alt";

  return (
    <div className="me-2">
      <i className={`fas ${iconType}`}></i>
    </div>
  );
};

export default FileIcon;
