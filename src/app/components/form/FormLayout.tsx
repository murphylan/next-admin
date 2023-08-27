import useAuth from '@/app/hooks/useAuth';
import { account } from '@/appwrite/config';
import { ID } from 'appwrite';
import { useRouter } from 'next/navigation';
import React from 'react';

type Props = {
  children: React.ReactNode;
  name?: string;
  email: string;
  password: string;
  formType: string;
};

enum FormType {
  LOGIN = 'LOGIN',
  SIGNUP = 'SIGNUP',
}

const FormLayout = ({ children, name, email, password, formType }: Props) => {
  const auth = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (formType === FormType.LOGIN) {
        const response = await account.createEmailSession(email, password);
        auth.dispatch({
          type: 'LOGIN',
          payload: { email: response.providerUid },
        });
      }

      if (formType === FormType.SIGNUP) {
        const response = await account.create(
          ID.unique(),
          email,
          password,
          name
        );
        auth.dispatch({
          type: 'LOGIN',
          payload: { email: response.email, name: response.name },
        });
      }

      router.push('/profile');
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <form
      className='border border-rose-700 w-96 flex flex-col gap-y-8 p-4 mx-auto my-8'
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  );
};

export default FormLayout;
