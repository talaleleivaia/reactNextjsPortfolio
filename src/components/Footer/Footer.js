import React from 'react';
import { AiFillBehanceSquare, AiFillLinkedin } from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa';
import { SiFiverr } from "react-icons/si";

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:talaleleivaia@gmail.com">talaleleivaia@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>It's a Great Life We live</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/talaleleivaia">
            <FaGithubSquare size = "3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/talalelei-vaiaoga-201685186">
            <AiFillLinkedin size = "3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.behance.net/talaleleiv1242">
            <AiFillBehanceSquare size = "3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.fiverr.com/talaleleivaia">
            <SiFiverr size = "3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
