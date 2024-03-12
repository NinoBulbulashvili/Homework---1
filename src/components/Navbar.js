import React from 'react';
import styled from 'styled-components';
import logoImage from '../boston.png'; 

const NavbarContainer = styled.nav`
  position: fixed;
  background-color: #fff;
  color: #000;
  padding: 20px 0;
  width: 100%;
  border-bottom: 2px solid #18171c;
`;

const NavbarContent = styled.div`
max-width: 1200px;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Logo = styled.img`
  width: 150px; 
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
`;

const NavLink = styled.li`
  margin-right: 20px;
  font-size: 16px;
  font-weight: bold;
`;  

const ContactButton = styled.button`
  background-color: #f7af24;
  color: #212121;
  padding: 12px 28px;
  font-size: 16px;
  font-weight: bold;
  border-color: #18171c;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
        <div>
      <NavbarContent>
        <Logo src={logoImage} alt="Logo" />
        <NavLinks>
          <NavLink>HOME</NavLink>
          <NavLink>SERVICES</NavLink>
          <NavLink>SKILLS</NavLink>
          <NavLink>PORTFOLIO</NavLink>
          <NavLink>CONTACT</NavLink>
        </NavLinks>
        <ContactButton>Contact Now</ContactButton>
        </NavbarContent>
        </div>
    </NavbarContainer>
  );
};

export default Navbar;
