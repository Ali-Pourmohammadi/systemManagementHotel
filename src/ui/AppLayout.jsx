import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import styled from "styled-components";
const Main = styled.main`
  background-color: #f2f2f2;
  padding: 4rem 4.8rem 6.4rem;
`;

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 30rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const MainContainer = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
export default function AppLayout() {
  return (
    <>
      <StyledAppLayout>
        <Header />
        <SideBar />
        <Main>
          <MainContainer>
            <Outlet />
          </MainContainer>
        </Main>
      </StyledAppLayout>
    </>
  );
}
