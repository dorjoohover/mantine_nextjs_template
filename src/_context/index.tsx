"use client";
import { AdCateIdType } from "@/utils/type";
import { ReactNode, createContext, useState, useContext } from "react";
interface AppContextType {
  compare: AdCateIdType[];
  setCompare: React.Dispatch<React.SetStateAction<AdCateIdType[]>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppWrapper({ children }: { children: ReactNode }) {
  const [compare, setCompare] = useState<AdCateIdType[]>([]); // Managing state

  return (
    <AppContext.Provider value={{ compare, setCompare }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
