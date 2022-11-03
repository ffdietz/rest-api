import axios from "axios";
import edamamClient from "./client";

export const apiTest = async (product: string) => {
  const response = await edamamClient.get(`q=${product}`);
  return response
} 