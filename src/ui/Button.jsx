import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 500;
    text-align: center;
  `,
  medium: css`
    font-size: 1.2rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.4rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: #ffffff;
    background-color: #007bff;

    &:hover {
      background-color: #0056b3;
    }
  `,
  secondary: css`
    color: #495057;
    background: #ffffff;
    border: 1px solid #ced4da;

    &:hover {
      background-color: #f8f9fa;
    }
  `,
  danger: css`
    color: #ffffff;
    background-color: #dc3545;

    &:hover {
      background-color: #bd2130;
    }
  `,
};

const Button = styled.button`
  border: none;
  border-radius: 0.2rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  cursor: pointer;

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  variation: `primary`,
  size: `medium`,
};

export default Button;
