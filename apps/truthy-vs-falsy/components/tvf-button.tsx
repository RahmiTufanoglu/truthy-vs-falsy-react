import { ReactChildren, ReactNode, useState } from 'react';
import styled, { ThemeProps } from 'styled-components';

export interface Props {
  children: ReactNode;
  active?: boolean;
}

const StyledButton = styled.button<{ active?: boolean }>`
  height: 50px;
  width: 250px;
  border: none;
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  font-size: 20px;
  color: ${(props) =>
    props.active
      ? props.theme.palette.primary.contrastText
      : props.theme.palette.common.black};
  background-color: ${(props) =>
    props.active
      ? props.theme.palette.primary.main
      : props.theme.palette.grey.medium};
  opacity: ${(props) => (props.active ? 1 : 0.2)};
  transition: 0.15s ease-in-out;
  &:hover {
    background-color: ${(props) =>
      props.active
        ? props.theme.palette.primary.light
        : props.theme.palette.grey.medium};
    transform: ${(props) => (props.active ? 'scale(1.02)' : 'none')};
  }
`;

export default function TvfButton({ children, active }: Props) {
  //const [active, setActive] = useState(active);

  return <StyledButton active={active}>{children}</StyledButton>;
}
