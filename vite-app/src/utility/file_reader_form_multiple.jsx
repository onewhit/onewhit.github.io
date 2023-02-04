import React, { useState } from 'react';

const FileReaderFormMultiple = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    setFiles(event.target.files);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    Array.from(files).forEach(async (file) => {
      const fileReader = new FileReader();
      fileReader.onload = (event) => {
        const fileContent = event.target.result;
        const lines = fileContent.split('\n');
        lines.forEach((line) => {
          console.log(line);
        });
      };
      fileReader.readAsText(file);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" multiple onChange={handleFileChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FileReaderFormMultiple;