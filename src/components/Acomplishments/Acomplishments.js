import React from 'react';
import { MdPedalBike } from "react-icons/md";

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: '150 miles+', text: 'Fixed Gear Cycling'},
  { number: '9', text: 'Github Repositories', },
  { number: 'inumerable', text: 'hours spent laughing with my wife'},
  { number: '5', text: 'Fiverr Gigs', },
  { number: '80 +', text: 'Playstation Trophies', },
  { number: 'so many', text: 'Recepies baked, cooked, and eaten'},
  { number: '3', text: 'Cats', },
  { number: '1', text: 'Dog', },
];

const Acomplishments = () => (
  <Section>
    <SectionDivider /> <br/>
    <SectionTitle>Interests and Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
