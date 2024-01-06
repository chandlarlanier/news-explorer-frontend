import { createContext, useContext, useState } from 'react';

export const CurrentUserContext = createContext();

export const useCurrentUser = () => {
  return useContext(CurrentUserContext);
};

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  const addCurrentUser = (userInfo) => {
    setCurrentUser(userInfo);
  };

  const removeCurrentUser = () => {
    setCurrentUser({});
  };

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, addCurrentUser, removeCurrentUser }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
