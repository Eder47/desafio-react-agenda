import React, { createContext, useContext, ReactNode } from 'react';
import * as userApi from '../service/userApi';


interface ApiContextType {
  userApi: typeof userApi;
}


const ApiContext = createContext<ApiContextType | undefined>(undefined);


interface ApiProviderProps {
  children: ReactNode;
}

export const ApiProvider: React.FC<ApiProviderProps> = ({ children }) => {
  const value: ApiContextType = {
    userApi,
  };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};


export const useApi = (): ApiContextType => {
  const context = useContext(ApiContext);

  if (!context) {
    throw new Error('useApi must be used within an ApiProvider');
  }

  return context;
};
