import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
      background-color: aliceblue;
    `}

${(props) =>
    props.as === "h3" &&
    css`
      font-size: 1.8rem;
      font-weight: bold;
      text-align: center;
    `}

${(props) =>
    props.as === "h4" &&
    css`
      font-size: 0.8rem;
      font-weight: 500;
    `}
`;
export default Heading;
