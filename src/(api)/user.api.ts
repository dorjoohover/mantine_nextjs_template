"use server";
import { PointTitle } from "@/config/enum";
import { UserModel } from "@/models/user.model";
import { ErrorMessages } from "@/utils/string";
import { UserApi, api } from "@/utils/values";
import { cookies } from "next/headers";
function clearCookie() {
  // const cookie = cookies();
  // const hasToken = cookie.has("token");
  // const hasCurrent = cookie.has("current");
  // if (hasCurrent) cookie.delete("current");
  // if (hasToken) cookie.delete("token");
}
export async function getUser(): Promise<UserModel | null> {
  try {
    const cookie = cookies();
    const token = cookie.get("token");
    const hasCurrent = cookie.has("current");
    const hasType = cookie.has("type");
    if (token?.value != "" && token) {
      const res = await fetch(`${api}${UserApi.me}`, {
        headers: {
          Authorization: `Bearer ${token?.value ?? ""}`,
        },
        cache: "no-store",
      })
        .then((d) => d.json())
        .catch((e) => {
          console.error(e);
          clearCookie();
          return null;
        });
      // const t = localStorage.setItem('token', res._id)
      if (!hasCurrent) cookie.set("current", res._id);
      if (!hasType) cookie.set("type", res.userType);

      return res;
    }
    clearCookie();
    return null;
  } catch (error) {
    console.error(error);
    clearCookie();
    throw new Error(ErrorMessages.occured);
  }
}

export const sendFeedback = async (message: string, title: string) => {
  const token = cookies().get("token");
  if (token) {
    try {
      await fetch(`${api}${UserApi.me}`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token?.value ?? ""}`,
        },
        body: JSON.stringify({
          message: message,
          title: title,
        }),
      }).then((d) => d.json());

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
  return false;
};

export const getFeedback = async () => {
  try {
    const token = cookies().get("token");

    const res = await fetch(`${api}${UserApi.feedbackGet}`, {
      headers: {
        Authorization: `Bearer ${token?.value ?? ""}`,
      },
    }).then((d) => d.json());

    return res;
  } catch (error) {
    console.error(error);
    throw new Error(ErrorMessages.occured);
  }
};

export const sendPointByUser = async (
  email: string,
  point: number,
  type: PointTitle,
  message: string
) => {
  try {
    const token = cookies().get("token");
    const res = await fetch(
      `${api}${
        UserApi.point
      }${email.toLowerCase()}/${point}/${type}/{message}?message=${message}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token?.value ?? ""}`,
        },
      }
    ).then((d) => d.json());

    return res["message"] == "success" ? true : false;
  } catch (error) {
    console.error(error);
    throw new Error(ErrorMessages.occured);
  }
};

export const bookmark = async (id: number) => {
  const token = cookies().get("token");
  if (token) {
    try {
      await fetch(`${api}${UserApi.bookmark}${id}`, {
        method: "PATCH",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token?.value ?? ""}`,
        },
      }).then((d) => d.json());

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
  return false;
};

export const getUsers = async (): Promise<UserModel[] | boolean> => {
  try {
    const token = cookies().get("token");
    if (token?.value) {
      const res = await fetch(`${api}${UserApi.user}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token?.value ?? ""}`,
        },
      }).then((d) => d.json());

      return res;
    }
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};
