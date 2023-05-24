import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey! Welcome To <br />
          My Personal Portfolio :)
        </SectionTitle>
        <SectionText>
        Exploring the Intersection of AI and Data Science!
        </SectionText>
        <Button onClick={()=>window.location= 'https://drive.google.com/file/d/1j2D1RGkVszh8G-OBVEXGl1AdlT-KaFJs/view?usp=share_link'}>Here's my Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;