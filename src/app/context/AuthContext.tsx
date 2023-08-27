'use client';
import React, { Dispatch, createContext, useReducer } from 'react';

type User = {
  name?: string;
  email: string;
};

type AuthState = {
  user: User | null;
  isLoggedIn: boolean;
};

type AuthAction = {
  type: 'LOGIN' | 'LOGOUT' | 'UPDATE';
  payload: User | null;
};

const initialState = {
  user: null,
  isLoggedIn: false,
};

const authReducer = (state: AuthState, action: AuthAction) => {
  const { type, payload } = action;
  switch (type) {
    case 'LOGIN' || 'UPDATE': {
      return {
        ...state,
        user: payload,
        isLoggedIn: true,
      };
    }
    case 'LOGOUT': {
      return {
        user: null,
        isLoggedIn: false,
      };
    }
    default:
      return state;
  }
};

export const AuthContext = createContext<{
  state: AuthState;
  dispatch: Dispatch<AuthAction>;
}>({
  state: initialState,
  dispatch: () => { },
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
