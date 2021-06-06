import { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';

interface Props {
  placeholder?: string;
  name?: string;
  value?: string;
  errorMessage?: string;
  onChange?: (event: FormEvent) => void;
  onSelect?: (event: FormEvent) => void;
  content: any;
}

const StyledInput = styled.input`
  height: 30px;
  border: 2px solid transparent;
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.3);
  outline: none;
  padding: 10px 20px;
  font-size: 17px;
  transition: 0.15s;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  &:hover {
    background-color: ${({ theme }) => theme.palette.common.white};
  }
  &:focus {
    background-color: ${({ theme }) => theme.palette.common.white};
  }
  ::placeholder {
    color: black;
    opacity: 1;
  }
`;

const StyledErrorText = styled.span`
  height: 20px;
  margin: 5px 0px 0px 20px;
  color: #a32424;
`;

const StyledErrorTextEmpty = styled.span`
  height: 20px;
  margin: 5px 0px 0px 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

export default function TvfInput({
  placeholder,
  onChange,
  onSelect,
  content,
}: Props) {
  return (
    <Wrapper>
      <StyledInput
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onSelect}
      />
      {content ? (
        <StyledErrorText>{content}</StyledErrorText>
      ) : (
        <StyledErrorTextEmpty> </StyledErrorTextEmpty>
      )}
    </Wrapper>
  );
}
