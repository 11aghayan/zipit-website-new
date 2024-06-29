
import { LangType } from "../types";
import baseUrl from "./baseUrl";
import CustomError from "./customError";

export default function getCategories(lang: LangType) {
  return async function () {
    const url = `${baseUrl}/categories/${lang}`
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (res.status !== 200) {
        throw new CustomError(res.status, data.message);
      }
      
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}