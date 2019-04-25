import React from 'react';
import PropTypes from 'prop-types';
import BasicLayout from '../components/Layouts';
import { P, Wrapper } from '../components/Theme';
import Hero from '../components/Hero';
import useServiceWorker from '../libraries/serviceWorker/useServiceWorker';
import FrameworksList from '../components/FrameworksList';

const Home = ({ resources }) => {
  useServiceWorker(resources);

  return (
    <BasicLayout title="MURAL">
      <Hero
        title="Think and collaborate visually. Anywhere, anytime."
        text="Digital workspaces for visual collaboration, inspiration and innovation anytime, anywhere, on any device"
      />

      <Wrapper m={['0 auto 40px']}>
        <FrameworksList />
      </Wrapper>

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
};

Home.propTypes = {
  resources: PropTypes.array
};

Home.getInitialProps = async () => {
  if (!process.browser) {
    /* eslint global-require: 1 */
    const resources = require('../libraries/serviceWorker/resourcesList').default;
    return resources;
  }

  return { resources: [] };
};

export default Home;
