import axios from "axios";

import baseUrl from "./baseUrl";
import { LangType } from "../types";
import CustomError from "./customError";

export default async function getSimilarItems(category: string, name: string, lang: LangType) {
  const url = `${baseUrl}/items/${lang}/similar`;
  try {
    const res = await axios.get(url, {
      data: {
        category,
        name
      }
    });
    const { data } = res;
    
    if (res.status !== 200) {
      throw new CustomError(res.status, data.message);
    }
    
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}