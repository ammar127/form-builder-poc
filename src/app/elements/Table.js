import React from 'react'
import styled from "styled-components";
const Table = styled.table`
  border: 2px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
  border-radius: 4px;
`;
const Tbody = styled.tbody``;
const Tr = styled.tr`
 
  border: 2px solid #ddd;
  padding: .35em;
`;
const Td = styled.td`
  padding: 0.625em;
  text-align: center;
  border: 2px solid #ddd;
`;
const data = [
  { id: 1, name: "Wasif", age: 21 },
  { id: 2, name: "Ali", age: 19 },
  { id: 3, name: "Saad", age: 16 },
  { id: 4, name: "Asad", age: 25 },
];
const Label = styled.label`
  font-size: 14px;
  font-weight: 700;
`;
const Wrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const TableElement = ({rows = data}) => {
    return rows ? (
      <Wrapper>
        <Label>Hello</Label>
        <Table>
          <Tbody>
            {rows.map((student, index) => {
              //  const { id, name, age, email } = student //destructuring
              return (
                <Tr key={index}>
                  {Object.keys(student).map((obj, index) => {
                    return <Td>{student[obj]}</Td>;
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Wrapper>
    ) : null;
}
 