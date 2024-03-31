import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";

const StyledHeader = styled.header`
  background: #ffffff;
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid #f8f9fa;
`;

export default function Header() {
  return (
    <StyledHeader>
      <HeaderMenu />
    </StyledHeader>
  );
}
