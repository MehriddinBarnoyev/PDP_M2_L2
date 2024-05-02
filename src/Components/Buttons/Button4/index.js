import styled from "styled-components";
import PreviewButton from "../Button2";

const QuestionButton = styled(PreviewButton)`
  background-color: white;
  border: 1px black solid;
  color: black;
  border-radius: 10px;
  padding-left: 70px;
  padding-right: 70px;
  transition: 0.3ms;
  &:hover {
    background-color: #754ffe;
    color: white;
  }
`;
export default QuestionButton;