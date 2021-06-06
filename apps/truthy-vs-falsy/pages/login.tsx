import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import styled from 'styled-components';
import TvfButton from '../components/tvf-button';
import TvfTextArea from '../components/tvf-textarea';
import Image from 'next/image';
import TvfCheckbox from '../components/tvf-checkbox';
import Link from 'next/link';
import TvfLogo from '../components/tvf-logo';
import TvfFooter from '../components/tvf-footer';
import useOnSubmit from '../hooks/use-on-submit';

const StyledLoginWrapper = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  border: none;
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  padding: 30px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  & > :not(:last-child) {
    margin-bottom: 20px;
  }
  & > :nth-child(5) {
    margin: 20px 0 40px 0;
  }
  & > :nth-child(6) {
    margin-bottom: 40px;
  }
`;

const StyledBackgroundWrapper = styled.div`
  * {
    z-index: -1;
  }
`;

const EmailWrapper = styled.div`
  width: 100%;
`;

const StyledPasswordRow = styled.div`
  display: flex;
  width: 100%;
  * {
    flex: 1 auto;
    &:not(:last-of-type) {
      margin-right: 20px;
    }
  }
`;

const Divider = styled.div`
  border-top: 1px solid ${({ theme }) => theme.palette.grey.medium};
  width: 100%;
`;

const StyledText = styled.a`
  cursor: pointer;
  text-align: center;
  font-size: 17px;
  color: ${(props) => props.theme.palette.common.white};
  font-weight: bold;
  margin-top: -20px;
`;

const StyledPrivacyLink = styled.a`
  color: ${(props) => props.theme.palette.accent.soft};
  text-decoration: underline;
  cursor: pointer;
`;

export interface FormValueProps {
  email: string;
  password: string;
  confirmPassword: string;
  isTermAccepted?: boolean;
}

export interface HelperTextProps {
  email: string;
  password: string;
  confirmPassword: string;
  isTermAccepted?: boolean;
}

export default function Login() {
  const [formValues, setFormValues] = useState<FormValueProps>({
    email: '',
    password: '',
    confirmPassword: '',
    isTermAccepted: false,
  });

  const [helperText, setHelperText] = useState<HelperTextProps>({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const { postFormData, loading, status } = useOnSubmit({
    url: 'http://' || '',
    formValues,
  });

  const onSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const { email, password, confirmPassword, isTermAccepted } = formValues;

      console.log(email, password, confirmPassword, isTermAccepted);

      if (email && password && confirmPassword && isTermAccepted) {
        await postFormData();
      }

      setIsSubmitted(true);
    },
    [postFormData, formValues]
  );

  const handleOnChange = () => {
    return setFormValues({
      ...formValues,
      isTermAccepted: !formValues.isTermAccepted,
    });
  };

  function handleEmailValidation(): void {
    const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regEmail.test(formValues.email)) {
      helperText.email = 'Email failed';
    } else {
      helperText.email = '';
    }
  }

  function handlePasswordValidation(): void {
    const regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;

    if (!regPassword.test(formValues.password)) {
      helperText.password = 'Password failed';
    } else {
      helperText.password = '';
    }
  }

  function handleConfirmPasswordValidation(): void {
    if (formValues.password !== formValues.confirmPassword) {
      helperText.confirmPassword = 'Password not same';
    } else {
      helperText.confirmPassword = '';
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <StyledLoginWrapper>
        <TvfLogo />
        <EmailWrapper>
          <TvfTextArea
            placeholder="Email"
            name="email"
            value={formValues.email}
            content={helperText.email}
            onChange={(event: FormEvent) => {
              return setFormValues({
                ...formValues,
                email: (event.target as HTMLSelectElement).value,
              });
            }}
            onSelect={(event: FormEvent) => {
              handleEmailValidation();
              return setFormValues({
                ...formValues,
                email: (event.target as HTMLSelectElement).value,
              });
            }}
          />
        </EmailWrapper>
        <StyledPasswordRow>
          <TvfTextArea
            placeholder="Password"
            name="password"
            content={helperText.password}
            onChange={(event: FormEvent) => {
              return setFormValues({
                ...formValues,
                password: (event.target as HTMLSelectElement).value,
              });
            }}
            onSelect={(event: FormEvent) => {
              handlePasswordValidation();
              return setFormValues({
                ...formValues,
                password: (event.target as HTMLSelectElement).value,
              });
            }}
          />
          <TvfTextArea
            placeholder="Confirm password"
            name="confirmPassword"
            content={helperText.confirmPassword}
            onChange={(event: FormEvent) => {
              return setFormValues({
                ...formValues,
                confirmPassword: (event.target as HTMLSelectElement).value,
              });
            }}
            onSelect={(event: FormEvent) => {
              handleConfirmPasswordValidation();
              return setFormValues({
                ...formValues,
                confirmPassword: (event.target as HTMLSelectElement).value,
              });
            }}
          />
        </StyledPasswordRow>
        <TvfCheckbox handleOnChange={handleOnChange}>
          By creating an account you are agreeing to our
          <Link href="/privacy">
            <StyledPrivacyLink> Terms and Conditions </StyledPrivacyLink>
          </Link>
          and Privacy Policy.
        </TvfCheckbox>
        <TvfButton active={false}>Login</TvfButton>
        <Divider />
        <Link href="/login">
          <StyledText>Already have an account?</StyledText>
        </Link>
      </StyledLoginWrapper>
      <StyledBackgroundWrapper>
        <Image
          src="/bg-image.jpg"
          alt=""
          layout="fill"
          objectFit="cover"
          objectPosition="50% 50%"
        />
      </StyledBackgroundWrapper>
      <TvfFooter />
    </form>
  );
}
