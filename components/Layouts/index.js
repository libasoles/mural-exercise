import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Link from 'next/link';
import theme from '../../libraries/theme';
import Baseline from '../../libraries/global-styles';
import { Logo } from '../Theme';

class BasicLayout extends React.PureComponent {
  render() {
    const { title, children } = this.props;
    return (
      <>
        <Link href="/">
          <Logo width="200px" />
        </Link>

        <Head>
          <title>{title}</title>
          <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
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
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  theme: PropTypes.string,
  title: PropTypes.string
};

export default BasicLayout;
