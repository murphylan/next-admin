'use client';
import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { useRouter } from 'next/navigation';

type Props = {
  children: React.ReactNode;
};

const PrivateLayout = ({ children }: Props) => {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!auth.state.isLoggedIn) return router.push('/');
  }, [auth.state.isLoggedIn, router]);

  return <>{children}</>;
};

export default PrivateLayout;
