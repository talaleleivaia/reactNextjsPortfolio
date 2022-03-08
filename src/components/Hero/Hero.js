import React from 'react';

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
        I can build dynamic websites that showcase my passion for launching cool stuff.
      </SectionText>
      <Button onClick = {() => window.location = "https://google.com" }>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;