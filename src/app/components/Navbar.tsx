'use client';

import Link from 'next/link';
import React from 'react';
import useAuth from '../hooks/useAuth';
import { account } from '@/appwrite/config';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const auth = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await account.deleteSession('current');
      auth.dispatch({ type: 'LOGOUT', payload: null });
      router.push('/');
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <nav className='bg-rose-700 text-white mb-4'>
      <div className='w-full max-w-5xl mx-auto px-4 py-2 flex justify-between'>
        <ul className='flex gap-x-8'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          {auth.state.isLoggedIn && (
            <li>
              <Link href='/profile'>Profile</Link>
            </li>
          )}
        </ul>

        {auth.state.isLoggedIn && (
          <button onClick={handleLogout}>Logout</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
