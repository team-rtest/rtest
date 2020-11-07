import React from "react";
import styled from "styled-components";

function ReviewTable({labels, data}){
    console.log(data);
    return(
        <ReviewT>
        <ReviewThead>
        <Rtr>
            {labels.map((l)=>{return(<Rth>{l}</Rth>);})}
        </Rtr>
        </ReviewThead>
            <ReviewTbody>
            {data[0].map((a, i) => <Rtr>{data.map((d) => <Rtd>{d[i]}</Rtd>)}</Rtr>)}
            </ReviewTbody>
        </ReviewT>
    );
}

const ReviewT = styled.table`
  margin-top: 35px;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
`;

const ReviewThead = styled.thead`
  background: #6173db;
  color: white;
`;

const ReviewTbody = styled.tbody`
  background: #f0f1ff;
`;

const Rtr = styled.tr`
  height: 40px;
`;

const Rtd = styled.td`
  border-top: 3px solid white;
  padding: 10px;
`;

const Rth = styled.th`
  padding: 10px;
`;
export default ReviewTable;