import ButtonIcon from "../../ui/ButtonIcon";
import { IoLogOutOutline } from "react-icons/io5";
import { KosnneReact } from "./KosnneReact";
import SpinnerMini from "../../ui/SpinnerMini";
export function Logout() {
  const { logout, isLoading } = KosnneReact();
  return (
    <ButtonIcon onClick={logout}>
      {!isLoading ? <IoLogOutOutline /> : <SpinnerMini />}
    </ButtonIcon>
  );
}
