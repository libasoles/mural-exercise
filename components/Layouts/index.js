import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import theme from '../../libraries/theme';

import Baseline from '../../libraries/global-styles';

class BasicLayout extends React.PureComponent {
  render() {
    const { title, children } = this.props;
    return (
      <>
        <Head>
          <title>{title}</title>
        </Head>

        <Baseline />

        <ThemeProvider theme={theme}>
          <>
            {children}
            <Baseline />
          </>
        </ThemeProvider>
      </>
    );
  }
}

BasicLayout.propTypes = {
  children: PropTypes.object.isRequired,
  theme: PropTypes.string,
  title: PropTypes.string
};

export default BasicLayout;
