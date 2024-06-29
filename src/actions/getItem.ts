import baseUrl from "./baseUrl";
import { LangType, ItemType } from "../types";
import CustomError from "./customError";

export default function getItem(lang: LangType, itemId: string) {
  return async () => {
    const url = `${baseUrl}/items/${lang}/${itemId}`;
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (res.status !== 200) {
        throw new CustomError(res.status, data.message);
      }

      return data as ItemType;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}