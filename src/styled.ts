import styled from "styled-components";

export const TodoListStyle = styled.div`
  @font-face {
    font-family: "noto";
    src: url("../public/font/noto/NotoSansKR-Regular.otf");
  }

  @font-face {
    font-family: "noto_b";
    src: url("../public/font/noto/NotoSansKR-bold.otf");
  }

  @font-face {
    font-family: "gm";
    src: url("../public/font/gm/GmarketSansMedium.otf");
  }

  font-family: "noto", "gm";
  outline: none;
  letter-spacing: -1px;

  width: 100%;
  height: 100vh;
  background: linear-gradient(to right, #f2c2c5, #ae80c7);

  h1,
  h2,
  h3,
  h4,
  h5,
  b {
    font-family: "noto_b";
  }
`;