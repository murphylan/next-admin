'use client';
import { account } from '@/appwrite/config';
import React, { useEffect, useState } from 'react';
import useAuth from '@/app/hooks/useAuth';

type User = {
  name?: string;
  email: string;
  $createdAt: string;
  $updatedAt: string;
  emailVerification: boolean;
};

const ProfilePage = () => {
  const [user, setUser] = useState<User>();
  const auth = useAuth();

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const response = await account.get();
        auth.dispatch({ type: 'UPDATE', payload: response });
        console.log(response);
        setUser({ ...response });
      } catch (error: any) {
        console.error(error);
      }
    };

    getCurrentUser();
  }, []);

  return (
    <div>
      ProfilePage {user?.name || user?.email}
      <p>this should be a protected page</p>
    </div>
  );
};

export default ProfilePage;
