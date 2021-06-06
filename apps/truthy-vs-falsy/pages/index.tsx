import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import TvfButton from '../components/tvf-button';
import React from 'react';
import TvfFooter from '../components/tvf-footer';

const PageWrapper = styled.div``;

const StyledBackgroundWrapper = styled.div`
  * {
    z-index: -1;
  }
`;

const StyledTitle = styled.h1`
  font-size: 50px;
  position: absolute;
`;

const StyledMenuWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  & > :not(:last-child) {
    margin-right: 50px;
  }
`;

const Index = () => {
  return (
    <PageWrapper>
      <StyledMenuWrapper>
        <TvfButton>Start Game</TvfButton>
        <TvfButton>Categories</TvfButton>
        <TvfButton>Highscore List</TvfButton>
      </StyledMenuWrapper>
      <StyledBackgroundWrapper>
        <Image
          src="/bg-image.jpg"
          alt=""
          layout="fill"
          quality="100"
          objectFit="cover"
          objectPosition="50% 50%"
        />
      </StyledBackgroundWrapper>
      <TvfFooter />
    </PageWrapper>
  );
};

export default Index;
