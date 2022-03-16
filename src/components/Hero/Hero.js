import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey, <br />
        I'm Talei.
      </SectionTitle>
      <SectionText>
        I build dynamic websites that showcase my passion for launching cool stuff.
      </SectionText>
      <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-35} duration={900}>
        <Button>Learn More</Button>
      </Link>
    </LeftSection>
  </Section>
);

export default Hero;