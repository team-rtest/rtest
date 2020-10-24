import React from "react";
import styled from "styled-components";

function ProfileInfo({ fname, lname, email, createdOn, ...rest }) {
  return (
    <div>
      <div class="row">
        <div class="col">
          <Description>First Name</Description>
          <Entry>{fname}</Entry>
        </div>
        <div class="col">
          <Description>Last Name</Description>
          <Entry>{lname}</Entry>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <Description>Email</Description>
          <Entry>{email}</Entry>
        </div>
        <div class="col">
          <Description>Created On</Description>
          <Entry>{createdOn}</Entry>
        </div>
      </div>
    </div>
  );
}
const Description = styled.p`
  @media (min-width: 544px) {
    font-size: 1.15rem;
  }
  @media (min-width: 768px) {
    font-size: 1.3rem;
  }
  margin-top: 10px;
  padding-bottom: 0px;
  margin-bottom: 0px;
  font-weight: bold;
`;
const Entry = styled.p`
  @media (min-width: 544px) {
    font-size: 1rem;
  }
  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
  margin: 0px;
`;
export default ProfileInfo;
