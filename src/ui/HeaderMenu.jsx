import styled from "styled-components";
import { Logout } from "../features/authentication/Logout";
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import ButtonIcon from "./ButtonIcon";
import UserAvatar from "../features/authentication/UserAvatar";

const StyledHeaderMenu = styled.ul`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;
export default function HeaderMenu() {
  const navigate = useNavigate();
  return (
    <StyledHeaderMenu>
      <li>
        <UserAvatar />
      </li>

      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <AiOutlineUser />
        </ButtonIcon>
      </li>

      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
}
