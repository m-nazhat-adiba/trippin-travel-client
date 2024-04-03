import { useFetch } from "@/hooks/useFetch.";
import { Activity } from "@/types";

const APP_URL = process.env.NEXT_PUBLIC_BASE_URL;
const url = `${APP_URL}/activities`;
const APP_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const getActivities = async (): Promise<Activity[]> => {
  try {
    const response = await useFetch(url, APP_KEY);

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
    return activities;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
