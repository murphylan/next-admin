'use client';
import { useState } from 'react';
import FormLayout from './components/form/FormLayout';
import Login from './components/form/Login';
import Signup from './components/form/Signup';
import useAuth from './hooks/useAuth';

export default function Home() {
  const [form, setForm] = useState('LOGIN');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = useAuth();

  console.log(auth);

  return (
    <div>
      <h1 className='text-4xl font-bold'>Context API w/ Next.js</h1>

      <FormLayout name={name} email={email} password={password} formType={form}>
        {form === 'LOGIN' && (
          <Login
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            setForm={() => setForm('SIGNUP')}
          />
        )}

        {form === 'SIGNUP' && (
          <Signup
            name={name}
            email={email}
            password={password}
            setName={setName}
            setEmail={setEmail}
            setPassword={setPassword}
            setForm={() => setForm('LOGIN')}
          />
        )}
      </FormLayout>
    </div>
  );
}
