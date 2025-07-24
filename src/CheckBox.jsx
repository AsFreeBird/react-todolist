import styled from "styled-components";

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid #999;
  border-radius: 4px;
  position: relative;
  cursor: pointer;

  &:checked {
    background-color: #6200ea;
    border-color: #6200ea;
  }

  &:checked::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: translate(-50%, -50%) rotate(45deg);
  }
`;