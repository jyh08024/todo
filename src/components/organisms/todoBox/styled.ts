import styled from "styled-components";

export const TodoBoxStyled = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding: 3rem;

  .todoBox {
    width: 49%;
    height: 100%;
    background: #3c424a;
    border-radius: 30px;
  }

  .box_title {
    padding: 3rem;
    text-align: center;
    color: #fff;

    h2 {
      font-size: 3.5rem;
    }

    h4 {
      font-size: 3rem;
      font-family: "Microsoft Phagspa";
    }
  }
`;