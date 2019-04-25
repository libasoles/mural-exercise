import React from 'react';
import Link from 'next/link';
import BasicLayout from './Layouts';
import { A, P, Wrapper } from './Theme';
import Hero from './Hero';

const PageNotFound = () => {
  return (
    <BasicLayout title="MURAL">
      <Hero title="¯\_(ツ)_/¯" text="Page not found" />

      <Wrapper>
        <P textAlign="center" fontSize={[0, 1]} color="#f06" mb={[2, 4]}>
          <Link href="/">
            <A textAlign="center">Continue...</A>
          </Link>
        </P>
      </Wrapper>
    </BasicLayout>
  );
};

export default PageNotFound;
