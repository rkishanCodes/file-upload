import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploadedUrl, setUploadedUrl] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
    setUploadedUrl(null);
    setMessage("");
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setMessage(res.data.msg); 

      if (file.type.startsWith("image/")) {
        setUploadedUrl(res.data.url); 
      } else {
        setUploadedUrl(null); 
      }
    } catch (error) {
      console.error("Upload error:", error.response?.data || error.message);
      setMessage("Upload failed. Please try again.");
    }
  };

  return (
    <div>
      <h2>File Upload</h2>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={handleFileChange} />
        {preview && (
          <div>
            {file.type.startsWith("image") && (
              <img src={preview} alt="Preview" style={{ maxWidth: "300px" }} />
            )}
            {file.type.startsWith("video") && (
              <video
                controls
                src={preview}
                style={{ maxWidth: "300px" }}
              ></video>
            )}
            {file.type === "application/pdf" && (
              <iframe
                src={preview}
                style={{ width: "300px", height: "500px" }}
              ></iframe>
            )}
            {file.type.startsWith("audio") && (
              <audio controls src={preview}></audio>
            )}
          </div>
        )}
        <button type="submit">Upload</button>
      </form>

      {message && ( 
        <div>
          <p>{message}</p>
          {uploadedUrl && ( 
            <a href={uploadedUrl} target="_blank" rel="noopener noreferrer">
              View Uploaded Image
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default FileUpload;
