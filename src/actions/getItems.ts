import baseUrl from "./baseUrl";
import { LangType } from "../types";

export default function getItems(lang: LangType) {
  return async () => {
    const url = `${baseUrl}/api/v1/items/${lang}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}