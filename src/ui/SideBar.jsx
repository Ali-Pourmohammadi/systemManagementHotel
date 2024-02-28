/* eslint-disable react-refresh/only-export-components */
import styled from "styled-components";
import Logo from "./Logo"
import MainNav from "./MainNav";
const StyledSidebar = styled.aside`
background: #ffffff;
    padding: 3.2rem 2.4rem;
    border-right: 1px solid var(--color-grey-0);
    grid-row: 1 / -1;
    display: flex;
    flex-direction: column;
    gap: 3.2 ;

`

export default function SideBar(){
    
    return <StyledSidebar>  
        <Logo/>
        
        <MainNav/>
    </StyledSidebar>
}