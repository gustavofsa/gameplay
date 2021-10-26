import React,
{
  createContext,
  ReactNode,
  useContext,
  useState
} from 'react';
import * as AuthSession from 'expo-auth-session';

import { api } from '../services/api';
import {
  SCOPE,
  CDN_IMAGE,
  CLIENT_ID,
  REDIRECT_URI,
  RESPONSE_TYPE
} from '../config';

type User = {
  id: string;
  username: string;
  firstName: string;
  avatar: string;
  email: string;
  token: string;
}

type AuthContextData  = {
  user: User;
  isLoading: boolean;
  signIn: () => Promise<void>;
}

type AuthProviderProps = {
  children: ReactNode
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params : {
    access_token: string;
  }
}

const AuthContextInicialData: AuthContextData = {
  user: {
    id: '',
    username: '',
    firstName: '',
    avatar: '',
    email: '',
    token: ''
  },
  isLoading: false,
  signIn: async () => {}
}

export const AuthContext = createContext<AuthContextData>(AuthContextInicialData);

export function AuthProvider({ children } : AuthProviderProps) {
  const [user, setUser] = useState<User>(AuthContextInicialData.user);
  const [loading, setLoading] = useState(false);

  async function signIn() {
    try {
      setLoading(true);

      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

      const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthorizationResponse;

      if(type === 'success') {
        api.defaults.headers.common['Authorization'] = `Bearer ${params.access_token}`

        const userInfo = await api.get('/users/@me');

        const firstName = userInfo.data.username.split(' ')[0];
        userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`

        setUser({
          ...userInfo.data,
          firstName,
          token: params.access_token
        });
      }

      setLoading(false);

    } catch (error) {
      throw new Error('Não foi possível autenticar')
    }
  }

  return (
    <AuthContext.Provider value={{
      user,
      isLoading: loading,
      signIn
    }}>
      { children }
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
