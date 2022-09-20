import styled from "styled-components";

export const TodoFormStyle = styled.div`
  width: 100%;
  padding-bottom: 3rem;

  input {
    width: 85% !important;
    font-size: 1.4rem;
    font-family: "noto";
  }

  .enr_form {
    padding-top: 2rem;
  }

  input::placeholder {
    color: rgba(255, 255, 255, .5);
  }

  .important_list {
    padding-top: 1.2rem;
  }
`;