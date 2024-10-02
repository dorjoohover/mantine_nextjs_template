import { nav1, nav2, nav3 } from "./string";
import { AdSellType } from "@/config/enum";
// export const api = "http://localhost:5050/api/";

// export const url = "http://localhost:3000";
// export const url = "http://103.50.206.58";
// export const api = "http://172.24.48.1:5050/api/";

export const api = "https://srv549330.hstgr.cloud/api/";
// export const api = "http://93.127.186.77:5050/api/";
export const imageApi = `${api}file/`;
// export const url = "http://localhost:3000/";
// export const url = "https://chat-app-web-xi.vercel.app";
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

export const gmailImageUrl = "https://lh3.googleusercontent.com";
export const locationCenter = {
  lat: 47.91887307876936,
  lng: 106.91757202148438,
};

export const navbar = [
  {
    text: nav1,
    value: "/#about",
  },
  {
    text: nav2,

    value: "/#pricing",
  },
  {
    text: nav3.toUpperCase(),
    value: "/#faq",
  },
];

const ad = "ad/";
const category = "category/";
const user = "user/";
const auth = "auth/";
const estimate = "estimate/";

export class ConstantApi {
  static category = `${category}all/`;
  static upload = ``;
}
export class EstimateApi {
  static create = `${estimate}`;
  static update = `${estimate}update/`;
  static price = `${estimate}price/`;
  // static upload = ``;
}

export class AuthApi {
  static register = `${auth}register`;
  static login = `${auth}login`;
}

export class UserApi {
  static user = `${user}`;
  static get = `${user}get/`;
  static me = `${user}me`;
  static sendFeedback = `${user}feedback`;
  static bookmark = `${user}bookmark/`;
  static point = `${user}point/`;
  static update = `${user}update/`;
  static feedback = `${this.user}feedback/`;
  static feedbackGet = `${this.feedback}get/`;
}

export class AdApi {
  static view = `${ad}get/`;
  static search = `${ad}search/{value}?value=`;
  static create = `${ad}`;
  static many = `${ad}many/`;
  static filter = `${ad}filter/`;
  static category = `${ad}category/`;
  static id = `${ad}id/`;
  static admin = `${ad}admin/`;
  static suggestion = `${ad}suggestion/`;
  static update = `${ad}update/`;
  static my = `${ad}my/`;
}
export class CategoryApi {
  static filter = `${category}filters/`;
}

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

export const adminNav = [
  {
    tabName: "Хүсэлт өгсөн зарууд",
    id: "request",

    submenu: [
      {
        tab: "Үл хөдлөх",
        href: "request/realState",
      },

      {
        tab: "Тээврийн хэрэгсэл",
        href: "request/vehicle",
      },
      {
        tab: "Компьютер",
        href: "request/computer",
      },
      {
        tab: "Цахилгаан бараа",
        href: "request/electronic",
      },
      {
        tab: "Гэр ахуйн бараа",
        href: "request/household-items",
      },
    ],
  },
  {
    tabName: "Агент байгууллагын хүсэлт",
    id: "users",

    submenu: [
      {
        tab: "Агент",
        href: "users/agent",
      },
      {
        tab: "Байгууллага",
        href: "users/organization",
      },
      {
        tab: "Энгийн",
        href: "users/default",
      },
    ],
  },
  {
    tabName: "EUnit хэтэвч",
    id: "wallet",
  },

  {
    tabName: "Хуваалцсан зар",
    id: "shared",
  },
  {
    tabName: "Санал хүсэлт",
    id: "feedback",
  },
  {
    tabName: "Үнэлгээ",
    id: "estimating",
  },
  {
    tabName: "Үнэлгээ гаргах",
    id: "estimator",
  },
  {
    tabName: "Гарах",
    id: "logout",
  },
];

export const locationPositions = [
  {
    id: "district",
    name: "Дүүрэг",
  },
  {
    id: "location",
    name: "Байршил",
  },
];

export const SharingSellTypes = [
  {
    id: AdSellType.sold,
    name: "Зарсан",
  },
  {
    id: AdSellType.rented,
    name: "Түрээслүүлсэн",
  },
];
export const SellTypes = [
  {
    id: AdSellType.sell,
    name: "Зарах",
  },
  {
    id: AdSellType.rent,
    name: "Түрээслүүлэх",
  },
  // {
  //   id: AdSellType.sellRent,
  //   name: "Зарах, түрээслүүлэх",
  // },
];

export const SellTypesString = ["Зарах", "Түрээслүүлэх"];
