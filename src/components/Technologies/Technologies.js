import React from 'react';
import { DiFirebase, DiJavascript, DiMongodb, DiMysql, DiPhp, DiPython, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Skills and Education</SectionTitle>
    <SectionText>
    Throughout my undergraduate studies, I have been actively engaged in exploring Machine Learning, through courses like Deep learning and Dependable Artificial Intelligence. I've also done some research and work in web development as a personal interest. I have gained hands-on experience with various tools and frameworks such as Javascript, Leaflet, Python, PyTorch, and scikit-learn, through personal projects, internships and coursework. I've worked as a summer intern at the Indian Institute of Science Bangalore (IISc) in 2022 and am currently working as a summer intern at the Indian Institute of Technology Jodhpur. As I approach the final year of my undergraduate studies, I am eager to explore research opportunities that will allow me to further deepen my expertise in Machine Learning. I am open to connecting with professionals, researchers, and fellow enthusiasts who share similar interests. Whether it's discussing sharing insights, or collaborating on projects, I believe in the power of networking and continuous learning.
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>Javascript</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Python</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>C++</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Matlab</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Latex</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>MongoDB</ListTitle>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
