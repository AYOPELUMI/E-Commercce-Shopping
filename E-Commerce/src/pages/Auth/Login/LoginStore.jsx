import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const useAuthStore = create()(
    persist(
        (set,get) => ({
  user: JSON.parse(localStorage.getItem('user')) || null,
  accessToken: localStorage.getItem('accessToken') || null,
  refreshToken: localStorage.getItem('refreshToken') || null,

  setUser: (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    set({ user });
  },
  setTokens: (accessToken, refreshToken) => {
    set({ accessToken, refreshToken });
  },
  logOut: () => {
    localStorage.removeItem('user');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    set({ user: null, accessToken: null, refreshToken: null });
  },
}),
{
    name: 'currentUser',
    storage: createJSONStorage(() => sessionStorage),
   
   // merge works perfect
    merge: (persistedState, currentState) => ({ ...currentState, ...persistedState }),
  },
));
