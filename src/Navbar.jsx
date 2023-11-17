import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [burgerMenuVisible, setBurgerMenuVisible] = useState(false);

  const toggleBurgerMenu = () => {
    setBurgerMenuVisible(!burgerMenuVisible);
  };

  return (
    <NavContainer>
      <WebsiteTitle>
        <NavLink to=":">
          <p>The Verse</p>
        </NavLink>
      </WebsiteTitle>

      <BurgerMenu onClick={toggleBurgerMenu}>
        <Span />
        <Span />
        <Span />
      </BurgerMenu>

      <NavItems isVisible={burgerMenuVisible}>
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
            <NavLink to="/digitalexperiences">
              Games / Digital Experiences
            </NavLink>
          </li>
          <li>
            <NavLink to="/trygame">Try Games</NavLink>
          </li>
        </ul>
      </NavItems>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;
  padding-right: 3rem;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #212529;
  height: 4rem;
`;

const WebsiteTitle = styled.div`
  font-size: 1.3rem;

  a {
    text-decoration: none;
    color: white;
  }
`;

const BurgerMenu = styled.div`
  @media (max-width: 950px) {
    gap: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

const Span = styled.div`
  @media (max-width: 950px) {
    height: 3px;
    width: 35px;
    background: white;
    border-radius: 10px;
  }
`;

const NavItems = styled.div`
  ul {
    display: flex;
    flex-direction: center;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    gap: 2rem;
  }

  @media (max-width: 950px) {
    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      list-style-type: none;
      gap: 2rem;
      height: 20rem;
    }
  }

  li {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #d3d3d4;
  }

  .active {
    color: white;
    font-weight: 600;
  }

  @media (max-width: 950px) {
    display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #212529;
    z-index: 1;
    flex-direction: column;
  }
`;

export default Navbar;
