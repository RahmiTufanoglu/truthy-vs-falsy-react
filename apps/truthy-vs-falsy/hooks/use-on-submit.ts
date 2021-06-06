import axios from 'axios';
import { useCallback, useState } from 'react';
import { FormValueProps } from '../pages/login';

enum StatusTypes {
  Idle = 'idle',
  Pending = 'pending',
  Resolved = 'resolved',
  Rejected = 'rejected',
}

interface Props {
  url: string;
  formValues: FormValueProps;
}

const useOnSubmit = ({ url, formValues }: Props) => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(StatusTypes.Idle);

  const postFormData = useCallback(async () => {
    const { email, password, confirmPassword, isTermAccepted } = formValues;

    setLoading(true);
    setStatus(StatusTypes.Pending);

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    formData.append('passwordConfirm', confirmPassword);
    try {
      const response = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        timeout: 10000,
      });
      if (response.status.toString() === '200') {
        setStatus(StatusTypes.Resolved);
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      setStatus(StatusTypes.Rejected);
    } finally {
      setLoading(false);
    }
  }, [url, formValues]);

  return { postFormData, loading, status };
};

export default useOnSubmit;
