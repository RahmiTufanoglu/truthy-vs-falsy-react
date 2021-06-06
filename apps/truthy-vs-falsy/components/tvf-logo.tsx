import styled from 'styled-components';
import logo from '../public/tvf-logo.svg';

interface Props {
  width?: string;
  height?: string;
}

const StyledLogo = styled.img`
  width: 250px;
  padding: 20px;
`;

const TvfLogo = ({ width, height }: Props) => {
  return <StyledLogo src={logo} alt="" />;
};

export default TvfLogo;
