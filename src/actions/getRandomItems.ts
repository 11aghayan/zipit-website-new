import baseUrl from "./baseUrl";
import { LangType } from "../types";
import CustomError from "./customError";
import axios from "axios";

export default async function getRandomItems(lang: LangType) {
  const url = `${baseUrl}/items/${lang}/random`;
  try {
    const res = await axios.get(url);
    const { data } = res;
    
    if (res.status !== 200) {
      throw new CustomError(res.status, data.message);
    }
    
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}