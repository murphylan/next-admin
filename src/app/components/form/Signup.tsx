'use client';
import React, { useState, MouseEventHandler } from 'react';

type Props = {
  name: string;
  email: string;
  password: string;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setForm: () => void;
};

const Signup = ({
  name,
  email,
  password,
  setName,
  setEmail,
  setPassword,
  setForm,
}: Props) => {
  return (
    <>
      <input
        type='text'
        placeholder='Name'
        className='bg-rose-300/10 p-2'
        value={name}
        onChange={e => setName(e.target.value.trim())}
      />
      <input
        type='email'
        value={email}
        className='bg-rose-300/10 p-2'
        placeholder='Email'
        onChange={e => setEmail(e.target.value.trim())}
      />
      <input
        type='password'
        value={password}
        className='bg-rose-300/10 p-2'
        placeholder='Password'
        onChange={e => setPassword(e.target.value.trim())}
      />
      <button
        type='submit'
        className='font-bold text-rose-700 border border-red-700 max-w-fit mx-auto py-1 px-4'
      >
        Signup
      </button>
      <p className='text-sm'>
        Already have an account? Click{' '}
        <button onClick={() => setForm()}>
          <span className='font-bold text-red-700'>here</span>
        </button>{' '}
        to login!
      </p>
    </>
  );
};

export default Signup;
