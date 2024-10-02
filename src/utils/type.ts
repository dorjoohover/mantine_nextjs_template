import { ProfileEnumType } from "@/config/enum";
import React, { ReactNode } from "react";

export type AdCateIdType = {
  id: string;
  cateId: string;
};
export type GeneralDataType = {
  price: number;
  area: number;
  unitPrice: number;
  title: string;
  desc: string;
  imgSelected: boolean;
  images: string[];
  phone: number;
};
export type GoogleMapsType = {
  lat: number;
  lng: number;
};

export type CacheVarType = {
  parent?: string;
  position?: string;
  value: string;
  id: string;
};

export type StepTypes = {
  map?: GoogleMapsType;
  district?: string;
  location?: string;
  committee?: string;
  town?: string;
  landLicense?: string;
  landUsage?: string;
  licenseOperation?: string;
  operation?: string;
  buildingFloor?: string;
  howFloor?: string;
  validDate?: number;
  paymentMethod?: string;
  barter?: string;
  price?: number;
  area?: number;
  unitPrice?: number;
  title?: string;
  desc?: string;
  imgSelected?: boolean;
  images?: string[];
  phone?: number;
  files?: File[];
};
export type ItemType = {
  data?: string;
  className?: string;
  onClick?: () => void;
  id?: string;
  children?: ReactNode;
  isSelected?: boolean;
};

export type ProfileType = {
  item: ProfileEnumType;
  edit?: boolean;
  value?: string;
  onChange: (e: string) => void;
  className?: string;
  ph?: string;
  type?: string;
};
export type DateType = {
  defValue?: string;
  title?: string;
  requirement?: boolean;
  value?: string;
  name?: string;
  onSelect?: (value: string) => void;
  limit?: number;
  maxValue?: number;
  setValue?: React.Dispatch<React.SetStateAction<number>>;
};
export type TextType = {
  title?: string;
  ph?: string;
  onChange?: (value: string) => void;
  value?: string;
};
// export type SelectType = {

//   data,
//   Item = () => <></>,
//   selected,
//   title?: string;
//   ph?: string;
//   onChange?: (value: string) => {};
//   value?: string;
// };
