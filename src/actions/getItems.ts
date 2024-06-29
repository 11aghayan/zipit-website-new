import baseUrl from "./baseUrl";
import { ItemsResponseType, LangType } from "../types";
import CustomError from "./customError";

export default function getItems(lang: LangType, sp: string) {
  return async () => {
    const url = `${baseUrl}/items/${lang}?${sp}`;
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (res.status !== 200) {
        throw new CustomError(res.status, data.message);
      }
      
      return data as ItemsResponseType;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}