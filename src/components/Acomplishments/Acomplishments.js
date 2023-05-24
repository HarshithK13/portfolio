import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 2022, text: "PR Team Assistant Head at Varchas'22 (Annual Sports fest of IIT Jodhpur)"},
  { number: 2022, text: "ATS Team Assistant Head at Varchas'22 (Annual Sports fest of IIT Jodhpur)"},
  { number: 2022, text: "Tech Events Core Member at Prometeo'22 (Annual Tech fest of IIT Jodhpur)"},
  { number: 2021, text: "Class Representative of Artificial Intelligence and Data Science, Batch of 2024", },
  { number: 2021, text: "Core member in Literature Club", },
  { number: 2021, text: "Core member in Sangam (Music club of IIT Jodhpur)", },
];

const Acomplishments = () => (
  <Section id="accomplishments">
    <SectionTitle>Extracurriculars</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
