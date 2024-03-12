import React from "react";
import styled from 'styled-components';
import facebook from '../facebook.png';
import instagram from '../instagram.png';
import twitter from '../twitter.png';
import linkedin from '../linkedin.png';

const FooterContainer = styled.footer`
  background-color: #fff;
  color: #000;
  padding: 30px 0;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const SocialNetworks = styled.div`
  display: flex;
  align-items: center;
`;

const SocialIcon = styled.img`
  height: 20px;
  width: auto;
  margin-right: 20px;
`;

const CopyrightText = styled.p`
  font-size: 14px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
      <SocialNetworks>
          <SocialIcon src={facebook} alt="Facebook" />
          <SocialIcon src={linkedin} alt="LinkedIn" />
          <SocialIcon src={instagram} alt="Instagram" />
          <SocialIcon src={twitter} alt="Twitter" />
        </SocialNetworks>
        <CopyrightText>© 2024 copyright. All rights reserved.</CopyrightText>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
