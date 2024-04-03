import { useFetch } from "@/hooks/useFetch.";
import { Category } from "@/types";

const APP_URL = process.env.NEXT_PUBLIC_BASE_URL;
const url = `${APP_URL}/categories`;
const APP_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const getCategory = async (): Promise<Category[]> => {
  try {
    const response = await useFetch(url, APP_KEY);

    const categories: Category[] = response.data.map((item: any) => ({
      id: item.id,
      name: item.name,
      imageUrl: item.imageUrl,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    }));

    console.log("getCategory", categories);
    return categories;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
