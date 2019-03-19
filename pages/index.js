import React from 'react';
import BasicLayout from '../components/Layouts';
import { P, Wrapper } from '../components/Theme';
import Hero from '../components/Hero';

export default () => (
  <BasicLayout title="MURAL">
    <Hero
      title="Think and collaborate visually. Anywhere, anytime."
      text="Digital workspaces for visual collaboration, inspiration and innovation anytime, anywhere, on any device"
    />

    <Wrapper>
      <P textAlign="center" fontSize={[0, 1]} color="#f06" mb={[2, 4]}>
        Start a free trial now
      </P>
    </Wrapper>

    <Wrapper>
      <img src="https://mural.co/static/videos/home.jpg" alt="MURAL" />
    </Wrapper>
  </BasicLayout>
);
