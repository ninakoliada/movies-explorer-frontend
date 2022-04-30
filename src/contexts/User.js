import React, { useContext } from 'react';

export const UserContext = React.createContext({ user: {}, setUserData: () => { } });

export const UserProvider = UserContext.Provider;

export const useUserData = () => useContext(UserContext);