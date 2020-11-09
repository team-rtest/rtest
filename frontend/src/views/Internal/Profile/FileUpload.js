import { useQuery } from "@apollo/client";
import axios from "axios";
import React from "react";
import styled from "styled-components";
import { getProfilePicUploadUrl } from "../../../api/profileRetrieval";

// This is honestly just a POC. In the future switch to something like react-dropzone

function FileUpload({ id }) {
  const { loading, error, data } = useQuery(getProfilePicUploadUrl);
  if (loading) {
    return "Loading...";
  }

  if (error) {
    return `Error! ${error.message}`;
  }

  var selectedFile;

  const onFileChange = (event) => {
    selectedFile = event.target.files[0];
  };

  const onFileUpload = async () => {
    const renamedFile = new File([selectedFile], id, {
      type: selectedFile.type,
    });
    console.log(renamedFile);
    await axios.put(data.getPropicUrl, renamedFile, {
      headers: { "Content-Type": "" },
    });
    console.debug("File uploaded successfully");
  };

  return (
    <div class="row justify-content-center">
      <input type="file" onChange={onFileChange} />
      <Upload onClick={onFileUpload}>Upload</Upload>
    </div>
  );
}

const Upload = styled.button`
  background-color: #6173db;
  color: white;
  width: 75%;
  padding-top: 5px;
  padding-bottom: 5px;
  border: None;
  border-radius: 2px;
`;

export default FileUpload;
