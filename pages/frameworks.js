import React from 'react';
import { Player } from 'video-react';
import PropTypes from 'prop-types';
import BasicLayout from '../components/Layouts';
import Body from '../components/Body';
import { P, Wrapper } from '../components/Theme';
import templates from '../data/templates';
import 'video-react/dist/video-react.css';
import Hero from '../components/Hero';
import FrameworksList from '../components/FrameworksList';
import PageNotFound from '../components/404';

const Frameworks = ({ framework }) => {
  if (!framework) {
    return <PageNotFound />;
  }

  const { title, subTitle, category, body, video } = framework;

  return (
    <BasicLayout title="MURAL - Frameworks">
      <Wrapper>
        <Hero title={title} text={subTitle} />
        <P textAlign="center" fontSize={[0, 2]} color="#f06">
          #{category}
        </P>
        <Body content={body} />
        <Wrapper maxWidth={680} m={['20px auto']}>
          <Player>
            <source src={`https:${video}`} />
          </Player>
        </Wrapper>
        <Wrapper m={['50px auto 30px']}>
          <P textAlign="center" fontSize={[0, 3]}>
            Frameworks
          </P>
          <FrameworksList flexWrap={['wrap', 'wrap', 'nowrap']} />
        </Wrapper>
      </Wrapper>
    </BasicLayout>
  );
};

Frameworks.propTypes = {
  framework: PropTypes.shape({})
};

function getFramework(category, slug) {
  const frameworks = templates.results;
  const framework = frameworks.find(f => f.category.toLowerCase() === category && f.slug === slug);

  return framework;
}

Frameworks.getInitialProps = ({ query, res }) => {
  const { category, slug } = query;
  const framework = getFramework(category, slug);

  if (!framework && res) {
    res.statusCode = 404;
  }

  return { framework };
};

export default Frameworks;
