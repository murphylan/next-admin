'use client';
import Link from 'next/link';
import React, { MouseEventHandler, useState } from 'react';

type Props = {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setForm: () => void;
};

const Login = ({ email, password, setEmail, setPassword, setForm }: Props) => {
  return (
    <>
      <input
        type='email'
        placeholder='Email'
        className='bg-rose-300/10 p-2'
        value={email}
        onChange={e => setEmail(e.target.value.trim())}
      />
      <input
        type='password'
        placeholder='Password'
        className='bg-rose-300/10 p-2'
        value={password}
        onChange={e => setPassword(e.target.value.trim())}
      />
      <button
        type='submit'
        className='font-bold text-rose-700 border border-red-700 max-w-fit mx-auto py-1 px-4'
      >
        Login
      </button>
      <p className='text-sm'>
        Click{' '}
        <button onClick={() => setForm()}>
          <span className='font-bold text-red-700'>here</span>
        </button>{' '}
        to register!
      </p>
    </>
  );
};

export default Login;
