
import { LangType } from "../types";
import baseUrl from "./baseUrl";

export default function getCategories(lang: LangType) {
  return async function () {
    const url = `${baseUrl}/api/v1/categories/${lang}`
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