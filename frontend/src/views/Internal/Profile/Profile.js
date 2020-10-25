import React from "react";
import styled from "styled-components";

import ProfileInfo from "./ProfileInfo";
import {retrieveUserInfo} from "../../../api/profileRetrieval";
import { useQuery } from '@apollo/client';

function Profile() {
    const {loading, error, data} = useQuery(retrieveUserInfo);

    if (loading) return 'Loading...';
  
    if (error) return `Error! ${error.message}`;

    const userInfo = {
        fname: data.me.firstName,
        lname: data.me.lastName,
        email: data.me.email,
        createdOn: data.me.createdAt,
    }
    return(
        <div class = "container">
            <Box>
                <h1> Your Profile <i class="fas fa-user"></i></h1>
                <Line />
                <div class = "row">
                    <div class = "col-4">
                        <div class = "row justify-content-center">
                            <Pic/>
                        </div>
                        <div class = "row justify-content-center">
                            <Upload>Upload</Upload>
                        </div>
                    </div>
                    <div class = "col-8">
                        <ProfileInfo {...userInfo} />
                    </div>
                </div>
            </Box>
        </div>
    );
}
const Line = styled.hr`
    border-radius: 3px;
    background-color: #6173db;
    border: 2px solid #6173db;
`;

const Box = styled.div`
    margin-top: 10px;
    border-radius: 3px;
    background-color: #f0f0f0;
    padding: 10px;
`;
const Upload = styled.button`
    background-color: #6173db;
    color: white;
    width: 75%;
    padding-top: 5px;
    padding-bottom: 5px;
    border: None;
    border-radius: 2px;
`
const Pic = styled.div`
    background-image: url("https://cdn.pixabay.com/photo/2019/07/30/05/53/dog-4372036_1280.jpg");
    padding-top: 50%;
    width: 50%;
    margin: 20px;
    background-size: 200%;
    background-position: center;
    border-radius: 100%;
`;
export default Profile;