import { Category } from "@/types";
import { getData } from "@/utils/getData";
import { useEffect, useState } from "react";

const APP_URL = process.env.NEXT_PUBLIC_BASE_URL;
const url = `${APP_URL}/categories`;
const APP_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const useGetCategory = (): {
  data: Category[];
  error: any;
  loading: boolean;
} => {
  const [data, setData] = useState<Category[]>([]);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData(url, APP_KEY); // Await getData
        const categories: Category[] = response.data.map((item: any) => ({
          id: item.id,
          name: item.name,
          imageUrl: item.imageUrl,
          createdAt: item.createdAt,
          updatedAt: item.updatedAt,
        }));
        console.log("getCategory", categories);
        setData(categories);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, error, loading };
};
