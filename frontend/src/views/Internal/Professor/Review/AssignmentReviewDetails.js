import React, {Component} from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { getAssignment } from "../../../../api/getAssignment";
import ReviewTable from "./ReviewTable.js";
import {useParams} from "react-router-dom";
function AssignmentReviewDetails(){
    const {assignmentId} = useParams();
    const { loading, error, data } = useQuery(getAssignment, {variables:{id: assignmentId},});
    
    if (loading) return "Loading...";

    if (error) return `Error! ${error.message}`;
  
    return(
        <div class = "container">
        <h1>{data.assignment.name}</h1>
        <h2>Peer Grades:</h2>
        <ReviewTable
            labels = {["id", "grade", "comment"]}
            data = {[data.assignment.mySubmission.peerGrades.map((d) => d.grader._id),
                     data.assignment.mySubmission.peerGrades.map((d) => d.grade),
                     data.assignment.mySubmission.peerGrades.map((d) => d.comment)]}/>
        </div>
    );
}
export default AssignmentReviewDetails;