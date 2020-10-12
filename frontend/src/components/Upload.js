import React, { useState } from "react";
import styled from "styled-components";

import axios from "axios";
import { uploadSubmissionFile } from "../api/fileUpload";

function Upload({ label, ...rest }) {
  const [state, setState] = useState();

  const handleChange = (event) => {
    setState({
      //Passes the selected file to the STATE
      file: event.target.files[0],
      loaded: 0,
    });
  };

  const handleClick = () => {
    const data = new FormData();
    var url = "";
    data.append("file", state.file); //our selected file data

    // url = getPresignedUpload() //change to make api call from backend to getPresigned URL
    console.log(url);
    axios
      .post(url, data, {}) //Send Post with endpoint URL and our form data with our file in it
      .then((res) => console.log(res.statusText)); //then we print the response status
  };

  const uploadFile = () => {
    uploadSubmissionFile({
      course: "test",
      assignment: "test2",
      submission: "test3",
      file: "test4",
    });
  };

  return (
    //Code modified from https://bootsnipp.com/snippets/DOXy4
    <div {...rest}>
      <FileInput className="files">
        <Label>{label}</Label>
        <input
          type="file"
          name="file"
          className="form-control"
          onChange={handleChange}
        />
      </FileInput>
    </div>
  );
}

const Label = styled.label`
  text-transform: capitalize;
  margin-bottom: 4px;
  font-size: 0.9rem;
  color: grey;
`;

const FileInput = styled.div`
  margin-bottom: 0.7rem;
`;

export default Upload;
