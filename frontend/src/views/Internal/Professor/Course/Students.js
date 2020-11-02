import React from "react";
import styled from "styled-components";

function Students({ students }) {
  return (
    <Table>
      <tbody>
        {students &&
          students.map((student) => (
            <Row>
              <BodyCell>
                {student.firstName} {student.lastName}
              </BodyCell>
            </Row>
          ))}
      </tbody>
    </Table>
  );
}

const Table = styled.table`
  width: 100%;
`;

const BodyCell = styled.td`
  border: 1px solid rgb(217, 218, 219);
  padding: 8px 12px;
`;

const Row = styled.tr`
  cursor: pointer;
`;
export default Students;
