// import Link from 'next/link';
import React from 'react';
import { AiFillBehanceSquare, AiFillLinkedin } from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa';
import { SiFiverr } from "react-icons/si";
import { RiChatSmile2Fill } from 'react-icons/ri';
import { Link, animateScroll as scroll } from "react-scroll";

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href = "/">
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "20px" }}>
          <RiChatSmile2Fill size = "3rem" /> <Span>Talalelei Vaiaoga</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
      <Link
        activeClass="active" to="projects" spy={true} smooth={true} offset={-35} duration={600}>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link activeClass="active" to="tech" spy={true} smooth={true} duration={900}>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
      <Link activeClass="active" to="about" spy={true} smooth={true} duration={900}>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
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
    </Div3>
  </Container>
);

export default Header;
