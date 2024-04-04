import { Activity } from "@/types";
import { getData } from "@/utils/getData";
import { useEffect, useState } from "react";

const APP_URL = process.env.NEXT_PUBLIC_BASE_URL;
const url = `${APP_URL}/activities`;
const APP_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const useGetActivities = (): {
  data: Activity[];
  error: any;
  loading: boolean;
} => {
  const [data, setData] = useState<Activity[]>([]);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData(url, APP_KEY);

        const activities: Activity[] = response.data.map((item: any) => ({
          id: item.id,
          categoryId: item.categoryId,
          category: {
            id: item.category.id,
            name: item.category.name,
            imageUrl: item.category.imageUrl,
            createdAt: item.category.createdAt,
            updatedAt: item.category.updatedAt,
          },
          title: item.title,
          description: item.description,
          imageUrls: item.imageUrls,
          price: item.price,
          price_discount: item.price_discount,
          rating: item.rating,
          total_reviews: item.total_reviews,
          facilites: item.facilites,
          address: item.address,
          province: item.province,
          location_maps: item.location_maps,
          createdAt: item.createdAt,
          updatedAt: item.updatedAt,
        }));

        console.log("getActivity", activities);
        setData(activities);
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
