import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface UserInfo {
  state: string;
  degreeType: '4-year' | '2-year' | 'not-sure';
  majorGroup: string;
  isParent: boolean;
  budget: number;
}

export interface Preferences {
  costImportance: number;
  earningsImportance: number;
  gradRateImportance: number;
  debtImportance: number;
  equityImportance: number;
}

interface UserContextType {
  userInfo: UserInfo;
  setUserInfo: (info: UserInfo) => void;
  preferences: Preferences;
  setPreferences: (prefs: Preferences) => void;
}

const defaultUserInfo: UserInfo = {
  state: '',
  degreeType: '4-year',
  majorGroup: '',
  isParent: false,
  budget: 20000,
};

const defaultPreferences: Preferences = {
  costImportance: 3,
  earningsImportance: 3,
  gradRateImportance: 3,
  debtImportance: 3,
  equityImportance: 3,
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userInfo, setUserInfo] = useState<UserInfo>(defaultUserInfo);
  const [preferences, setPreferences] = useState<Preferences>(defaultPreferences);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo, preferences, setPreferences }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
