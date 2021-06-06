import Link from 'next/link';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.common.black};
  * {
    text-decoration: none;
  }
  & > :not(:last-child) {
    margin-right: 80px;
  }
  a {
    color: ${({ theme }) => theme.palette.common.white};
    font-size: 20px;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    padding: 10px;
    transition: 0.5s;
    &:hover {
      background-color: ${({ theme }) => theme.palette.accent.soft};
    }
  }
`;

export default function TvfFooter() {
  return (
    <StyledFooter>
      <Link href="/login">
        <a>Login</a>
      </Link>
      <Link href="/privacy">
        <a>Privacy</a>
      </Link>
      <Link href="/imprint">
        <a>Imprint</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/highscore">
        <a>Highscore</a>
      </Link>
    </StyledFooter>
  );
}
