"use client";
import { AdCateIdType, FetchAdType } from "@/utils/type";
import { GoogleMapsOptions } from "@/utils/values";
import { ReactNode, createContext, useState, useContext } from "react";

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: ReactNode }) {
  let [ads, setAds] = useState<FetchAdType>({
    defaultAds: {
      ads: [],
      limit: 0,
    },
    specialAds: {
      ads: [],
      limit: 0,
    },
  });
  let [compare, setCompare] = useState<AdCateIdType[]>([]);

  return (
    <AppContext.Provider
      value={{
        ads,
        setAds,
        compare,
        setCompare,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
