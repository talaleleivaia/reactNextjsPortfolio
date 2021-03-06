import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import { SiAdobe } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id = "tech">
    <SectionDivider/> <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies within the world of web development.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size = "3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js | 
            Three,js | 
            JavaScript | 
            HTML | 
            CSS | 
            SASS |
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size = "3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node | 
            SQL Databases | 
            Flask | 
            JSON | 
            MongoDB | 
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <SiAdobe size = "3rem" />
        <ListContainer>
          <ListTitle>Design</ListTitle>
          <ListParagraph>
            Experience with <br />
            Adobe Photoshop | 
            Adobe Illustrator | 
            Adobe inDesign | 
            Unity | 
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
