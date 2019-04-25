import React from 'react';
import { Link } from '../routes';
import { A, P, FlexWrapper, Wrapper } from './Theme';
import templates from '../data/templates';

const FrameworksList = ({ ...rest }) => {
  const frameworks = templates.results;

  return (
    <FlexWrapper
      flexWrap={['wrap']}
      alignItems={['stretch']}
      alignContent={['space-around']}
      {...rest}
    >
      {frameworks.map(framework => {
        const { category, slug, title } = framework;
        const categoryKeyname = category.toLowerCase();

        return (
          <Wrapper key={framework.slug} width={[1, 1 / 3, 1 / 3]}>
            <P>#{category}</P>
            <Link
              route="frameworks"
              params={{
                category: categoryKeyname,
                slug
              }}
            >
              <A textAlign="center">{title}</A>
            </Link>
            <P>{framework.subTitle}</P>
          </Wrapper>
        );
      })}
    </FlexWrapper>
  );
};

export default FrameworksList;
