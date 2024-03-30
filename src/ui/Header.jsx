import styled from "styled-components";
import { Logout } from "../features/authentication/Logout";

const StyledHeader = styled.header`
  background: #ffffff;
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid #f8f9fa;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Logout />
    </StyledHeader>
  );
}
