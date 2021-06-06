import { ReactNode, useState } from 'react';
import styled from 'styled-components';

export interface Props {
  children: ReactNode;
  handleOnChange: () => void;
}

const StyledCheckboxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StyledCheckbox = styled.input`
  transform: scale(1.5);
`;

/*const StyledC = styled.input.attrs({ type: 'checkbox' })`
  position: relative;
  left: 15px;
  top: -4px;
  z-index: 0;
  -webkit-appearance: none;
`;*/

const StyledLabel = styled.label`
  font-size: 15px;
  color: #fff;
  width: 90%;
`;

const TvfCheckbox = ({ children, handleOnChange }: Props) => {
  return (
    <StyledCheckboxWrapper>
      <StyledCheckbox type="checkbox" onChange={handleOnChange} />
      <StyledLabel>{children}</StyledLabel>
    </StyledCheckboxWrapper>
  );
};

export default TvfCheckbox;
