import styled from "styled-components";
import { groupData } from "./TodoList"; // Assuming groupData is exported from a separate file
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  margin-left: 16px;
  margin-right: 16px;
`;

const RadioButton = styled.button`
  width: 80px;
  padding: 8px 16px;
  border-radius: 32px;
  margin: 8px;
  border: 1px solid #ccc;
  background-color: ${({ select }) => (select ? "#6200ea" : "white")};
  color: ${({ select }) => (select ? "white" : "grey")};
`;

export function RadioButtonGroup({selectType ,onSelectChange}) {


  function handleSelectChange(value) {
    onSelectChange(value);
  }

  return (
    <ButtonGroup>
      {groupData.map((item) => (
        <RadioButton
          key={item.value}
          select={selectType === item.value}
          onClick={() => handleSelectChange(item.value)}
        >
          {item.label}
        </RadioButton>
      ))}
    </ButtonGroup>
  );
}
