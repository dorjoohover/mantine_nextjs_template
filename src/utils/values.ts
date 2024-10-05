import { ItemPosition, ItemTypes } from "@/config/enum";

export const categoryNames = [
  "Орон сууц",
  "Газар",
  "Худалдаа, үйлчилгээний талбай",
  "АОС, хаус, амралтын газар",
  "Хашаа байшин, гэр",
  "Үйлдвэр, агуулах, обьект",
  "Оффис",
  "Гараж, контейнер",
];
export const districts = [
  "Баянзүрх дүүрэг",
  "Сүхбаатар дүүрэг",
  "Багануур дүүрэг",
  "Чингэлтэй дүүрэг",
  "Сонгинохайрхан дүүрэг",
  "Багахангай дүүрэг",
  "Баянгол дүүрэг",
  "Налайх дүүрэг",
  "Хан-Уул дүүрэг",
];

export const itemNames = [
  {
    name: "Ашиглалтад орсон он",
    id: "operation",
    range: true,
    location: false,
  },
  {
    name: "Талбай",
    id: "area",
    range: true,
    location: false,
  },
  {
    name: "Үнэ",
    id: "price",
    range: true,
    location: false,
  },
  {
    name: "Хэдэн давхарт",
    id: "howFloor",
    range: true,
    location: false,
  },
  {
    name: "Дүүрэг",
    id: "district",
    range: false,
    location: true,
  },
  {
    name: "Байршил",
    id: "location",
    range: false,
    location: true,
  },
];

export const locationCenter = {
  lat: 47.91887307876936,
  lng: 106.91757202148438,
};

export const createAdNav = [
  {
    tabName: "Зар нэмэх",
    id: "ad/create",

    submenu: [
      {
        tab: "Зар нэмэх",
        href: "ad/create",
      },
      {
        tab: "Зар хуваалцах",
        href: "ad/sharing",
      },
    ],
  },
];

export const AdminNavigationItems = [
  {
    title: "Ad Requests",
    key: "adRequests",

    subItems: [
      {
        label: "Real Estate",
        link: "requests/real-estate",
      },
      {
        label: "Vehicles",
        link: "requests/vehicles",
      },
      {
        label: "Computers",
        link: "requests/computers",
      },
      {
        label: "Electronics",
        link: "requests/electronics",
      },
      {
        label: "Household Items",
        link: "requests/household-items",
      },
    ],
  },
  {
    title: "User Requests",
    key: "userRequests",

    subItems: [
      {
        label: "Agents",
        link: "users/agents",
      },
      {
        label: "Organizations",
        link: "users/organizations",
      },
      {
        label: "Regular Users",
        link: "users/regular",
      },
    ],
  },
  {
    title: "EUnit Wallet",
    key: "eunitWallet",
  },
  {
    title: "Shared Ads",
    key: "sharedAds",
  },
  {
    title: "User Feedback",
    key: "userFeedback",
  },
  {
    title: "Ratings",
    key: "itemRatings",
  },
  {
    title: "Submit Rating",
    key: "submitRating",
  },
  {
    title: "Logout",
    key: "logout",
  },
];



export const buildingFloorValues = [
  {
    label: "B2",
    value: "B2",
  },
  {
    label: "B1",
    value: "B1",
  },
  ...Array.from({ length: 30 }, (_, i) => {
    return {
      label: `${1 + i}`,
      value: `${1 + i}`,
    };
  }),
];

export const buildingFloorName = {
  id: "buildingFloor",
  types: ItemTypes.dropdown,
  isUse: true,
  index: 3,
  name: "Барилгын давхар",
  position: ItemPosition.default,
  value: buildingFloorValues,
};
export const areaName = {
  id: "area",
  types: ItemTypes.text,
  isUse: true,
  isSearch: true,
  index: -1,
  name: "Талбай",
  position: ItemPosition.any,
};
export const priceName = {
  id: "price",
  types: ItemTypes.text,
  index: 0,
  name: "Үнэ",
  position: ItemPosition.side,
};

export const operationName = {
  id: "operation",
  type: ItemTypes.date,
  isSearch: true,
  index: 2,
  isUse: true,
  name: 'Ашиглалтад орсон он',
  other: false,
  position: ItemPosition.default,
};
export const howFloorName = {
  id: "howFloor",
  type: ItemTypes.dropdown,
  isSearch: true,
  index: 4,
  parent: "buildingFloor",
  name: 'Хэдэн давхарт',
  isUse: true,
  position: ItemPosition.default,
};


export const SellTypesString = ["Зарах", "Түрээслүүлэх"];
