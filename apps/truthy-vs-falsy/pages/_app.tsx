import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import './styles.css';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../theme';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Welcome to truthy-vs-falsy!</title>
      </Head>
      <div className="app">
        {/*
        <header className="flex">
          <h1>Welcome to truthy-vs-falsy!</h1>
        </header>
        */}
        <ThemeProvider theme={lightTheme}>
          <main>
            <Component {...pageProps} />
          </main>
        </ThemeProvider>
      </div>
    </>
  );
};

export default App;
