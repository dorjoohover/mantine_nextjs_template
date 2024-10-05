const ad = "ad/";
const category = "category/";
const user = "user/";
const auth = "auth/";
const estimate = "estimate/";

export const api = "https://srv549330.hstgr.cloud/api/";

export const imageApi = `${api}file/`;

export const gmailImageUrl = "https://lh3.googleusercontent.com";

export class ConstantApi {
  static category = `${category}all/`;
  static upload = ``;
}

export class EstimateApi {
  static create = `${estimate}`;
  static update = `${estimate}update/`;
  static price = `${estimate}price/`;
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
