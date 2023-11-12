import styled from "styled-components"; 
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <NevSection>
        <WebsiteName>
        <NavLink to="/">
            <h1>The Verse</h1>
        </NavLink>
        </WebsiteName>
        <NavItems>
            <ul>
                <li>
                <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                <NavLink to="/about">About</NavLink>
                </li>
                <li>
                <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                <NavLink to="/blog">Blog</NavLink>
                </li>
                <li>
                <NavLink to="/game-experience">Games / Digital Experience</NavLink>
                </li>
                <li>
                <NavLink to="/game">Try Game</NavLink>
                </li>
            </ul>
        </NavItems>
    </NevSection>
  )
}

const NevSection = styled.div`
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    padding-left: 2rem; 
    padding-right: 2rem; 
    height: 3.75rem; 
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: #212529;
`; 
const WebsiteName = styled.div`
    color: white; 

    h1{
        font-size: 1.5rem; 
    }

    a{
        text-decoration: none; 
        color: white; 
    }
`; 

const NavItems = styled.div`
    display: flex; 
    justify-content: center; 
    align-items: center; 
    padding-top: 0.5rem;

    ul {
        list-style-type: none; 
        display: flex; 
        justify-content: center; 
        align-items: center; 
        gap: 2rem; 
        font-size: 1.3rem; 
    }

    li {
        cursor: pointer;
    }

    a{
        text-decoration: none; 
        color: #D3D3D4; 
    }

    .active {
        color: white; 
        font-weight: 600; 
    }
`;


export default Navbar