import { createContext, Dispatch, SetStateAction } from 'react';
export interface IContext {
  isLoggedIn: boolean;
  setIsLoggedIn: null | Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<IContext>({
  isLoggedIn: false,
  setIsLoggedIn: null,
});
